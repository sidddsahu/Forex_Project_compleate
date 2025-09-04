
"use client";
import React from "react";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ModalPopup from "../ModalPopup";

const CorePillars = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden border-b border-gray-800">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* 🔹 Left Side (Heading + Mockup Card) */}
        <div className="space-y-6">


 <motion.h2
                  className="text-4xl md:text-5xl text-white font-bold mb-4"
                  initial={{ opacity: 1, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                   Why Choose<span className="text-[var(--accent)]"> Us</span>
                </motion.h2>
                <motion.p
                  className="max-w-2xl mx-auto  text-white text-lg mb-14 opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  We don’t just provide services — we craft experiences.
            Our approach blends innovation, strategy, and human touch
            to deliver real impact for your business.
                </motion.p>




          {/* Showcase Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ">
            <img
              src="img/forex2.jpg" // 👉 replace with your own image
              alt="Innovation"
              className=" w-full object-cover opacity-80"
            />

          </div>

          {/* Call-to-action */}
          {/* <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 transition">
            <FaArrowRight />
          </button> */}
           <ModalPopup buttonText="  Learn More" />
        </div>

        {/* 🔹 Right Side (Pillars / Core Values) */}
        <div className="grid gap-8">
          {[
            {
              icon: <FaRocket className="text-pink-500 w-7 h-7" />,
              title: "Cutting-Edge Solutions",
              desc: "We stay ahead of the curve, bringing the latest technology and strategies to empower your growth.",
            },
            {
              icon: <FaLightbulb className="text-yellow-400 w-7 h-7" />,
              title: "Creative Innovation",
              desc: "Our team thrives on creativity, delivering fresh ideas that set you apart from the competition.",
            },
            {
              icon: <FaUsers className="text-green-400 w-7 h-7" />,
              title: "Client-Centric Approach",
              desc: "We build meaningful partnerships and design experiences tailored to your unique goals.",
            },
            {
              icon: <FaShieldAlt className="text-blue-400 w-7 h-7" />,
              title: "Trust & Reliability",
              desc: "Your success is safe with us — we ensure quality, security, and transparency in everything we do.",
            },
          ].map((pillar, i) => (
            <div
              key={i}
              className="relative flex items-start gap-5 group p-6 rounded-2xl bg-gray-800/60 hover:bg-gray-800 transition border border-gray-700 hover:border-blue-500"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-600 group-hover:scale-110 transition">
                {pillar.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
