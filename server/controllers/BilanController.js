const Bilan = require("../models/Bilan");

class BilanController {
  async getBilans(req, res) {
    const bilans = await Bilan.find();

    res.status(200).send(bilans);
  }

  async getBilan(req, res) {
    const id = req.params.id;

    const bilan = await Bilan.findById(id);

    if (!bilan) {
      res.status(404).send("Bilan introuvable");
      return;
    }

    res.status(200).send(bilan);
  }

  async createBilan(req, res) {
    const { date, chiffreAffaire, charges, produits, résultat } = req.body;

    const bilan = new Bilan({
      date,
      chiffreAffaire,
      charges,
      produits,
      résultat,
    });

    await bilan.save();

    res.status(201).send(bilan);
  }

  async updateBilan(req, res) {
    const id = req.params.id;

    const { date, chiffreAffaire, charges, produits, résultat } = req.body;

    const bilan = await Bilan.findByIdAndUpdate(id, {
      date,
      chiffreAffaire,
      charges,
      produits,
      résultat,
    });

    if (!bilan) {
      res.status(404).send("Bilan introuvable");
      return;
    }

    res.status(200).send(bilan);
  }

  async deleteBilan(req, res) {
    const id = req.params.id;

    const bilan = await Bilan.findByIdAndRemove(id);

    if (!bilan) {
      res.status(404).send("Bilan introuvable");
      return;
    }

    res.status(200).send(bilan);
  }
}

module.exports = new BilanController();
