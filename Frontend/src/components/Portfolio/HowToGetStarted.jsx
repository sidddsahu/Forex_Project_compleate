
import React from "react";
import {
  DocumentTextIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const steps = [
  {
    id: "01",
    title: "Registration",
    desc: "Open Account with ICMCapital and deposit capital",
    icon: <DocumentTextIcon className="h-10 w-10 text-[#0f2544]" />,
    position: "left",
  },
  {
    id: "02",
    title: "DOCUMENTATION",
    desc: "Sign LPOA and agreement",
    icon: <PencilSquareIcon className="h-10 w-10 text-[#0f2544]" />,
    position: "right",
  },
  {
    id: "03",
    title: "RISK profiling",
    desc: "Choose risk category",
    icon: <PaperAirplaneIcon className="h-10 w-10 text-[#0f2544]" />,
    position: "left",
  },
  {
    id: "04",
    title: "Trading",
    desc: "Start trading and growing",
    icon: <CurrencyDollarIcon className="h-10 w-10 text-[#0f2544]" />,
    position: "right",
  },
];

export default function HowToGetStarted() {
  return (
    <section className="bg-[#0f2544] py-16 px-6 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Title */}

          <motion.h2
          className="text-4xl md:text-5xl text-white ms-5 text-center font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
         How To <span className="text-[var(--accent)]"> Get Started</span>
        </motion.h2>


        {/* --- Mobile View --- */}
        <div className="flex flex-col gap-10 md:hidden">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col  items-center gap-6 bg-white/5 rounded-xl p-6 shadow-lg"
            >
              {/* Icon + Number */}
              <div className="relative flex flex-col items-center">
                <div className="bg-white w-24 h-24 rounded-lg flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <span className="absolute -top-4 -left-4 bg-white text-[#0f2544] font-bold rounded-full w-10 h-10 flex items-center justify-center shadow">
                  {step.id}
                </span>
              </div>

              {/* Text */}
              <div className="mt-6 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden md:grid grid-cols-2 gap-10 ms-36">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* Left Text */}
              {step.position === "left" && (
                <div className="text-center md:text-right md:w-1/2">
                  <h3 className="text-white font-semibold text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">{step.desc}</p>
                </div>
              )}

              {/* Icon + Number */}
              <div className="relative flex-shrink-0">
                <div className="bg-white w-28 h-28 rounded-lg flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <span className="absolute -top-6 -left-6 bg-white text-[#0f2544] font-bold rounded-full w-12 h-12 flex items-center justify-center shadow">
                  {step.id}
                </span>
              </div>

              {/* Right Text */}
              {step.position === "right" && (
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-white font-semibold text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">{step.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
