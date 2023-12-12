const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/ArticleController");

module.exports = function (app) {
  app.get("/articles", ArticleController.index);
  app.get("/articles/:id", ArticleController.show);
  app.post("/articles", ArticleController.create);
  app.put("/articles/:id", ArticleController.update);
  app.delete("/articles/:id", ArticleController.delete);
};

module.exports = router;
