import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import app from "./app.js";

await connectDB();   // 🔥 THIS IS CRITICAL

export default app;
