const express = require("express");
const router = express.Router();

const JournalController = require("../controllers/JournalController");

router.get("/", JournalController.index);
router.get("/:id", JournalController.show);
router.post("/", JournalController.create);
router.put("/:id", JournalController.update);
router.delete("/:id", JournalController.delete);

module.exports = router;
