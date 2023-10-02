const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
  console.log(req.user);

  let items = [];

  res.json(items);
});

module.exports = dataController;
