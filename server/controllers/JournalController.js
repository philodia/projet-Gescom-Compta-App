const Journal = require("../models/Journal");

class JournalController {
  async index(req, res) {
    const journals = await Journal.find();

    res.status(200).send(journals);
  }

  async show(req, res) {
    const journalId = req.params.id;

    const journal = await Journal.findById(journalId);

    if (!journal) {
      res.status(404).send("Journal introuvable");
      return;
    }

    res.status(200).send(journal);
  }

  async create(req, res) {
    const { date, libelle, montant, type, clientId, fournisseurId } = req.body;

    const journal = new Journal({
      date,
      libelle,
      montant,
      type,
      clientId,
      fournisseurId,
    });

    await journal.save();

    res.status(201).send(journal);
  }

  async update(req, res) {
    const journalId = req.params.id;

    const { date, libelle, montant, type, clientId, fournisseurId } = req.body;

    const journal = await Journal.findById(journalId);

    if (!journal) {
      res.status(404).send("Journal introuvable");
      return;
    }

    journal.date = date;
    journal.libelle = libelle;
    journal.montant = montant;
    journal.type = type;
    journal.clientId = clientId;
    journal.fournisseurId = fournisseurId;

    await journal.save();

    res.status(200).send(journal);
  }

  async delete(req, res) {
    const journalId = req.params.id;

    const journal = await Journal.findById(journalId);

    if (!journal) {
      res.status(404).send("Journal introuvable");
      return;
    }

    await journal.remove();

    res.status(200).send();
  }
}

module.exports = new JournalController();
