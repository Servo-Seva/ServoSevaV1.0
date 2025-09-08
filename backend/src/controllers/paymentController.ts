import { Request, Response } from "express";
import * as paymentService from "../services/paymentService";
import { ok, err } from "../utils/response";

export const createOrder = async (req: any, res: Response) => {
  try {
    const order = await paymentService.createOrder(req.body.jobId, req.user._id);
    return ok(res, order, "Order created");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const verifyPayment = async (req: any, res: Response) => {
  try {
    const r = await paymentService.verifyPayment(req.body);
    return ok(res, r, "Payment processed");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const getByJob = async (req: any, res: Response) => {
  try {
    const p = await paymentService.getByJob(req.params.jobId);
    return ok(res, p);
  } catch (e: any) {
    return err(res, e.message);
  }
};
