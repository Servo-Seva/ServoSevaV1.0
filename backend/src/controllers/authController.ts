import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ok, err } from "../utils/response";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body);
    return ok(res, user, "Registered");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await authService.login(req.body, res);
    return ok(res, result, "Logged in");
  } catch (e: any) {
    return err(res, e.message, 401);
  }
};

export const googleSignIn = async (req: Request, res: Response) => {
  try {
    const result = await authService.googleSignIn(req.body.id_token, res);
    return ok(res, result, "Google login");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    await authService.forgotPassword(req.body.email);
    return ok(res, null, "If the email exists, a reset link will be sent");
  } catch (e: any) {
    return err(res, e.message, 500);
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    await authService.resetPassword(req.body.token, req.body.password);
    return ok(res, null, "Password reset");
  } catch (e: any) {
    return err(res, e.message, 400);
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const result = await authService.refreshToken(req, res);
    return ok(res, result, "Token refreshed");
  } catch (e: any) {
    return err(res, e.message, 401);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    await authService.logout(req, res);
    return ok(res, null, "Logged out");
  } catch (e: any) {
    return err(res, e.message, 500);
  }
};
