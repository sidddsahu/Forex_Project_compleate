// middleware/validation.middleware.js
const { body } = require("express-validator");

const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('service')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Please select a service'),

  body('mobile')
    .trim()
    .matches(/^[\+]?[1-9][\d\s]{8,15}$/)
    .withMessage('Please provide a valid mobile number'),

  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),

//   body('recaptchaToken').optional()
];

module.exports =  validateContactForm ;
