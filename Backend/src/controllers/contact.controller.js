const { validationResult } = require('express-validator');
const { sendContactEmail, verifyConnection } = require('../services/email.service');
const Contact = require('../models/contactModel');

const sendContactMessage = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, service, mobile, message } = req.body;

    // Prepare contact data
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      service: service.trim(),
      mobile: mobile.trim(),
      message: message.trim()
    };

    // Save to database first
    const dbData = {
      ...contactData,
      ip_address: req.ip || req.connection.remoteAddress
    };

    Contact.create(dbData, async (err, result) => {
      if (err) {
        console.error('Database save error:', err);
        // Continue with email even if DB fails
      }

      try {
        // Send email using email service
        const emailResult = await sendContactEmail(contactData);

        if (emailResult.success) {
          return res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully! We will get back to you soon.'
          });
        } else {
          throw new Error('Email sending failed');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        return res.status(500).json({
          success: false,
          message: 'Failed to send your message. Please try again later.'
        });
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.'
    });
  }
};

// Test email configuration
const testEmailConfig = async (req, res) => {
  try {
    const isConnected = await verifyConnection();
    
    if (isConnected) {
      return res.status(200).json({
        success: true,
        message: 'Email service is configured correctly'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Email service configuration failed'
      });
    }
  } catch (error) {
    console.error('Email test error:', error);
    return res.status(500).json({
      success: false,
      message: 'Email service test failed'
    });
  }
};

module.exports = {
  sendContactMessage,
  testEmailConfig
};
