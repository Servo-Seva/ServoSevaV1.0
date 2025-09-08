import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import * as ctrl from "../controllers/paymentController";

const r = Router();

r.post("/create-order", requireAuth, ctrl.createOrder);
r.post("/verify", requireAuth, ctrl.verifyPayment); // optional if you want client verification
r.get("/job/:jobId", requireAuth, ctrl.getByJob);

export default r;
