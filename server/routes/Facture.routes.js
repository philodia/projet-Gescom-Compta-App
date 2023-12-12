const express = require("express");
const router = express.Router();
const FactureController = require("../controllers/FactureController");

router.get("/factures", FactureController.getFactures);
router.get("/factures/:id", FactureController.getFacture);
router.post("/factures", FactureController.createFacture);
router.put("/factures/:id", FactureController.updateFacture);
router.delete("/factures/:id", FactureController.deleteFacture);

module.exports = router;
