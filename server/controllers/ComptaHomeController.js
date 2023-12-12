const express = require('express');
const router = express.Router();
const ComptaHome = require('../models/ComptaHome');

router.get('/', async (req, res) => {
  const home = await ComptaHome.findOne();
  if (!home) {
    res.status(404).send('La page d\'accueil de la comptabilité n\'a pas été trouvée.');
    return;
  }

  res.send(home);
});

module.exports = router;
