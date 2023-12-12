const express = require("express");
const router = express.Router();
const BilanController = require("../controllers/BilanController");

router.get("/bilans", BilanController.getBilans);
router.get("/bilans/:id", BilanController.getBilan);
router.post("/bilans", BilanController.createBilan);
router.put("/bilans/:id", BilanController.updateBilan);
router.delete("/bilans/:id", BilanController.deleteBilan);

module.exports = router;
