const express = require('express');
const router = express.Router();
const GescomHome = require('../models/GescomHome');

router.get('/', async (req, res) => {
  const home = await GescomHome.findOne();
  if (!home) {
    res.status(404).send('La page d\'accueil de la gestion commercial n\'a pas été trouvée.');
    return;
  }

  res.send(home);
});

module.exports = router;


//module.exports = GescomHomeController;
