// "use client";

// import { useEffect, useState } from "react";
// import { FaCoffee, FaChartPie, FaDesktop, FaUsers, FaBitcoin, FaDollarSign } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Counter = ({ target, duration }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = target / (duration * 60); // 60 FPS
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         start = target;
//         clearInterval(timer);
//       }
//       setCount(Math.floor(start));
//     }, 1000 / 60);
//     return () => clearInterval(timer);
//   }, [target, duration]);

//   return <>{count}</>;
// };

// export default function AboutStatsSection() {
//   const stats = [
//     { icon: <FaCoffee size={36} />, value: 34, label: "Research Analysts" },
//     { icon: <FaChartPie size={36} />, value: 5000, label: "Successful Trades" },
//     { icon: <FaDesktop size={36} />, value: 1200, label: "Project Complete" },
//     { icon: <FaUsers size={36} />, value: 1500, label: "Happy Clients" },
//   ];

//   const bgIcons = [FaBitcoin, FaDollarSign, FaChartPie];

//   return (
//     <section className="relative py-20 overflow-hidden bg-[var(--bg)] text-[var(--text-color)] border-b border-gray-200 dark:border-gray-700">

//       {/* Animated gradient background */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `linear-gradient(135deg, var(--secondary-bg), transparent 70%)`,
//         }}
//         animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Floating finance icons */}
//       {Array.from({ length: 8 }).map((_, i) => {
//         const Icon = bgIcons[i % bgIcons.length];
//         return (
//           <motion.div
//             key={i}
//             className="absolute opacity-10"
//             style={{
//               top: `${Math.random() * 90}%`,
//               left: `${Math.random() * 90}%`,
//               fontSize: `${Math.random() * 40 + 20}px`,
//               color: "var(--accent)",
//             }}
//             animate={{ y: [0, -20, 0] }}
//             transition={{
//               duration: Math.random() * 5 + 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Icon />
//           </motion.div>
//         );
//       })}

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 relative z-10">

//         {/* Left Section */}
//         <div>
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             Get To <span className="text-[var(--accent)]">Know Us!</span>
//           </motion.h2>
//           <p className="text-[var(--text-color)]/80 mb-6 leading-relaxed text-justify">
//             Acordan Research is built on foundation of trust, transparency, faith,
//             commitment and dedicated hard work. Acordan Research is one of the best
//             consultant firm, providing quality consultation in various markets
//             through research, analysis, signals and learning.
//           </p>
//           <button className="px-6 py-2 rounded-full border border-[var(--text-color)] hover:bg-[var(--accent)] hover:text-white transition">
//             Know More
//           </button>
//         </div>

//         {/* Right Section - Glassmorphic Stats */}
//         <div className="relative">
//           {/* Plus Shape Lines */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--text-color)]/20 transform -translate-x-1/2"></div>
//           <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--text-color)]/20 transform -translate-y-1/2"></div>

//           <div className="grid grid-cols-2 backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden shadow-lg">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center justify-center p-8 text-center border border-[var(--text-color)]/10"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="mb-2 text-[var(--accent)]">{stat.icon}</div>
//                 <h3 className="text-2xl font-bold flex items-center gap-1">
//                   <Counter target={stat.value} duration={1.2} />+
//                 </h3>
//                 <p className="mt-1 text-sm text-[var(--text-color)]/80">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { FaCoffee, FaChartPie, FaDesktop, FaUsers, FaBitcoin, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Counter = ({ target, duration, startCount }) => {
  const props = useSpring({
    from: { val: 0 },
    to: { val: startCount ? target : 0 },
    config: { duration: duration * 1000 },
    reset: !startCount,
  });

  return <animated.span>{props.val.to((val) => Math.floor(val))}</animated.span>;
};

export default function AboutStatsSection() {
  const stats = [
    { icon: <FaCoffee size={36} />, value: 34, label: "Research Analysts" },
    { icon: <FaChartPie size={36} />, value: 5000, label: "Successful Trades" },
    { icon: <FaDesktop size={36} />, value: 1200, label: "Project Complete" },
    { icon: <FaUsers size={36} />, value: 1500, label: "Happy Clients" },
  ];

  const bgIcons = [FaBitcoin, FaDollarSign, FaChartPie];

  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% visible
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-[var(--bg)] text-[var(--text-color)] border-b border-gray-200 dark:border-gray-700"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--secondary-bg), transparent 70%)`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating finance icons */}
      {Array.from({ length: 8 }).map((_, i) => {
        const Icon = bgIcons[i % bgIcons.length];
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 relative z-10">
        {/* Left Section */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get To <span className="text-[var(--accent)]">Know Us!</span>
          </motion.h2>
          <p className="text-[var(--text-color)]/80 mb-6 leading-relaxed text-justify">
            Acordan Research is built on foundation of trust, transparency, faith,
            commitment and dedicated hard work. Acordan Research is one of the best
            consultant firm, providing quality consultation in various markets
            through research, analysis, signals and learning.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 rounded-full border border-[var(--text-color)] hover:bg-[var(--accent)] hover:text-white transition"
          >
            Know More
          </motion.button>
        </div>

        {/* Right Section - Glassmorphic Stats */}
        <div className="relative">
          {/* Plus Shape Lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--text-color)]/20 transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--text-color)]/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-2 backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden shadow-lg">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-8 text-center border border-[var(--text-color)]/10 relative group transition-colors duration-300 hover:border-[var(--accent)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="mb-2 text-[var(--accent)] group-hover:scale-125 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-2xl font-bold flex items-center gap-1">
                  <Counter target={stat.value} duration={1.2} startCount={inView} />+
                </h3>
                <p className="mt-1 text-sm text-[var(--text-color)]/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

