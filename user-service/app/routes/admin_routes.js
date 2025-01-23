const express = require('express');
const adminController = require('../controllers/admin_controller');
const authMiddleware = require('../middleware/auth_middleware');
const router = express.Router();

router.get('/users', authMiddleware.verifyAdmin, adminController.getAllUsers);
router.get('/users/:id', authMiddleware.verifyAdmin, adminController.getUserById);
router.put('/users/:id', authMiddleware.verifyAdmin, adminController.updateUser);
router.delete('/users/:id', authMiddleware.verifyAdmin, adminController.deleteUser);

router.post('/roles', authMiddleware.verifyAdmin, adminController.createRole);
router.get('/roles', authMiddleware.verifyAdmin, adminController.getAllRoles);
router.put('/roles/:id', authMiddleware.verifyAdmin, adminController.updateRole);
router.delete('/roles/:id', authMiddleware.verifyAdmin, adminController.deleteRole);

module.exports = router;
