import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import cors from "cors";
import morgan from "morgan";
// import routes from "./routes";
// import { errorHandler } from "./middleware/errorMiddleware";
// import { rawBodyMiddleware } from "./middleware/rawBodyMiddleware";

const app = express();

// We will use raw parsing for webhook route only via middleware (rawBodyMiddleware)
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);

// mount routes
// app.use("/api", routes);

// health
app.get("/health", (_, res) => res.json({ ok: true }));

// Error handler
// app.use(errorHandler);

export default app;
