// File: app/controllers/admin_controller.js
const adminService = require('../services/admin_service');

// Controller for admin operations
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await adminService.fetchAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await adminService.fetchUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await adminService.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const result = await adminService.deleteUser(req.params.id);
    if (!result) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.createRole = async (req, res, next) => {
  try {
    const role = await adminService.createRole(req.body);
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    next(error);
  }
};

exports.getAllRoles = async (req, res, next) => {
  try {
    const roles = await adminService.fetchAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
};

exports.updateRole = async (req, res, next) => {
  try {
    const updatedRole = await adminService.updateRole(req.params.id, req.body);
    if (!updatedRole) return res.status(404).json({ message: 'Role not found' });
    res.status(200).json({ message: 'Role updated successfully', updatedRole });
  } catch (error) {
    next(error);
  }
};

exports.deleteRole = async (req, res, next) => {
  try {
    const result = await adminService.deleteRole(req.params.id);
    if (!result) return res.status(404).json({ message: 'Role not found' });
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    next(error);
  }
};