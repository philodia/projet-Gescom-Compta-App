// Importation des dépendances
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');

// Initialisation de l'application Express
const app = express();

// Middleware pour CORS
app.use(cors());

// Middleware pour CORS
const corsOptions = {
    origin: 'http://localhost:5000/auth', // Remplacez par le domaine de votre application React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));
  

// Middleware pour body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Définition des routes
const authRoutes = require('./routes/Auth.routes');
const gescomhomeRoutes = require('./routes/GescomHome.routes');
const comptahomeRoutes = require('./routes/ComptaHome.routes');
const articleRoutes = require('./routes/Article.routes');
const stockRoutes = require('./routes/Stock.routes');

// Routes
//http://localhost:5000/auth*
app.use('/auth', authRoutes);
app.use('/gescomhome', gescomhomeRoutes);
app.use('/comptahome', comptahomeRoutes);
app.use('/articles', articleRoutes);
app.use('/stocks', stockRoutes);

//port 
const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le server est demarre au au port ${PORT}...`);
});
