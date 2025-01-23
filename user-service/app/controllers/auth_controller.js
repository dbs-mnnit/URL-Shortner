// File: app/controllers/auth_controller.js
const authService = require('../services/auth_service');

exports.signup = async (req, res, next) => {
  try {
    const result = await authService.signup(req.body);
    res.status(201).json({ message: 'User registered successfully', result });
  } catch (error) {
    next(error);
  }
};

exports.signupPhone = async (req, res, next) => {
  try {
    const result = await authService.signupPhone(req.body);
    res.status(201).json({ message: 'User registered successfully with phone', result });
  } catch (error) {
    next(error);
  }
};

exports.signupOAuth = async (req, res, next) => {
  try {
    const result = await authService.signupOAuth(req.body);
    res.status(201).json({ message: 'User registered successfully with OAuth', result });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
};

exports.loginPhone = async (req, res, next) => {
  try {
    const token = await authService.loginPhone(req.body);
    res.status(200).json({ message: 'Login successful with phone', token });
  } catch (error) {
    next(error);
  }
};

exports.loginOAuth = async (req, res, next) => {
  try {
    const token = await authService.loginOAuth(req.body);
    res.status(200).json({ message: 'Login successful with OAuth', token });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const newToken = await authService.refreshToken(req.body.refreshToken);
    res.status(200).json({ message: 'Token refreshed successfully', token: newToken });
  } catch (error) {
    next(error);
  }
};

exports.requestPasswordReset = async (req, res, next) => {
  try {
    const result = await authService.requestPasswordReset(req.body.email);
    res.status(200).json({ message: 'Password reset link sent', result });
  } catch (error) {
    next(error);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const result = await authService.updatePassword(req.body.token, req.body.newPassword);
    res.status(200).json({ message: 'Password updated successfully', result });
  } catch (error) {
    next(error);
  }
};