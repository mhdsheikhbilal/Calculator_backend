import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["POST", "GET","PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));

import calculationRoutes from "./routes/calculation.routes.js";
app.use("/api/v1/calculations", calculationRoutes);

export default app;
