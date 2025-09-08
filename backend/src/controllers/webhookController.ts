import { Request, Response } from "express";
import * as webhookService from "../services/webhookService";
import { ok, err } from "../utils/response";

export const razorpay = async (req: Request, res: Response) => {
  try {
    await webhookService.handleRazorpayWebhook(req);
    return ok(res, null, "Webhook processed");
  } catch (e: any) {
    console.error("webhook error", e);
    return err(res, e.message, 400);
  }
};
