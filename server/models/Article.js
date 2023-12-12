const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  stock: { type: Number, required: true },
});

module.exports = mongoose.model("Article", articleSchema);

//module.exports = Article;
