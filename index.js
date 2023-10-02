const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');
const dataController = require('./controllers/dataController');
const trimBody = require('./middlewares/trimBody');
const session = require('./middlewares/session');

const connectionString = 'mongodb://127.0.0.1:27017/furniture';

start();

async function start() {
  await mongoose.connect(connectionString);
  console.log('Database connected!');

  const app = express();

  app.use(express.json());
  // Allow the Server to receive Requests from *
  // Solves the CORS(Errors)
  app.use(cors());
  // Trim the white spaces in the User's Input
  app.use(trimBody());
  // Add a session on the Server
  app.use(session());

  app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/users', authController);
  app.use('/data/catalog', dataController);

  app.listen(3030, () => console.log('REST service started'));
}
