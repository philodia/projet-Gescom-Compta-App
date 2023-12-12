const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password, type } = req.body;

    const user = new User({
      name,
      email,
      password,
      type,
    });

    await user.save();

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user,
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({
      message: "Erreur lors de la création de l'utilisateur",
      error: error.message,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({
        message: "Identifiants invalides",
      });
    }

    const token = jwt.sign(
      {
        email,
        type: user.type,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(200).json({
      message: "Utilisateur connecter",
      error: error.message,
    });
  }
};

module.exports = {
  signup,
  signin,
  // Export other controller functions here
};
