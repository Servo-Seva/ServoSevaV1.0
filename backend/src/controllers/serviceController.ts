import { Request, Response } from "express";
import * as svc from "../services/serviceService";
import { ok, err } from "../utils/response";

export const list = async (req: Request, res: Response) => ok(res, await svc.list());
export const create = async (req: Request, res: Response) => ok(res, await svc.create(req.body), "Created");
export const update = async (req: Request, res: Response) => ok(res, await svc.update(req.params.id, req.body), "Updated");
export const remove = async (req: Request, res: Response) => ok(res, await svc.remove(req.params.id), "Deleted");
