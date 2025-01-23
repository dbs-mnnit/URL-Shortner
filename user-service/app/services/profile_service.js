// File: app/services/profile_service.js
const User = require('../models/user_model');

exports.fetchProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

exports.updateProfile = async (userId, updateData) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
  if (!updatedUser) {
    throw new Error('User not found');
  }
  return updatedUser;
};

exports.deleteProfile = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    throw new Error('User not found');
  }
  return { success: true };
};