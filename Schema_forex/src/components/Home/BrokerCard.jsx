import React from "react";
import {
  FaShieldAlt,
  FaChevronRight,
  FaGlobe,
  FaRobot,
  FaPercent,
  FaHeadset,
  FaBolt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const IcmSection = () => {
  const featuresLeft = [
    {
      icon: <FaShieldAlt className="text-[var(--accent)] text-3xl" />,
      title: "Civil Liability Insurance on your Trading Accounts",
      desc: "Covered up to €5 Million",
    },
    {
      icon: <FaGlobe className="text-[var(--accent)] text-3xl" />,
      title: "Trusted • Multi-regulated • Global",
      desc: "Regulated with SCA Dubai UAE, ADGM Abu Dhabi UAE, FCA London, ARIF Switzerland, and others.",
    },
    {
      icon: <FaRobot className="text-[var(--accent)] text-3xl" />,
      title: "AI-powered Trading Platforms",
      desc: "Access to MT4, MT5, and cTrader with AI-powered tools.",
    },
  ];

  const featuresRight = [
    {
      icon: <FaPercent className="text-[var(--accent)] text-3xl" />,
      title: "Low Spreads & Zero Commission",
      desc: "Enjoy low spreads, no swaps, and zero commission trades.",
    },
    {
      icon: <FaHeadset className="text-[var(--accent)] text-3xl" />,
      title: "World-class Support",
      desc: "Free client fund insurance, all deposit/withdrawal methods including crypto.",
    },
    {
      icon: <FaBolt className="text-[var(--accent)] text-3xl" />,
      title: "Best Possible Trading Conditions",
      desc: "Ultra-fast execution, competitive spreads, aggregated liquidity.",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden border-b border-gray-200 dark:border-gray-700"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-color)" }}
          >
            WHY <span style={{ color: "var(--accent)" }}>ICM?</span>
          </h2>
          <p
            className="mt-2 max-w-2xl mx-auto"
            style={{ color: "var(--text-color)" }}
          >
            Explore endless benefits of trading with an award-winning investment
            provider.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-10">
            {featuresLeft.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-color)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-color)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Illustration */}
          <div className="flex justify-center">
            <img
              src="img/icmcom.jpg"
              alt="ICM Illustration"
              className="w-full max-w-md object-contain rounded-lg shadow-md"
              style={{ backgroundColor: "var(--secondary-bg)" }}
            />
          </div>

          {/* Right Features */}
          <div className="space-y-10">
            {featuresRight.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-color)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-color)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.div className="mt-12 flex justify-center w-[80vw] mx-auto">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 group"
            style={{
              backgroundColor: "var(--accent)",
              color: "white",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            }}
          >
            Create An Account
            <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IcmSection;
