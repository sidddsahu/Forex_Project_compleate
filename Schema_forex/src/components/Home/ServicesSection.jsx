"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaChartLine, FaChartBar, FaBitcoin, FaDollarSign } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";

const services = [
  {
    title: "Forex",
    desc: `The Forex market (FX) is the place where currencies are traded.
           It contains both major and minor FX pairs, such as EURUSD, GBPUSD, USDJPY, USDCAD, GBPJPY, CHFJPY, and NZDCAD.
           Acordan Research helps you enter the largest market with expert guidance.`,
    icon: <FaChartLine className="text-4xl text-[var(--accent)]" />,
  },
  {
    title: "Comex/Gold",
    desc: `The Comex market is where precious metals like GOLD (XAUUSD), Silver (XAGUSD), Energy, and crude oil (XTIUSD & WTIUSD) are traded.
           Get recommendations from a team of experts with over 12 years of market experience.`,
    icon: <GiGoldBar className="text-4xl text-[var(--accent)]" />,
  },
  {
    title: "Indices",
    desc: `The Indices market includes Dow Jones (US30), Nasdaq (Tech100), German30 (DAX30), and FTSE100.
           We provide signals based on technical charts, news, and equilibrium price analysis.`,
    icon: <FaChartBar className="text-4xl text-[var(--accent)]" />,
  },
  {
    title: "Crypto",
    desc: `Cryptocurrency trading involves buying and selling cryptocurrencies against the dollar (crypto/dollar pairs) or against other cryptos (crypto-to-crypto pairs).
           Get the best signals for maximum profitability.`,
    icon: <FaBitcoin className="text-4xl text-[var(--accent)]" />,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, type: "spring" },
  }),
};

export default function ServicesSection() {
  return (
    <section className="relative py-16 bg-[var(--bg)] text-[var(--text-color)] overflow-hidden border-b border-gray-200 dark:border-gray-700">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5 z-0"></div>

      {/* Animated $ Icons in Background */}
      {[...Array(8)].map((_, i) => (
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
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaDollarSign />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Our <span className="text-[var(--accent)]">Services</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg mb-14 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Explore our wide range of services that help you grow financially.
          Our expert team takes care of your portfolio and helps it grow.
        </motion.p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex" // make each motion div flex so child stretches
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.15}
                transitionSpeed={150}
                className="flex w-full"
              >
                <div
                  className="bg-[var(--secondary-bg)] shadow-lg rounded-2xl p-8
                             border border-gray-200 dark:border-gray-700
                             flex flex-col items-center text-center w-full
                             transition-all duration-500 ease-out
                             hover:-translate-y-2 hover:scale-[1.03]
                             hover:shadow-[0_0_20px_var(--accent)]
                             hover:bg-[var(--bg)] h-full"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-justify leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
