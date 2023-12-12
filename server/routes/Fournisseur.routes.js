const express = require("express");
const router = express.Router();
const FournisseurController = require("../controllers/FournisseurController");

router.get("/", FournisseurController.getAll);
router.get("/:id", FournisseurController.getById);
router.post("/", FournisseurController.create);
router.put("/:id", FournisseurController.update);

module.exports = router;
