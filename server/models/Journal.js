const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JournalSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  libelle: {
    type: String,
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["achat", "vente", "charge", "recette"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  fournisseurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fournisseur",
  },
});

const Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;
