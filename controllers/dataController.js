const dataController = require('express').Router();

const {
  getAll,
  create,
  getById,
  update,
  deleteById,
  getByUserId,
} = require('../services/itemService');
const { parseError } = require('../util/parser');

dataController.get('/', async (req, res) => {
  // console.log(req.user);
  // let items = [];

  const items = await getAll();

  res.json(items);
});

dataController.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = dataController;
