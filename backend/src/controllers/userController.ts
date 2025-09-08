import { Request, Response } from "express";
import * as userService from "../services/userService";
import { ok, err } from "../utils/response";

export const me = async (req: any, res: Response) => ok(res, await userService.getById(req.user._id));
export const updateMe = async (req: any, res: Response) => {
  try {
    const updated = await userService.update(req.user._id, req.body);
    return ok(res, updated);
  } catch (e: any) {
    return err(res, e.message);
  }
};
export const getMyProviders = async (req: any, res: Response) => ok(res, await userService.getMyProviders(req.user._id));
