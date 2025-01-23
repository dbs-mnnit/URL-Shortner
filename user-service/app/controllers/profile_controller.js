// File: app/controllers/profile_controller.js
const profileService = require('../services/profile_service');

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await profileService.fetchProfile(req.user.id);
    res.status(200).json({ profile });
  } catch (error) {
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const updatedProfile = await profileService.updateProfile(req.user.id, req.body);
    res.status(200).json({ message: 'Profile updated successfully', updatedProfile });
  } catch (error) {
    next(error);
  }
};

exports.deleteProfile = async (req, res, next) => {
  try {
    const result = await profileService.deleteProfile(req.user.id);
    res.status(200).json({ message: 'Profile deleted successfully', result });
  } catch (error) {
    next(error);
  }
};
