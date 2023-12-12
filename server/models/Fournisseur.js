const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FournisseurSchema = new Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  codePostal: { type: String, required: true },
  ville: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
});

const Fournisseur = mongoose.model("Fournisseur", FournisseurSchema);

module.exports = Fournisseur;
