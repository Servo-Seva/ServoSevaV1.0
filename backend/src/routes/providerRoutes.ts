import { Router } from "express";
import { requireAuth, requireRole } from "../middleware/authMiddleware";
import * as ctrl from "../controllers/providerController";

const r = Router();

r.post("/apply", requireAuth, requireRole(["provider"]), ctrl.apply);
r.get("/", ctrl.search); // /api/providers?skill=plumbing&lng=..&lat=..&radius=
r.get("/:id", ctrl.getOne);
r.put("/me", requireAuth, requireRole(["provider"]), ctrl.updateMe);

export default r;
