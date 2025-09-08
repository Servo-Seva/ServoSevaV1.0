import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, env.JWT_ACCESS_SECRET as Secret, {
    expiresIn: env.ACCESS_TOKEN_EXPIRES as SignOptions["expiresIn"],
  });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, env.JWT_ACCESS_SECRET as Secret);

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, env.JWT_REFRESH_SECRET as Secret, {
    expiresIn: `${env.REFRESH_TOKEN_EXPIRES_DAYS}d` as SignOptions["expiresIn"],
  });

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, env.JWT_REFRESH_SECRET as Secret);
