"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Added

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
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-[var(--secondary-bg)] p-8 rounded-2xl shadow-lg border border-[var(--accent)]/50 backdrop-blur-sm"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-[var(--text-color)]">Enter Your Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent text-[var(--text-color)] placeholder-[var(--text-color)]/60 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-[var(--text-color)]">Enter Your Email *</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent text-[var(--text-color)] placeholder-[var(--text-color)]/60 transition"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block mb-2 font-semibold text-[var(--text-color)]">Service</label>
            <select
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent text-[var(--text-color)] transition"
            >
              <option className="bg-[var(--secondary-bg)] text-[var(--text-color)]">Forex</option>
              <option className="bg-[var(--secondary-bg)] text-[var(--text-color)]">Stock Market</option>
              <option className="bg-[var(--secondary-bg)] text-[var(--text-color)]">Crypto Trading</option>
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 font-semibold text-[var(--text-color)]">Enter Your Mobile *</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent text-[var(--text-color)] placeholder-[var(--text-color)]/60 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold text-[var(--text-color)]">Message *</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent text-[var(--text-color)] placeholder-[var(--text-color)]/60 transition"
              required
            ></textarea>
          </div>

          {/* ✅ reCAPTCHA */}
          <div className="my-4">
            <ReCAPTCHA
              sitekey="6LcxaLQrAAAAABOF8FDl5W6fedjvzepzO9uKj21G" // your site key
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[var(--accent)] text-white font-semibold hover:scale-105 transform transition"
            >
              Submit
            </button>
          </div>
        </form>
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
