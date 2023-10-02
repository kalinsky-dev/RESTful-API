const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
  let items = [];

  res.json(items);
});

module.exports = dataController;
