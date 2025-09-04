"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const floatingSet = [FaMapMarkerAlt, FaPhoneAlt, FaEnvelope];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  // Stable random positions for floating icons (prevents reflow flicker)
  const floaters = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      Icon: floatingSet[i % floatingSet.length],
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      size: 24 + Math.floor(Math.random() * 26), // 24–50px
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 4,
      rotate: Math.random() > 0.5 ? "animate-float-slow" : "animate-float",
    }));
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[var(--secondary-bg)] text-[var(--text-color)] border-t border-gray-200 dark:border-gray-700">
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(1200px 600px at -10% -10%, rgba(0,0,0,0) 30%, rgba(255,255,255,0) 35%), radial-gradient(900px 500px at 110% 110%, rgba(0,0,0,0) 30%, rgba(255,255,255,0) 35%)",
          backgroundColor: "transparent",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/10" />
      {/* Accent blurred circles */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl -z-10" />

      {/* Floating decorative icons */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {floaters.map(({ Icon, top, left, size, duration, delay, rotate }, i) => (
          <Icon
            key={i}
            className={`absolute text-[var(--accent)]/15 ${rotate}`}
            style={{
              top,
              left,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Top Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* About */}
        <div className="rounded-2xl border border-[var(--text-color)]/10 bg-[var(--bg)]/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <img src="img/logoAcordan1.png" />
          <h2 className="mb-4 text-xl font-semibold mt-3 text-[var(--accent)]">About Us</h2>
          <p className="text-sm leading-relaxed opacity-90">
           Acordan Research is built on foundation of trust, transparency, faith, commitment and dedicated hard work.
          </p>
        </div>

        {/* Quick Links */}
        <div className="rounded-2xl border border-[var(--text-color)]/10 bg-[var(--bg)]/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Projects" },
              { href: "#blog", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2 transition"
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[var(--accent)]/70 transition group-hover:w-3" />
                  <span className="hover:text-[var(--accent)]">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="rounded-2xl border border-[var(--text-color)]/10 bg-[var(--bg)]/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="rounded-full bg-[var(--accent)] p-2 text-white">
                <FaMapMarkerAlt size={14} />
              </span>
              <span>3 temsec blvd Suntec city tower 2
Singapore</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent)] p-2 text-white">
                <FaPhoneAlt size={14} />
              </span>
              <a href="tel:+6531586787" className="hover:underline">
               +6531586787
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent)] p-2 text-white">
                <FaEnvelope size={14} />
              </span>
              <a href="mailto:info@acordanresearch.com" className="hover:underline">
                info@acordanresearch.com
              </a>
            </li>
          </ul>

          {/* Socials */}
         <div className="mt-5 flex gap-3">
  {[
    { icon: <FaFacebook />, link: "https://www.facebook.com/share/1B71X6rGi6/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/acordanreseaarch?igsh=MWc5eXVydHlubnV5cQ==" },
    { icon: <FaWhatsapp />, link: "https://api.whatsapp.com/send/?phone=6531586787&text&type=phone_number&app_absent=0" }, // replace with your WhatsApp number
    { icon: <FaTwitter />, link: "https://x.com/acordanresearch?t=lbtX3ZimaRr4AwWee4KDtQ&s=09" },
  ].map((s, i) => (
    <a
      key={i}
      href={s.link}
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-[var(--accent)] p-3 text-white shadow-md transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
      aria-label="Social link"
    >
      {s.icon}
    </a>
  ))}
</div>

        </div>

        {/* Newsletter */}
        <div className="rounded-2xl border border-[var(--text-color)]/10 bg-[var(--bg)]/80 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Subscribe</h2>
          <p className="mb-4 text-sm opacity-90">
            Get the latest updates and offers directly to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="group flex items-stretch overflow-hidden rounded-full border border-[var(--accent)] bg-[var(--bg)]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-[var(--text-color)] outline-none placeholder:opacity-70"
              required
            />
            <button
              type="submit"
              className="rounded-l-none bg-[var(--accent)] w-full py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs opacity-70">
            We care about your data in our{" "}
            <a href="/privacy-policy" className="text-[var(--accent)] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/60 bg-[var(--bg)]/60">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-center text-xs text-gray-600 dark:text-gray-400 sm:flex-row">
    <span>
      © {new Date().getFullYear()} <span className="font-medium">Siddhant Sahu</span> | All Rights Reserved.
    </span>
    <div className="flex gap-4">
      <a href="/terms-condition" className="hover:text-[var(--accent)]">Terms</a>
      <span className="opacity-40">•</span>
      <a href="/privacy-policy" className="hover:text-[var(--accent)]">Privacy</a>
      <span className="opacity-40">•</span>
      <a href="#cookies" className="hover:text-[var(--accent)]">Cookies</a>
    </div>
  </div>

  {/* Disclaimer Text */}
  <div className="mx-auto max-w-7xl px-4 pb-4  text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
    <strong>Risk Warning:</strong> Trading Forex and CFDs carries a high level of risk to
    your capital and you should only trade with money you can afford to lose.
    Trading Forex and CFDs may not be suitable for all investors, so please ensure
    that you fully understand the risks involved and seek independent advice if
    necessary. Please read and ensure you fully understand our Risk Disclosure.
  </div>
</div>


      {/* Floating keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(-3deg) scale(1.02); }
          100% { transform: translateY(0) rotate(0deg) scale(1); }
        }
        .animate-float { animation: float infinite ease-in-out; }
        .animate-float-slow { animation: float-slow infinite ease-in-out; }
      `}</style>
    </footer>
  );
}
