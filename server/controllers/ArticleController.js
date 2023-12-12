const Article = require("../models/Article");

class ArticleController {
  async index(req, res) {
    const articles = await Article.find();
    res.json(articles);
  }

  async show(req, res) {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    res.json(article);
  }

  async create(req, res) {
    const article = new Article({
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      stock: req.body.stock,
    });
    await article.save();
    res.json(article);
  }

  async update(req, res) {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    article.nom = req.body.nom;
    article.description = req.body.description;
    article.prix = req.body.prix;
    article.stock = req.body.stock;
    await article.save();
    res.json(article);
  }

  async delete(req, res) {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article non trouvé" });
    }
    await article.remove();
    res.json({ message: "Article supprimé" });
  }
}

module.exports = ArticleController;
