const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  adresse: String,
  ville: String,
  codePostal: String,
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
