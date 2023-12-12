const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BilanSchema = new Schema({
  date: { type: Date, required: true },
  chiffreAffaire: { type: Number, required: true },
  charges: { type: Number, required: true },
  produits: { type: Number, required: true },
  résultat: { type: Number, required: true },
});

const Bilan = mongoose.model("Bilan", BilanSchema);

module.exports = Bilan;
