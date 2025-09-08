import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/authMiddleware";
import * as ctrl from "../controllers/jobController";

const r = Router();

r.post("/book", requireAuth, ctrl.bookJob); // auto-assign provider
r.get("/me", requireAuth, ctrl.getMyJobs);
r.get("/:id", requireAuth, ctrl.getJob);
r.put("/:id/status", requireAuth, ctrl.updateStatus); // provider/customer/admin transitions
r.put("/:id/accept", requireAuth, requireRole(["provider"]), ctrl.acceptJob);

export default r;
