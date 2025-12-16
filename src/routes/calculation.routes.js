import { Router } from "express";
import {
  saveCalculation,
  getHistory,
  clearHistory,
  deleteOneCalculation
} from "../controllers/calculation.controller.js";

const router = Router();

router.post("/", saveCalculation);
router.get("/", getHistory);
router.delete("/", clearHistory);
router.delete("/:id", deleteOneCalculation);

export default router;
