// File: app/services/admin_service.js
const User = require('../models/user_model');
const Role = require('../models/role_model');

exports.fetchAllUsers = async () => {
  return await User.find();
};

exports.fetchUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result ? true : false;
};

exports.createRole = async (roleData) => {
  const role = new Role(roleData);
  return await role.save();
};

exports.fetchAllRoles = async () => {
  return await Role.find();
};

exports.updateRole = async (id, updateData) => {
  return await Role.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteRole = async (id) => {
  const result = await Role.findByIdAndDelete(id);
  return result ? true : false;
};