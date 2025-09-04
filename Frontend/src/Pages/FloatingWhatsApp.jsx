// src/components/widgets/FloatingWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import './widget.css';

const FloatingWhatsApp = ({ phoneNumber, message, tooltip = 'WhatsApp' }) => {
  const waLink = `https://api.whatsapp.com/send/?phone=6531586787&text&type=phone_number&app_absent=0`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Open WhatsApp Chat"
      title={tooltip}
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default FloatingWhatsApp;
