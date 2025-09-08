import { Router } from "express";
import * as ctrl from "../controllers/authController";

const r = Router();

r.post("/register", ctrl.register);
r.post("/login", ctrl.login);
r.post("/google", ctrl.googleSignIn);
r.post("/forgot-password", ctrl.forgotPassword);
r.post("/reset-password", ctrl.resetPassword);
r.post("/refresh", ctrl.refreshToken);
r.post("/logout", ctrl.logout);

export default r;
