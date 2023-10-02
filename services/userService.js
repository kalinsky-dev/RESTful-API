const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'q-630257xcwsad2wefqwerct43';

// REGISTER
async function register(email, password) {
  const existing = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });
  if (existing) {
    throw new Error('Email is taken!');
  }

  const user = await User.create({
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

// LOGIN
async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });
  if (!user) {
    throw new Error('Incorrect email or password');
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error('Incorrect email or password');
  }

  return createToken(user);
}

// LOGOUT
async function logout(email, password) {}

// CREATE TOKEN
function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  return {
    _id: user._id,
    email: user.email,
    accessToken: jwt.sign(payload, secret),
  };
}


// VERIFY TOKEN
function parseToken(token) {
  if (tokenBlacklist.has(token)) {
    throw new Error('Token is blacklisted');
  }
  return jwt.verify(token, secret);
}

module.exports = {
  register,
  login,
  logout,
  parseToken,
};
