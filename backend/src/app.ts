import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
// import routes from "./routes";
// import { errorHandler } from "./middleware/errorMiddleware";
// import { rawBodyMiddleware } from "./middleware/rawBodyMiddleware";

const app = express();
app.use(cors({
  origin: "http://localhost:8080", // frontend origin
  credentials: true
}));

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
app.use("/api", routes);

// health
app.get("/health", (_, res) => res.json({ ok: true }));

app.get("/api/autocomplete", async (req, res) => {
  const input = req.query.input;
  if (!input) return res.status(400).json({ error: "Missing input" });

  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_API_KEY ?? "",
          "X-Goog-FieldMask": "suggestions.placePrediction.text,suggestions.placePrediction.placeId"
        },
        body: JSON.stringify({
          input: input,
          includedPrimaryTypes: ["locality", "sublocality", "postal_code"],
          regionCode: "IN" // Restrict to India
        })
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Google Places API" });
  }
});

// Error handler
// app.use(errorHandler);

export default app;
