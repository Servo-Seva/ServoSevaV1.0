import { Router } from "express";
import { rawBodyMiddleware } from "../middleware/rawBodyMiddleware";
import * as ctrl from "../controllers/webhookController";

const r = Router();

// apply raw body middleware for this route to verify signature correctly
r.post("/razorpay", rawBodyMiddleware, ctrl.razorpay);

export default r;
