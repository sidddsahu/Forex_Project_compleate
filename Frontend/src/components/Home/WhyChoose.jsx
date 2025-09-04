// // src/components/WhyChoose.jsx
// import React from "react";
// import { Users, CalendarDays, TrendingUp } from "lucide-react"; // modern icons
// import { motion } from "framer-motion";
// const features = [
//   {
//     icon: <Users size={36} className="text-[var(--accent)]" />,
//     title: "Market Coverage",
//     desc: "Trade in Bursa Malaysia, Forex, Comex, SGX, Hong Kong & Indices.",
//   },
//   {
//     icon: <CalendarDays size={36} className="text-[var(--accent)]" />,
//     title: "Support",
//     desc: "Get help from your dedicated relationship manager from 9:00 am to 9:00 pm MST*.",
//   },
//   {
//     icon: <TrendingUp size={36} className="text-[var(--accent)]" />,
//     title: "Extensive Research",
//     desc: "Leverage unbiased technical analysis for well-informed trading decisions.",
//   },
// ];

// const WhyChoose = () => {
//   return (
//     <section className="bg-[var(--bg)] text-[var(--text-color)] py-16 px-4 border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }} // faster
//         >
//         Why You  Must<span className="text-[var(--accent)]"> Choose FinoFY</span>
//         </motion.h2>


//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-[var(--secondary-bg)] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-transparent hover:border-[var(--accent)]"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-sm opacity-80 leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;
import React from "react";
import {
  Users,
  CalendarDays,
  TrendingUp,
  ShieldCheck,
  Globe2,
  DollarSign,
} from "lucide-react";
import { FaBitcoin, FaDollarSign, FaEuroSign, FaYenSign } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Users size={36} className="text-[var(--accent)]" />,
    title: "Market Coverage",
    desc: "Trade in Bursa Malaysia, Forex, Comex, SGX, Hong Kong & Indices.",
  },
  {
    icon: <CalendarDays size={36} className="text-[var(--accent)]" />,
    title: "Dedicated Support",
    desc: "Get help from your relationship manager 9:00 am – 9:00 pm MST*.",
  },
  {
    icon: <TrendingUp size={36} className="text-[var(--accent)]" />,
    title: "Extensive Research",
    desc: "Leverage unbiased technical analysis for informed trading decisions.",
  },
  {
    icon: <ShieldCheck size={36} className="text-[var(--accent)]" />,
    title: "Trusted & Secure",
    desc: "Your investments are safeguarded with top-tier global regulations.",
  },
  {
    icon: <Globe2 size={36} className="text-[var(--accent)]" />,
    title: "Global Reach",
    desc: "Access international markets and diversify your investment portfolio.",
  },
  {
    icon: <DollarSign size={36} className="text-[var(--accent)]" />,
    title: "Low Cost Trading",
    desc: "Enjoy competitive spreads, zero swaps, and no hidden commissions.",
  },
];

const currencyIcons = [FaDollarSign, FaBitcoin, FaEuroSign, FaYenSign];

const WhyChoose = () => {
  return (
    <section className="relative bg-[var(--bg)] text-[var(--text-color)] py-20 px-4 overflow-hidden  border-b border-gray-200 dark:border-gray-700">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/5"></div>

      {/* Floating Accent Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>

      {/* Animated Currency Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 12 }).map((_, i) => {
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

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why You Should <span className="text-[var(--accent)]">Choose Acordan Research</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg opacity-80 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At Acordan Research, we blend market expertise, cutting-edge technology, and
          personalized support to help you trade smarter and grow faster.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--secondary-bg)] backdrop-blur-md rounded-2xl shadow-lg p-8 border border-transparent hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-5 flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
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

export default WhyChoose;
