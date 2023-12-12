const express = require("express");
const router = express.Router();
const PlanComptable = require("../models/PlanComptable");

// Get all plan comptables
router.get("/", async (req, res) => {
  try {
    const planComptables = await PlanComptable.find({});
    res.json(planComptables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new plan comptable
router.post("/", async (req, res) => {
  try {
    const newPlanComptable = new PlanComptable({
      code: req.body.code,
      libelle: req.body.libelle,
      type: req.body.type,
      nature: req.body.nature,
      niveau: req.body.niveau,
      parent: req.body.parent,
    });
    const savedPlanComptable = await newPlanComptable.save();
    res.status(201).json(savedPlanComptable);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a plan comptable
router.put("/:id", async (req, res) => {
  try {
    const updatedPlanComptable = await PlanComptable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlanComptable) {
      res.status(404).json({ message: "Plan comptable not found" });
    }
    res.json(updatedPlanComptable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a plan comptable
router.delete("/:id", async (req, res) => {
  try {
    await PlanComptable.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan comptable deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
