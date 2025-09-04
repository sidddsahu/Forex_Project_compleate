
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaDollarSign, FaBitcoin, FaChartLine } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import ModalPopup from "../ModalPopup";

const financeIcons = [FaDollarSign, FaBitcoin, FaChartLine, GiGoldBar];

const HeroBanner = () => {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--text-color)] transition-colors duration-300 mt-12  border-b border-gray-200 dark:border-gray-700"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg)] via-transparent to-[var(--secondary-bg)]"></div>

      {/* Floating finance icons */}
      {Array.from({ length: 10 }).map((_, i) => {
        const Icon = financeIcons[i % financeIcons.length];
        return (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              color: "var(--accent)",
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-18 flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Your <br /> Financial <br />
            <ReactTyped
              strings={["ADVISOR.", "ASSISTANT.", ]}
              typeSpeed={100}
              backSpeed={50}
              loop
              className="text-[var(--accent)]"
            />
          </h1>
          <p className="mt-6 text-lg opacity-80 max-w-lg mx-auto lg:mx-0">
            We make your money work even when you sleep — trusted by traders across the globe.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              <FaPhoneAlt />

            </button> */}
            <ModalPopup buttonText=" Let’s Start" />
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Content - Animated Trading Phone */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 mt-10 lg:mt-0 relative flex justify-center"
        >
          <motion.img
            src="img/slider1.png"
            alt="Trading Phone"
            className="relative z-10 w-full h-full  rounded-2xl  "
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-32">
          <path
            fill="var(--secondary-bg)"
            d="M0,224L80,202.7C160,181,320,139,480,133.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
