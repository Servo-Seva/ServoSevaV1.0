import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT || 5000),
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/home_services",
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "change_me_access",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "change_me_refresh",
  ACCESS_TOKEN_EXPIRES: process.env.ACCESS_TOKEN_EXPIRES || "15m",
  REFRESH_TOKEN_EXPIRES_DAYS: Number(process.env.REFRESH_TOKEN_EXPIRES_DAYS || 30),
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || "localhost",
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || "",
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || "",
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET || "",
  ADMIN_COMMISSION_PERCENT: Number(process.env.ADMIN_COMMISSION_PERCENT || 10),
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || ""
};
