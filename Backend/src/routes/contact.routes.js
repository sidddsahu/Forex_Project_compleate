const express = require('express');
const { sendContactMessage, testEmailConfig } = require('../controllers/contact.controller');
// const { verifyRecaptcha } = require('../middleware/recaptcha.middleware');
const validateContactForm  = require('../middleware/validation.middleware');


const router = express.Router();

// Routes
router.post('/send',validateContactForm,sendContactMessage);

router.get('/test-email', testEmailConfig);

module.exports = router;
