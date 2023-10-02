const authController = require('express').Router();
const { body, validationResult } = require('express-validator');

const { register, login, logout } = require('../services/userService');

// REGISTER
authController.post(
  '/register',
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 3 })
    .withMessage('Password must be at least 3 characters long'),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        throw errors;
      }

      const token = await register(req.body.email, req.body.password);
      res.json(token);
    } catch (error) {
      res.status(400).json({ message });
    }
  }
);

// LOGIN
authController.post('/login', async (req, res) => {
  try {
      const token = await login(req.body.email, req.body.password);
      res.json(token);
  } catch (error) {
      res.status(401).json({ message });
  }
});

module.exports = authController;
