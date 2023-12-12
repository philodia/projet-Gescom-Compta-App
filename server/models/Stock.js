const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  location: { type: String },
  serialNumber: { type: String },
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
