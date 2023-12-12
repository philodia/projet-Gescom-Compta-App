const express = require("express");
const router = express.Router();
const GrandLivre = require("../models/GrandLivre");

// Get all grand livres
router.get("/", async (req, res) => {
  try {
    const grandLivres = await GrandLivre.find({});
    res.json(grandLivres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new grand livre
router.post("/", async (req, res) => {
  try {
    const newGrandLivre = new GrandLivre({
      date: req.body.date,
      numeroLigne: req.body.numeroLigne,
      compte: req.body.compte,
      libelle: req.body.libelle,
      debit: req.body.debit,
      credit: req.body.credit,
    });
    const savedGrandLivre = await newGrandLivre.save();
    res.status(201).json(savedGrandLivre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get grand livre by date
router.get("/:date", async (req, res) => {
  try {
    const grandLivre = await GrandLivre.find({ date: req.params.date });
    if (!grandLivre) {
      res.status(404).json({ message: "Aucun grand livre trouvé pour cette date" });
    }
    res.json(grandLivre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a grand livre
router.put("/:id", async (req, res) => {
  try {
    const updatedGrandLivre = await GrandLivre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGrandLivre) {
      res.status(404).json({ message: "Grand livre non trouvé" });
    }
    res.json(updatedGrandLivre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a grand livre
router.delete("/:id", async (req, res) => {
  try {
    await GrandLivre.findByIdAndDelete(req.params.id);
    res.json({ message: "Grand livre supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
