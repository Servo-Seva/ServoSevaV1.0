import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import * as ctrl from "../controllers/userController";

const r = Router();
r.get("/me", requireAuth, ctrl.me);
r.put("/me", requireAuth, ctrl.updateMe);
r.get("/me/providers", requireAuth, ctrl.getMyProviders);

export default r;
