const StockModel = require("../models/Stock");

class StockController {
  static index(req, res) {
    const stocks = StockModel.find();

    res.send(stocks);
  }

  static get(req, res) {
    const stock = StockModel.findOne({ _id: req.params.id });

    if (!stock) {
      res.status(404).json({ error: "Stock not found" });
      return;
    }

    res.send(stock);
  }

  static add(req, res) {
    const stock = new StockSchema({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      location: req.body.location,
      serialNumber: req.body.serialNumber,
    });

    stock.save((err, stock) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json(stock);
      }
    });
  }

  static update(req, res) {
    const stock = StockModel.findOne({ _id: req.params.id });

    if (!stock) {
      res.status(404).json({ error: "Stock not found" });
      return;
    }

    stock.name = req.body.name;
    stock.description = req.body.description;
    stock.price = req.body.price;
    stock.quantity = req.body.quantity;
    stock.location = req.body.location;
    stock.serialNumber = req.body.serialNumber;

    stock.save((err, stock) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(stock);
      }
    });
  }

  static delete(req, res) {
    const stock = StockModel.findOne({ _id: req.params.id });

    if (!stock) {
      res.status(404).json({ error: "Stock not found" });
      return;
    }

    stock.remove((err, stock) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Stock deleted" });
      }
    });
  }
}

module.exports = StockController;