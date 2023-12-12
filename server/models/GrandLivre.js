const mongoose = require("mongoose");

const grandLivreSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  numeroLigne: {
    type: Number,
    required: true,
  },
  compte: {
    type: String,
    required: true,
  },
  libelle: {
    type: String,
    required: true,
  },
  debit: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("GrandLivre", grandLivreSchema);
