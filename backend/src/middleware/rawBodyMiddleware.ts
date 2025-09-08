/**
 * For Razorpay webhook we must verify signature using raw body.
 * Use this middleware on the webhook route to expose req.rawBody.
 */
import { Request, Response, NextFunction } from "express";
import getRawBody from "raw-body";

export const rawBodyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const raw = await getRawBody(req);
    // attach raw string for webhook verify
    (req as any).rawBody = raw.toString("utf8");
    // parse JSON so later handlers can still read req.body
    try {
      req.body = JSON.parse((req as any).rawBody);
    } catch (_) {
      // ignore parse error; some webhooks may send non-json
    }
    next();
  } catch (err) {
    next(err);
  }
};
