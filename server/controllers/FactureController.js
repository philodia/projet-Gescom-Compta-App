const Facture = require("../models/Facture");

class FactureController {
  async getFactures(req, res) {
    const factures = await Facture.find();
    res.status(200).send(factures);
  }

  async getFacture(req, res) {
    const facture = await Facture.findById(req.params.id);
    res.status(200).send(facture);
  }

  async createFacture(req, res) {
    const { numero, date, client, produits, montant } = req.body;

    const facture = new Facture({
      numero,
      date,
      client,
      produits,
      montant,
    });

    await facture.save();
    res.status(201).send(facture);
  }

  async updateFacture(req, res) {
    const { id, numero, date, client, produits, montant } = req.body;

    const facture = await Facture.findById(id);

    if (!facture) {
      res.status(404).send("La facture n'existe pas");
      return;
    }

    facture.numero = numero;
    facture.date = date;
    facture.client = client;
    facture.produits = produits;
    facture.montant = montant;

    await facture.save();
    res.status(200).send(facture);
  }

  async deleteFacture(req, res) {
    const id = req.params.id;

    const facture = await Facture.findById(id);

    if (!facture) {
      res.status(404).send("La facture n'existe pas");
      return;
    }

    await facture.remove();
    res.status(200).send();
  }
}

  module.exports = new FactureController();