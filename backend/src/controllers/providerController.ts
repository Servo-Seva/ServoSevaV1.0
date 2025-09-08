import { Request, Response } from "express";
import * as providerService from "../services/providerService";
import { ok, err } from "../utils/response";

export const apply = async (req: any, res: Response) => {
  try {
    const p = await providerService.apply(req.user._id, req.body);
    return ok(res, p);
  } catch (e: any) {
    return err(res, e.message);
  }
};

export const search = async (req: Request, res: Response) => {
  const q = req.query;
  const providers = await providerService.search(q);
  return ok(res, providers);
};

export const getOne = async (req: Request, res: Response) => {
  const p = await providerService.getById(req.params.id);
  return ok(res, p);
};

export const updateMe = async (req: any, res: Response) => {
  try {
    const p = await providerService.update(req.user._id, req.body);
    return ok(res, p);
  } catch (e: any) {
    return err(res, e.message);
  }
};
