import crypto from "crypto";
import { env } from "../config/env";
import Payment from "../models/Payment";
import Job from "../models/Job";
import WebhookLog from "../models/WebhookLog";

export const handleRazorpayWebhook = async (req: any) => {
  const raw = req.rawBody || JSON.stringify(req.body);
  const signature = req.headers["x-razorpay-signature"] as string;
  // store webhook raw for idempotency & debugging
  const eventId = req.body && req.body.payload && req.body.payload.payment && req.body.payload.payment.entity && req.body.payload.payment.entity.id;
  try {
    const expected = crypto.createHmac("sha256", env.RAZORPAY_WEBHOOK_SECRET).update(raw).digest("hex");
    const valid = expected === signature;
    await WebhookLog.create({ provider: "razorpay", eventId: eventId || undefined, eventType: req.body.event, rawPayload: req.body, signatureValid: valid, processed: false });
    if (!valid) throw new Error("Invalid webhook signature");
    const event = req.body.event;
    if (event === "payment.captured") {
      const paymentEntity = req.body.payload.payment.entity;
      const orderId = paymentEntity.order_id;
      const razorpayPaymentId = paymentEntity.id;
      const payment = await Payment.findOne({ razorpayOrderId: orderId });
      if (payment && payment.status !== "success") {
        payment.status = "success";
        payment.razorpayPaymentId = razorpayPaymentId;
        await payment.save();
        const job = await Job.findById(payment.jobId);
        if (job) {
          job.payment = { status: "success", paymentId: razorpayPaymentId, orderId, captured: true };
          job.status = "paid";
          job.timeline.push({ at: new Date(), event: "paid", by: payment.customerId });
          await job.save();
        }
        // mark payout initiated (stub)
        payment.payout = { status: "initiated", attemptedAt: new Date() };
        await payment.save();
      }
    }
    // mark processed
    await WebhookLog.updateOne({ eventId: eventId || undefined }, { $set: { processed: true } }, { upsert: false });
  } catch (e) {
    console.error("Webhook handling failed:", e);
    throw e;
  }
};
