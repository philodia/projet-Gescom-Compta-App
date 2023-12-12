const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DevisSchema = new Schema({
  numDevis: {
    type: String,
    required: true,
    unique: true,
  },
  dateDevis: {
    type: Date,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  articles: [
    {
      codeArticle: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      quantite: {
        type: Number,
        required: true,
      },
      prixUnitaire: {
        type: Number,
        required: true,
      },
    },
  ],
  totalHT: {
    type: Number,
    required: true,
  },
  totalTVA: {
    type: Number,
    required: true,
  },
  totalTTC: {
    type: Number,
    required: true,
  },
});

const Devis = mongoose.model("Devis", DevisSchema);

module.exports = Devis;
