const Client = require("../models/Client");

class ClientController {
  async getAllClients(req, res) {
    const clients = await Client.find();

    res.status(200).send(clients);
  }

  async getClient(req, res) {
    const clientId = req.params.id;

    const client = await Client.findById(clientId);

    if (!client) {
      res.status(404).send("Client non trouvé");
      return;
    }

    res.status(200).send(client);
  }

  async createClient(req, res) {
    const { nom, prenom, email, telephone, adresse, ville, codePostal } = req.body;

    const client = new Client({
      nom,
      prenom,
      email,
      telephone,
      adresse,
      ville,
      codePostal,
    });

    await client.save();

    res.status(201).send(client);
  }

  async updateClient(req, res) {
    const clientId = req.params.id;

    const { nom, prenom, email, telephone, adresse, ville, codePostal } = req.body;

    const client = await Client.findByIdAndUpdate(clientId, {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      ville,
      codePostal,
    });

    if (!client) {
      res.status(404).send("Client non trouvé");
      return;
    }

    res.status(200).send(client);
  }

  async deleteClient(req, res) {
    const clientId = req.params.id;

    const client = await Client.findByIdAndDelete(clientId);

    if (!client) {
      res.status(404).send("Client non trouvé");
      return;
    }

    res.status(200).send();
  }
}

module.exports = new ClientController();
