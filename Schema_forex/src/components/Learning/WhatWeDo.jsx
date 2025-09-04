import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import ModalPopup from "../ModalPopup";

const WhatWeDo3D = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b,black)]"></div>
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/mosaic.png')] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
         Acordan Research  <span className="text-[var(--accent)]"> Trading Events & Masterclasses</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg mb-14 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Step inside our **3D Trading Arena** where every session is designed to
            push your skills beyond the ordinary — immersive, interactive, and
            packed with real-world experience.
        </motion.p>


        </motion.div>

        {/* Glassmorphism 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRegLightbulb className="text-yellow-400 text-3xl" />,
              title: "Exclusive Insights",
              desc: "Decode real-time market opportunities with advanced strategies.",
            },
            {
              icon: <FaChalkboardTeacher className="text-green-400 text-3xl" />,
              title: "Expert Masterclasses",
              desc: "Learn directly from pro traders through immersive, interactive sessions.",
            },
            {
              icon: <FaChartLine className="text-blue-400 text-3xl" />,
              title: "Live Trading Labs",
              desc: "Hands-on trading experience with our coaches guiding you live.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl transform-gpu hover:shadow-blue-500/30 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <a
            href="#join"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition"
          >
            Join the Trading Arena 🚀
          </a> */}
            <ModalPopup buttonText=" Connect with expert" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo3D;
