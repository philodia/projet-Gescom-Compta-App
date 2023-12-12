const mongoose = require("mongoose");

const planComptableSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  libelle: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  nature: {
    type: String,
    required: true,
  },
  niveau: {
    type: Number,
    required: true,
  },
  parent: {
    type: String,
  },
});

module.exports = mongoose.model("PlanComptable", planComptableSchema);
