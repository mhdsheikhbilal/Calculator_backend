import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));

import calculationRoutes from "./routes/calculation.routes.js";
app.use("/api/v1/calculations", calculationRoutes);

export default app;
