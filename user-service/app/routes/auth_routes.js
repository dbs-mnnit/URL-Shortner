const express = require('express');
const authController = require('../controllers/auth_controller');
const router = express.Router();

router.post(
    '/signup', 
    authController.signup
);
router.post(
    '/signup/phone', 
    authController.signupPhone
);
router.post(
    '/signup/oauth', 
    authController.signupOAuth
);

router.post(
    '/login', 
    authController.login
);
router.post(
    '/login/phone', 
    authController.loginPhone
);
router.post(
    '/login/oauth', 
    authController.loginOAuth
);

router.post(
    '/token/refresh', 
    authController.refreshToken
);

router.post(
    '/password/reset', 
    authController.requestPasswordReset
);
router.post(
    '/password/update', 
    authController.updatePassword
);

module.exports = router;
