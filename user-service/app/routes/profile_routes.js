const express = require('express');
const profileController = require('../controllers/profile_controller');
const authMiddleware = require('../middleware/auth_middleware');
const router = express.Router();

router.get('/', authMiddleware.verifyToken, profileController.getProfile);
router.put('/', authMiddleware.verifyToken, profileController.updateProfile);
router.delete('/', authMiddleware.verifyToken, profileController.deleteProfile);

module.exports = router;
