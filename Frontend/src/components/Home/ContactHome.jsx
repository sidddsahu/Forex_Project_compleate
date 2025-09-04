"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Added
import ContactForm from './ContactForm';

const bgIcons = [FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock];

export default function ContactHome() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("⚠️ Please verify reCAPTCHA before submitting!");
      return;
    }

    // ✅ Example: you can send captchaToken + form data to backend API
    console.log("Form submitted with captcha token:", captchaToken);
  };

  return (
    <section className="bg-[var(--bg)] text-[var(--text-color)] py-16 relative overflow-hidden border-b border-gray-200 dark:border-gray-700">

      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5 z-0"></div>

      {/* Floating Accent Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>

      {/* Floating Contact Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const Icon = bgIcons[i % bgIcons.length];
          return (
            <Icon
              key={i}
              className="absolute text-[var(--accent)] opacity-20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${24 + Math.random() * 30}px`,
                animationDuration: `${8 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 gap-12 relative z-10">

        {/* Heading */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl text-center font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Get In <span className="text-[var(--accent)]">Touch</span>
          </motion.h2>
          <p className="text-[var(--text-color)]/80 text-center max-w-2xl mx-auto">
            Take a free demo session with our expert and know more details about us.
            We are here to help you 24/7.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
