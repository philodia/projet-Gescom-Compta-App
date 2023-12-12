const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FactureSchema = new Schema({
  numero: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  produits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produit",
  }],
  montant: {
    type: Number,
    required: true,
  },
});

const Facture = mongoose.model("Facture", FactureSchema);

module.exports = Facture;
