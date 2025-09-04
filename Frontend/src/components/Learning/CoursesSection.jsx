import React, { useState } from "react";
import { motion } from "framer-motion";
const courses = [
  {
    title: "Beginner Level",
    // price: "149 $",
    features: [
      "Introduction to Forex Market",
      "Currency Pairs, Pips, Lots, Calculations",
      "Trading Platforms (MT4/MT5) / Account Opening",
      "Basics of Risk & Money Management",
    ],
    popular: false,
  },
  {
    title: "Intermediate Level",
    // price: "499 $",
    features: [
      "Technical and Fundamental Analysis",
      "Basics, Candlesticks, RSI, Volume, MACD, PIVOTS, Trade Setup-1",
      "SAR Price Action, Trendlines",
      "Trading Psychology",
      "1-1 Doubt Sessions after every class",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    title: "Advanced / Professional Level",
    // price: "799 $",
    features: [
      "Technical and Fundamental Analysis",
      "Candlesticks, RSI, Volume, MACD, PIVOTS, Trade Setup-1",
      "SAR Price Action (1 & 2), Fibonacci Rec",
      "ORB + Golden Ratio, Supertrend, PRB, DMA, VWAP Crossovers",
      "Trade Setup-2",
      "Money & Risk Management, Trading Psychology",
      "1-1 Doubt Sessions, 3 Months Support, Portfolio Review",
    ],
    popular: true,
  },
];

const CoursesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openForm = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-900 py-20 text-white relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
          <motion.h2
          className="text-4xl md:text-5xl text-white ms-5 text-center font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
         Our Expert Designed <span className="text-[var(--accent)]"> Forex Trading Courses</span>
        </motion.h2>



        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Learn from beginner to professional with our carefully crafted Forex
          training modules. Start your journey today 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-8 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
          >
            {course.popular && (
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                ⭐ Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
           
            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              {course.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openForm(course)}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition"
            >
              Enquiry Now
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Enquiry for {selectedCourse?.title}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full border px-3 py-2 rounded-lg"
                rows="4"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90 transition text-white py-3 rounded-lg font-semibold"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
