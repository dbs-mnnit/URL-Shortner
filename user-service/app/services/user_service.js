// File: app/services/user_service.js
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

exports.registerUser = async (userData) => {
  const { email, password, name } = userData;
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email already in use');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, name });
  return await newUser.save();
};

exports.authenticateUser = async (credentials) => {
  const { email, password } = credentials;
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid email or password');

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

exports.getUserProfile = async (userId) => {
  return await User.findById(userId).select('-password');
};

exports.updateUserProfile = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};
