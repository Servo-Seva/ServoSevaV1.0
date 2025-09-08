import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import * as ctrl from "../controllers/reviewController";

const r = Router();

r.post("/", requireAuth, ctrl.createReview);
r.get("/provider/:id", ctrl.getByProvider);

export default r;
