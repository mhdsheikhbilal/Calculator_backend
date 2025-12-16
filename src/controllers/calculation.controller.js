import Calculation from "../models/calculation.model.js";

export const saveCalculation = async (req, res) => {
  const { expression, result } = req.body;

  const calc = await Calculation.create({ expression, result });
  res.status(201).json(calc);
};

export const getHistory = async (req, res) => {
  const history = await Calculation.find().sort({ createdAt: -1 });
  res.json(history);
};

export const clearHistory = async (req, res) => {
  await Calculation.deleteMany();
  res.json({ message: "History cleared" });
};

export const deleteOneCalculation = async (req, res) => {
  const { id } = req.params;

  const deleted = await Calculation.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json({ message: "Calculation not found" });
  }

  res.json({ message: "Calculation deleted successfully" });
};
