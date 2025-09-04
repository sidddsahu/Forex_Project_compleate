
"use client";
import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Added

export default function ContactPage() {
  const [captchaToken, setCaptchaToken] = useState(null); // ✅ Captcha state
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("⚠️ Please verify reCAPTCHA before submitting!");
      return;
    }

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    console.log("Form submitted:", payload, "Captcha:", captchaToken);

    // Example API call
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...payload, captchaToken }),
    // });

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
    e.target.reset();
  };

  return (
    <section className="bg-[var(--bg)] text-[var(--text-color)] py-16 relative overflow-hidden mt-14">
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-12 h-12 border-2 border-[var(--accent)] rotate-45 opacity-10"></div>
      <div className="absolute bottom-16 right-16 w-20 h-20 border-4 border-[var(--accent)] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 text-[var(--accent)] text-4xl opacity-10">+</div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        {/* LEFT SIDE - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Take a free demo session with our expert and know more details about us. We are here to help you 24/7.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-xl shadow-md bg-[var(--secondary-bg)] border border-gray-200/20">
              <div className="p-3 rounded-full bg-[var(--accent)] text-white">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Our Address</h4>
                <p>
                  3 temsec blvd Suntec city tower 2
                  <br />
                  Singapore
                </p>
                <p className="mt-2">
                  Royal arcade, Nandankanan Road
                  <br />
                  Patia, Bhubaneswar, Odisha, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-xl shadow-md bg-[var(--secondary-bg)] border border-gray-200/20">
              <div className="p-3 rounded-full bg-[var(--accent)] text-white">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p>+65 31586787</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 rounded-xl shadow-md bg-[var(--secondary-bg)] border border-gray-200/20">
              <div className="p-3 rounded-full bg-[var(--accent)] text-white">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p>info@acordanresearch.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 rounded-xl shadow-md bg-[var(--secondary-bg)] border border-gray-200/20">
              <div className="p-3 rounded-full bg-[var(--accent)] text-white">
                <FaClock size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <form
          className="grid grid-cols-1 gap-6 bg-[var(--secondary-bg)] p-8 rounded-2xl shadow-lg border border-[var(--accent)]"
          onSubmit={handleSubmit}
        >
          {/* Name */}
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

          {/* Email */}
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

          {/* Service Dropdown */}
          <div>
            <label className="block mb-2 font-semibold">Service</label>
            <select
              name="service"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[var(--accent)] outline-none bg-transparent transition"
              required
            >
              <option>Forex</option>
              <option>Stock Market</option>
              <option>Crypto Trading</option>
            </select>
          </div>

          {/* Mobile */}
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

          {/* Message */}
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

          {/* ✅ reCAPTCHA */}
          <div className="my-3 flex justify-start">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcxaLQrAAAAABOF8FDl5W6fedjvzepzO9uKj21G" // 🔑 replace with your site key
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!captchaToken}
              className={`px-8 py-3 rounded-full font-semibold transform transition ${
                captchaToken
                  ? "bg-[var(--accent)] text-white hover:scale-105"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto mt-12 px-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.797548477464!2d103.8583563!3d1.2956005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190b7c0f9f47%3A0x8f933c7781b78b1b!2sSuntec%20City%20Tower%202!5e0!3m2!1sen!2sin!4v1692856723456!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-md border border-gray-200/30"
        ></iframe>
      </div>
    </section>
  );
}
