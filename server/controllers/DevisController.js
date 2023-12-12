const Devis = require("../models/Devis");

class DevisController {
  async getAllDevis(req, res) {
    const devis = await Devis.find();
    res.status(200).send(devis);
  }

  async getDevisById(req, res) {
    const { id } = req.params;
    const devis = await Devis.findById(id);
    if (!devis) {
      res.status(404).send("Devis introuvable");
      return;
    }
    res.status(200).send(devis);
  }

  async createDevis(req, res) {
    const { numDevis, dateDevis, client, articles } = req.body;
    const devis = new Devis({
      numDevis,
      dateDevis,
      client,
      articles,
    });
    await devis.save();
    res.status(201).send(devis);
  }

  async updateDevis(req, res) {
    const { id } = req.params;
    const { numDevis, dateDevis, client, articles } = req.body;
    const devis = await Devis.findById(id);
    if (!devis) {
      res.status(404).send("Devis introuvable");
      return;
    }
    devis.numDevis = numDevis || devis.numDevis;
    devis.dateDevis = dateDevis || devis.dateDevis;
    devis.client = client || devis.client;
    devis.articles = articles || devis.articles;
    await devis.save();
    res.status(200).send(devis);
  }


  async delete(req, res) {
    const devis = await Devis.findById(req.params.id);
    if (!devis) {
      res.status(404).send("Devis introuvable");
      return;
    }

    await devis.remove();
    res.status(200).send("Devis supprimé");
  }
}

module.exports = new DevisController();
