import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";
const start = async () => {
  await connectDB();  
  
  app.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT} (${process.env.NODE_ENV})`);
  });
};

start();
