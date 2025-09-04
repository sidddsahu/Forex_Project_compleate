
// import React from "react";
// import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// const LearningSection = () => {
//   return (
//     <section className="relative w-full  mt-12 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
//       {/* 🔹 Background Overlay */}
//       <img
//         src="img/forex1.jpg"
//         alt="Trading Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-20"
//       />
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* 🔹 Floating Elements (Decoration) */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-600/20 rounded-full blur-3xl animate-ping"></div>

//       {/* 🔹 Main Content */}
//       <div className="relative mt-14 z-10 container mx-auto px-6 lg:px-20 text-center">
//         {/* Title */}

//           <motion.h2
//                   className="text-4xl md:text-5xl font-bold mb-4"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   Learn. Trade. <span className="text-[var(--accent)]"> Succeed.</span>
//                 </motion.h2>
//                 <motion.p
//                   className="max-w-2xl mx-auto text-lg mb-14 opacity-80"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2, duration: 0.4 }}
//                 >
//                 Master Forex & Crypto Trading with Expert Mentorship
//                 </motion.p>




//         {/* Description */}
//         <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
//           At <span className="font-semibold text-white">Acordan Research</span>,
//           we empower traders at every level — <span className="text-blue-400">Beginner</span>,
//           <span className="text-green-400"> Intermediate</span>, and
//           <span className="text-yellow-400"> Advanced</span>.
//           Learn practical skills, proven strategies, and risk management
//           techniques to trade with confidence and consistency.
//         </p>

//         {/* 🔹 Highlights as Glass Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {[
//             { text: "Beginner to Advanced Courses", color: "from-blue-500 to-cyan-400" },
//             { text: "Proven Trading Strategies", color: "from-green-500 to-emerald-400" },
//             { text: "Risk & Money Management", color: "from-yellow-500 to-orange-400" },
//             { text: "1-on-1 Mentorship & Support", color: "from-purple-500 to-pink-400" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
//               hover:scale-105 hover:shadow-xl transition transform text-left"
//             >
//               <FaCheckCircle
//                 className={`text-2xl mb-3 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}
//               />
//               <p className="text-gray-200">{item.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="mt-12 flex justify-center gap-4">
//           <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold flex items-center gap-2 transition shadow-lg shadow-blue-500/30">
//             Get Started <FaArrowRight />
//           </button>
//           <button className="px-8 py-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition border border-gray-600">
//             View Courses
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearningSection;
import React from "react";
import { FaArrowRight, FaCheckCircle, FaChalkboardTeacher, FaChartLine, FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";
import ModalPopup from "../ModalPopup";

const LearningSection = () => {
  const highlights = [
    { text: "Beginner to Advanced Courses", icon: <FaChalkboardTeacher className="text-2xl" />, color: "from-blue-500 to-cyan-400" },
    { text: "Proven Trading Strategies", icon: <FaChartLine className="text-2xl" />, color: "from-green-500 to-emerald-400" },
    { text: "Risk & Money Management", icon: <FaShieldAlt className="text-2xl" />, color: "from-yellow-500 to-orange-400" },
    { text: "1-on-1 Mentorship & Support", icon: <FaUserFriends className="text-2xl" />, color: "from-purple-500 to-pink-400" },
  ];

  return (
    <section className="relative w-full py-4 mt-12 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Overlay */}
      <img
        src="img/forex1.jpg"
        alt="Trading Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-600/20 rounded-full blur-3xl animate-ping"></div>

      {/* Main Content */}
      <div className="relative mt-14 z-10 container mx-auto px-6 lg:px-20 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Learn. Trade. <span className="text-[var(--accent)]">Succeed.</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg mb-14 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Master Forex & Crypto Trading with Expert Mentorship
        </motion.p>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          At <span className="font-semibold text-white">Acordan Research</span>,
          we empower traders at every level — <span className="text-blue-400">Beginner</span>,
          <span className="text-green-400"> Intermediate</span>, and
          <span className="text-yellow-400"> Advanced</span>.
          Learn practical skills, proven strategies, and risk management
          techniques to trade with confidence and consistency.
        </p>

        {/* Highlights as Glass Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10
              hover:scale-105 hover:shadow-xl transition transform text-left flex flex-col items-start gap-3"
            >
              <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center`}>
                {item.icon}
              </div>
              <p className="text-gray-200 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          {/* <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-semibold flex items-center gap-2 transition shadow-lg shadow-blue-500/30">
            Get Started <FaArrowRight />
          </button> */}
          <ModalPopup buttonText=" Connect with expert" />
          {/* <button className="px-8 py-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition border border-gray-600">
            View Courses
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
