"use client";
import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import contactAPI from "../../axios/contactAPI";

export default function ContactForm({ fromEmail }) {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setMessage({ type: 'error', text: 'Please verify reCAPTCHA before submitting!' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const fd = new FormData(e.currentTarget);
      const formData = Object.fromEntries(fd.entries());

      const payload = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        mobile: formData.phone,
        message: formData.message,
        from: fromEmail, // dynamic from email
        recaptchaToken: captchaToken
      };

      const response = await contactAPI.sendMessage(payload);
      
      if (response.data.success) {
        setMessage({ 
          type: 'success', 
          text: 'Your message has been sent successfully! We will get back to you soon.' 
        });
        
        e.target.reset();
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      const errorMessage = error.response?.data?.message || 
                          'Failed to send your message. Please try again later.';
      
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-6 bg-[var(--secondary-bg)] p-8 rounded-2xl shadow-lg border border-[var(--accent)]"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-2 font-semibold">Enter Your Name *</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Enter Your Email *</label>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          required
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Service</label>
        <select
          name="service"
          required
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
        >
          <option>Forex</option>
          <option>Stock Market</option>
          <option>Crypto Trading</option>
          <option>Basic Forex</option>
          <option>Basic Comex/Gold</option>
          <option>Premium Comex/Gold</option>
          
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Enter Your Mobile *</label>
        <input
          name="phone"
          type="tel"
          placeholder="+91 9876543210"
          required
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Message *</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Write your message..."
          required
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
        ></textarea>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg text-center font-medium ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-300' 
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {message.text}
        </div>
      )}

      <div className="my-3 flex justify-start">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcxaLQrAAAAABOF8FDl5W6fedjvzepzO9uKj21G"
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={!captchaToken || isSubmitting}
          className={`px-8 py-3 rounded-full font-semibold transform transition ${
            captchaToken && !isSubmitting
              ? "bg-[var(--accent)] text-white hover:scale-105"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
