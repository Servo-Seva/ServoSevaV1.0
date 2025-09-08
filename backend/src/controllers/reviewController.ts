import { Request, Response } from "express";
import * as reviewService from "../services/reviewService";
import { ok, err } from "../utils/response";

export const createReview = async (req: any, res: Response) => {
  try {
    const r = await reviewService.create(req.user._id, req.body);
    return ok(res, r);
  } catch (e: any) {
    return err(res, e.message);
  }
};

export const getByProvider = async (req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getByProvider(req.params.id);
    return ok(res, reviews);
  } catch (e: any) {
    return err(res, e.message);
  }
};
