const express = require("express");
const router = express.Router();
const DevisController = require("../controllers/DevisController");

router.get("/", DevisController.getAllDevis);
router.get("/:id", DevisController.getDevisById);
router.post("/", DevisController.createDevis);
router.put("/:id", DevisController.updateDevis);
router.delete("/:id", DevisController.delete);

module.exports = router;
