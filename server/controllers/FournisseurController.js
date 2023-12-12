const Fournisseur = require("../models/Fournisseur");

class FournisseurController {
  async getAll(req, res) {
    const fournisseurs = await Fournisseur.find();
    res.status(200).send(fournisseurs);
  }

  async getById(req, res) {
    const id = req.params.id;
    const fournisseur = await Fournisseur.findById(id);
    if (!fournisseur) {
      res.status(404).send("Fournisseur non trouvé");
      return;
    }

    res.status(200).send(fournisseur);
  }

  async create(req, res) {
    const { nom, adresse, codePostal, ville, telephone, email } = req.body;

    const fournisseur = new Fournisseur({
      nom,
      adresse,
      codePostal,
      ville,
      telephone,
      email,
    });

    await fournisseur.save();

    res.status(201).send(fournisseur);
  }

  async update(req, res) {
    const id = req.params.id;
    const { nom, adresse, codePostal, ville, telephone, email } = req.body;

    const fournisseur = await Fournisseur.findById(id);
    if (!fournisseur) {
      res.status(404).send("Fournisseur non trouvé");
      return;
    }

    fournisseur.nom = nom;
    fournisseur.adresse = adresse;
    fournisseur.codePostal = codePostal;
    fournisseur.ville = ville;
    fournisseur.telephone = telephone;
    fournisseur.email = email;

    await fournisseur.save();

    res.status(200).send(fournisseur);
  }

  async delete(req, res) {
    const id = req.params.id;

    const fournisseur = await Fournisseur.findById(id);
    if (!fournisseur) {
      res.status(404).send("Fournisseur non trouvé");
      return;
    }

    await fournisseur.remove();

    res.status(200).send("Fournisseur supprimé");
  }
}

module.exports = new FournisseurController();
