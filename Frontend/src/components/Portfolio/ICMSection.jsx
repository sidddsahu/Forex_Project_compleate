import React from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaDollarSign, FaEuroSign } from "react-icons/fa";

const ICMSection = () => {
  return (
    <section className="relative bg-[#0b1839] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Gradient/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1839] via-[#142a5c] to-[#0b1839] opacity-90"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Invest in <span className="text-blue-400">Crypto Markets</span> with
            Confidence
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Trade Bitcoin, Ethereum, and top altcoins securely on our
            platform. Experience lightning-fast transactions, low fees, and
            institutional-grade protection for your investments.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all rounded-full font-semibold text-white shadow-lg">
            Get Started →
          </button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center items-center">
          {/* Central Circle */}
          <motion.div
            className="w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex justify-center items-center shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="text-3xl font-bold">ICM</span>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="absolute top-6 left-10 w-14 h-14 rounded-full bg-white text-yellow-500 flex items-center justify-center shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaBitcoin size={28} />
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-14 w-14 h-14 rounded-full bg-white text-green-500 flex items-center justify-center shadow-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <FaDollarSign size={28} />
          </motion.div>

          <motion.div
            className="absolute right-12 top-12 w-14 h-14 rounded-full bg-white text-blue-500 flex items-center justify-center shadow-xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FaEuroSign size={28} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ICMSection;
