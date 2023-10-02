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

// CREATE ITEM
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

// DETAILS OF A SINGLE ITEM
dataController.get('/:id', async (req, res, next) => {
  const item = await getById(req.params.id);
   res.json(item);
});

// UPDATE A SINGLE ITEM
dataController.put('/:id', hasUser(), async (req, res, next) => {
  const item = await getById(req.params.id);
  if (req.user._id != item._ownerId) {
      return res.status(403).json({ message: 'You cannot modify this record' });
  }

  try {
      const result = await update(req.params.id, req.body);
      res.json(result);
  } catch (err) {
      const message = parseError(err);
      res.status(400).json({ message });
  }
});


// DELETE A SINGLE ITEM
dataController.delete('/:id', hasUser(), async (req, res) => {
  const item = await getById(req.params.id);
  if (req.user._id != item._ownerId) {
      return res.status(403).json({ message: 'You cannot modify this record' });
  }

  try {
      await deleteById(req.params.id);
      res.status(204).end();
  } catch (err) {
      const message = parseError(err);
      res.status(400).json({ message });
  }
});

module.exports = dataController;
