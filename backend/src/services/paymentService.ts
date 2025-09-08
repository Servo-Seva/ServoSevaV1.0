import Razorpay from "razorpay";
import Job from "../models/Job";
import Payment from "../models/Payment";
import { env } from "../config/env";
import crypto from "crypto";

const razor = new Razorpay({ key_id: env.RAZORPAY_KEY_ID, key_secret: env.RAZORPAY_KEY_SECRET });

export const createOrder = async (jobId: string, customerId: string) => {
  const job = await Job.findById(jobId);
  if (!job) throw new Error("Job not found");
  if (String(job.customerId) !== String(customerId)) throw new Error("Not your job");
  if (job.status !== "completed_pending_payment") throw new Error("Job not ready for payment");
  const amountPaise = Math.round((job.price.amount || 0) * 100);
  const receipt = `job_${job._id.toString()}`;
  const order = await razor.orders.create({ amount: amountPaise, currency: "INR", receipt, payment_capture: true });
  const payment = await Payment.create({
    jobId: job._id,
    customerId: job.customerId,
    providerId: job.providerId,
    amountTotal: job.price.amount,
    currency: "INR",
    commission: job.commissionAmount,
    providerPayout: job.providerAmount,
    status: "initiated",
    razorpayOrderId: order.id
  });
  job.payment = { status: "initiated", orderId: order.id };
  await job.save();
  return { orderId: order.id, amount: amountPaise, currency: "INR" };
};

export const verifyPayment = async (payload: any) => {
  // verify signature for client-provided verification (not recommended vs webhook)
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = payload;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expected = crypto.createHmac("sha256", env.RAZORPAY_KEY_SECRET).update(body).digest("hex");
  if (expected !== razorpay_signature) throw new Error("Invalid signature");
  const payment = await Payment.findOne({ razorpayOrderId: razorpay_order_id });
  if (!payment) throw new Error("Payment record not found");
  payment.status = "success";
  payment.razorpayPaymentId = razorpay_payment_id;
  await payment.save();
  // update job
  const job = await Job.findById(payment.jobId);
  if (job) {
    job.payment = { status: "success", paymentId: razorpay_payment_id, orderId: razorpay_order_id, captured: true };
    job.status = "paid";
    job.timeline.push({ at: new Date(), event: "paid", by: payment.customerId });
    await job.save();
  }
  // payout stub: mark payout pending
  payment.payout = { status: "pending", attemptedAt: new Date() };
  await payment.save();
  return payment;
};

export const getByJob = async (jobId: string) => Payment.findOne({ jobId }).lean();
