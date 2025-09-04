// src/components/CEOSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaBitcoin, FaEuroSign, FaYenSign } from "react-icons/fa";

const currencyIcons = [FaDollarSign, FaBitcoin, FaEuroSign, FaYenSign];

const CEOSection = () => {
  return (
    <section className="relative py-20 bg-[var(--bg)] text-[var(--text-color)] overflow-hidden  border-b border-gray-200 dark:border-gray-700">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5"></div>

      {/* Floating Accent Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>

      {/* Floating Currency Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 10 }).map((_, i) => {
          const Icon = currencyIcons[i % currencyIcons.length];
          return (
            <Icon
              key={i}
              className="absolute text-[var(--accent)] opacity-20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
                animationDuration: `${8 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* CEO Section Content */}
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 z-10">
        {/* CEO Image */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-[var(--accent)] hover:shadow-[0_0_25px_var(--accent)] transition-all duration-500">
            <img
              src="https://via.placeholder.com/400x500" // Replace with CEO image URL
              alt="CEO Akash Ranjan"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">Akash Ranjan</h3>
              <p className="text-sm text-gray-200">CEO & Founder</p>
            </div>
          </div>
        </motion.div>

        {/* CEO Content */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]">
            Meet Our Visionary Leader
          </h2>
          <p className="text-lg mb-2 leading-relaxed opacity-90">
            With over 12 years of expertise in the dynamic world of forex
            trading, our CEO, <br /><strong>Akash Ranjan</strong>, has consistently
            navigated the complexities of global markets to deliver outstanding
            value to clients worldwide.
          </p>
          <p className="text-lg mb-2 leading-relaxed opacity-90">
            His career spans forex signals, trading education, and portfolio
            management — earning a reputation for precision, transparency, and
            client-first strategies. Every service we offer is built on deep
            market insight and practical experience.
          </p>
          <p className="text-lg mb-2 leading-relaxed opacity-90">
            Beyond numbers and charts, he is committed to empowering clients —
            making world-class forex trading accessible, profitable, and
            sustainable for all.
          </p>

          {/* Quote Style Vision */}
          <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--accent)] text-lg">
            “Success in forex isn’t luck — it’s strategy, discipline, and
            continuous learning.”
          </blockquote>
        </motion.div>
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
};

export default CEOSection;
