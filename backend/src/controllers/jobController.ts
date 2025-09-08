import { Request, Response } from "express";
import * as jobService from "../services/jobService";
import { ok, err } from "../utils/response";

export const bookJob = async (req: any, res: Response) => {
  try {
    const job = await jobService.createJob(req.user._id, req.body);
    return ok(res, job, "Job booked");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const getMyJobs = async (req: any, res: Response) => {
  try {
    const jobs = await jobService.getMyJobs(req.user._id, req.user.role);
    return ok(res, jobs);
  } catch (e: any) {
    return err(res, e.message);
  }
};

export const getJob = async (req: any, res: Response) => {
  try {
    const job = await jobService.getJob(req.params.id, req.user);
    return ok(res, job);
  } catch (e: any) {
    return err(res, e.message, 404);
  }
};

export const acceptJob = async (req: any, res: Response) => {
  try {
    const job = await jobService.acceptJob(req.params.id, req.user._id);
    return ok(res, job, "Accepted");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const updateStatus = async (req: any, res: Response) => {
  try {
    const job = await jobService.updateStatus(req.params.id, req.body.status, req.user);
    return ok(res, job, "Status updated");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};
