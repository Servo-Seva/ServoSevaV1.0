import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/hash";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/jwt";
import { Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";
import PasswordReset from "../models/PasswordReset";
import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env";

const REFRESH_COOKIE = "refresh_token";
const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export const register = async ({ firstname, lastname, email, password, role }: any) => {
  console.log(firstname,lastname, email, password, role);
  
  if (!email || !password || !firstname || !lastname) throw new Error("Missing fields");
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Email already exists");
  const hashed = await hashPassword(password);
  const user = await User.create({firstname, lastname, email, passwordHash: hashed, role: role || "customer" });
  return { id: user._id, name: user.name, email: user.email, role: user.role };
};

export const login = async ({ email, password }: any, res: Response) => {
  if (!email || !password) throw new Error("Missing fields");
  const user = await User.findOne({ email }).select("+passwordHash");
  if (!user) throw new Error("Invalid credentials");
  const ok = await comparePassword(password, user.passwordHash || "");
  if (!ok) throw new Error("Invalid credentials");

  const accessToken = signAccessToken({ id: user._id, role: user.role });
  const familyId = uuidv4();
  user.refreshTokenFamilies = (user.refreshTokenFamilies || []).concat({ familyId, createdAt: new Date() });
  await user.save();
  const refreshToken = signRefreshToken({ id: user._id, familyId });

  res.cookie(REFRESH_COOKIE, refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30
  });

  return { accessToken, user: { id: user._id, name: user.name, email: user.email, role: user.role } };
};

export const googleSignIn = async (idToken: string, res: Response) => {
  if (!idToken) throw new Error("Missing id_token");
  const ticket = await googleClient.verifyIdToken({ idToken, audience: env.GOOGLE_CLIENT_ID });
  const payload = ticket.getPayload();
  if (!payload || !payload.email) throw new Error("Invalid Google token");
  let user = await User.findOne({ email: payload.email });
  if (!user) {
    user = await User.create({ name: payload.name || "Google User", email: payload.email, googleId: payload.sub, role: "customer" });
  }
  const accessToken = signAccessToken({ id: user._id, role: user.role });
  const familyId = uuidv4();
  user.refreshTokenFamilies = (user.refreshTokenFamilies || []).concat({ familyId, createdAt: new Date() });
  await user.save();
  const refreshToken = signRefreshToken({ id: user._id, familyId });
  res.cookie(REFRESH_COOKIE, refreshToken, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 1000 * 60 * 60 * 24 * 30
  });
  return { accessToken, user: { id: user._id, name: user.name, email: user.email, role: user.role } };
};

export const forgotPassword = async (email: string) => {
  if (!email) return;
  const user = await User.findOne({ email });
  if (!user) return;
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  await PasswordReset.create({ userId: user._id, tokenHash: token, expiresAt });
  // In prod: send email. For now print to console
  console.log(`[PasswordReset] token for ${email}: ${token}`);
};

export const resetPassword = async (token: string, newPassword: string) => {
  const rec = await PasswordReset.findOne({ tokenHash: token, used: false, expiresAt: { $gt: new Date() } });
  if (!rec) throw new Error("Invalid or expired token");
  const user = await User.findById(rec.userId).select("+passwordHash");
  if (!user) throw new Error("User not found");
  user.passwordHash = await hashPassword(newPassword);
  await user.save();
  rec.used = true;
  await rec.save();
};

export const refreshToken = async (req: Request, res: Response) => {
  const token = req.cookies[REFRESH_COOKIE];
  if (!token) throw new Error("No refresh token");
  const payload: any = verifyRefreshToken(token);
  const user = await User.findById(payload.id);
  if (!user) throw new Error("User not found");
  const family = (user.refreshTokenFamilies || []).find((f: any) => f.familyId === payload.familyId && !f.revoked);
  if (!family) throw new Error("Refresh revoked");
  const accessToken = signAccessToken({ id: user._id, role: user.role });
  // rotate refresh token - keep same familyId here for simplicity
  const refresh = signRefreshToken({ id: user._id, familyId: payload.familyId });
  res.cookie(REFRESH_COOKIE, refresh, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 1000 * 60 * 60 * 24 * 30 });
  return { accessToken };
};

export const logout = async (req: Request, res: Response) => {
  const token = req.cookies[REFRESH_COOKIE];
  if (!token) {
    res.clearCookie(REFRESH_COOKIE);
    return;
  }
  try {
    const payload: any = verifyRefreshToken(token);
    const user = await User.findById(payload.id);
    if (user) {
      user.refreshTokenFamilies = (user.refreshTokenFamilies || []).map((f: any) => (f.familyId === payload.familyId ? { ...f.toObject(), revoked: true } : f));
      await user.save();
    }
  } catch (e) {
    // ignore
  }
  res.clearCookie(REFRESH_COOKIE);
};
