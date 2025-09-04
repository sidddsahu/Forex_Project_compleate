import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaUserTie,
  FaThumbsUp,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    value: 35000,
    suffix: "+",
    label: "Happy Traders Worldwide",
    icon: <FaUsers className="text-blue-500 text-3xl" />,
  },
  {
    id: 2,
    value: 12,
    suffix: "+",
    label: "Expert Forex Coaches",
    icon: <FaChalkboardTeacher className="text-blue-500 text-3xl" />,
  },
  {
    id: 3,
    value: 20,
    suffix: "+",
    label: "Years of Market Experience",
    icon: <FaUserTie className="text-blue-500 text-3xl" />,
  },
  {
    id: 4,
    value: 4900,
    suffix: "+",
    label: "Verified Customer Reviews",
    icon: <FaThumbsUp className="text-blue-500 text-3xl" />,
  },
];

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-b from-black via-neutral-900 to-black py-20 text-white  border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

           <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                  We Believe in an Alternative<span className="text-[var(--accent)]"> to the Trading of the Past</span>
                  </motion.h2>
                  <motion.p
                    className="max-w-2xl mx-auto text-lg mb-14 opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    At ForexSignals, we’re not here to just sell trading products —
            we’re here to build a global community. With innovative strategies,
            transparency, and expert mentorship, we help you unlock your true
            trading potential and change your life through Forex.
                  </motion.p>
         
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <motion.div
                key={stat.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-start shadow-lg hover:shadow-blue-500/30 transition"
              >
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-blue-400">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
