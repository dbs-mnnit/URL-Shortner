// File: app/middleware/auth_middleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user_model');
const { JWT_SECRET } = process.env;

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

exports.verifyAdmin = async (req, res, next) => {
  this.verifyToken(req, res, async () => {
    try {
      const user = await User.findById(req.user.id);
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied, not an admin' });
      }
      next();
    } catch (error) {
      res.status(403).json({ message: 'Access denied, not an admin' });
    }
  });
};