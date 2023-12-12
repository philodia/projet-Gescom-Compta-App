const express = require("express");
const router = express.Router();
const StockController = require("../controllers/StockController");

router.get("/", StockController.index);
router.get("/:id", StockController.get);
router.post("/", StockController.add);
router.put("/:id", StockController.update);
router.delete("/:id", StockController.delete);

module.exports = router;
