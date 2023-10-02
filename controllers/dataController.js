const dataController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
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

dataController.post('/', hasUser(), async (req, res) => {
  // console.log(req.body);
  // res.end();
  try {
    const data = Object.assign({ _ownerId: req.user._id }, req.body);
    const item = await create(data);
    res.json(item);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

module.exports = dataController;
