const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const ComptaHome = mongoose.model('ComptaHome', homeSchema);

module.exports = ComptaHome;
