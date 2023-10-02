const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middlewares/cors');
const authController = require('./controllers/authController');

const connectionString = 'mongodb://127.0.0.1:27017/furniture';

start();

async function start() {
  await mongoose.connect(connectionString);
  console.log('Database connected!');

  const app = express();

  app.use(express.json());
  // Allow the Server to receive Requests from *
  // CORS(Errors)
  app.use(cors());

  app.get('/', (req, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/users', authController);
  app.listen(3030, () => console.log('REST service started'));
}
