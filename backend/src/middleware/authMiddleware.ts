import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { env } from "../config/env";

export interface AuthRequest extends Request {
  user?: any;
}

export const requireAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ success: false, message: "Missing Authorization header" });
    const [, token] = auth.split(" ");
    if (!token) return res.status(401).json({ success: false, message: "Missing token" });
    const decoded: any = jwt.verify(token, env.JWT_ACCESS_SECRET);
    const user = await User.findById(decoded.id).lean();
    if (!user) return res.status(401).json({ success: false, message: "User not found" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
    if (!roles.includes(req.user.role)) return res.status(403).json({ success: false, message: "Forbidden" });
    next();
  };
};
