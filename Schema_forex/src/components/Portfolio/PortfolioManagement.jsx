// // src/components/PortfolioManagement.jsx
// import React from "react";
// import {
//   FaRegFileAlt,
//   FaUserPlus,
//   FaHandHoldingUsd,
//   FaChartLine,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const steps = [
//   { label: "Register 1", icon: <FaRegFileAlt className="text-lg" />, color: "#e74c3c" },
//   { label: "Create Account 2", icon: <FaUserPlus className="text-lg" />, color: "#e67e22" },
//   { label: "Invest for Growth 3", icon: <FaHandHoldingUsd className="text-lg" />, color: "#f1c40f" },
//   { label: "Trading 4", icon: <FaChartLine className="text-lg" />, color: "#27ae60" },
//   { label: "Withdraw 5", icon: <FaMoneyBillWave className="text-lg" />, color: "#2980b9" },
// ];

// const PortfolioManagement = () => {
//   return (
//     <section className="bg-[#152750] text-white py-20 px-6 md:px-20">
//       {/* Top Content */}
//       <div className="text-center max-w-4xl mx-auto mb-16">
//          <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//          Welcome to <span className="text-[var(--accent)]"> Accordan  Research</span>
//         </motion.h2>
//         <motion.p
//           className="max-w-5xl mx-auto text-justify text-lg mb-14 opacity-80"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//          AccordAN Research is a specialized portfolio management firm with core expertise
//           in the foreign exchange (forex) and gold trading markets. With a disciplined,
//           research-driven approach, we focus on delivering consistent returns while
//           managing risk in highly liquid, globally active markets.
//         </motion.p>

//       </div>

//       {/* How It Works */}
//       <div className="text-center">
//         <h3 className="text-2xl md:text-3xl font-bold mb-12">How It Works ?</h3>

//         {/* Desktop Circle Flow */}
//         <div className="hidden md:flex relative justify-center items-center w-[650px] h-[650px] mx-auto">
//           {/* Center Circle */}
//           <div className="absolute w-48 h-48 bg-[#0e1d3b] rounded-full flex items-center justify-center text-center shadow-lg border-4 border-white z-10">
//             <p className="font-bold text-lg px-4 leading-snug">
//               Your Journey <br /> with AccordAN
//             </p>
//           </div>

//           {/* Circular Background Segments + Inside Text */}
//           <svg viewBox="0 0 500 500" className="absolute w-full h-full">
//             {steps.map((step, index) => {
//               const startAngle = (index / steps.length) * 2 * Math.PI;
//               const endAngle = ((index + 1) / steps.length) * 2 * Math.PI;
//               const midAngle = (startAngle + endAngle) / 2;

//               const outerRadius = 220; // more space
//               const innerRadius = 160; // enough gap

//               // text position inside arc
//               const textRadius = (outerRadius + innerRadius) / 2;
//               const textX = 250 + textRadius * Math.cos(midAngle);
//               const textY = 250 + textRadius * Math.sin(midAngle);

//               // Arc Path points
//               const x1 = 250 + outerRadius * Math.cos(startAngle);
//               const y1 = 250 + outerRadius * Math.sin(startAngle);
//               const x2 = 250 + outerRadius * Math.cos(endAngle);
//               const y2 = 250 + outerRadius * Math.sin(endAngle);

//               const x3 = 250 + innerRadius * Math.cos(endAngle);
//               const y3 = 250 + innerRadius * Math.sin(endAngle);
//               const x4 = 250 + innerRadius * Math.cos(startAngle);
//               const y4 = 250 + innerRadius * Math.sin(startAngle);

//               const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

//               const pathData = `
//                 M ${x1} ${y1}
//                 A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2}
//                 L ${x3} ${y3}
//                 A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
//                 Z
//               `;

//               return (
//                 <g key={index}>
//                   {/* Colored Arc */}
//                   <path d={pathData} fill={step.color} />

//                   {/* Icon + Label inside arc */}
//                   <foreignObject
//                     x={textX - 60}
//                     y={textY - 40}
//                     width="120"
//                     height="80"
//                     style={{ overflow: "visible" }}
//                   >
//                     <div className="flex flex-col items-center justify-center h-full text-white text-center">
//                       <div className="bg-black/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
//                         {step.icon}
//                       </div>
//                       <span className="text-sm font-semibold leading-snug">{step.label}</span>
//                     </div>
//                   </foreignObject>
//                 </g>
//               );
//             })}
//           </svg>
//         </div>

//         {/* Mobile Vertical Timeline */}
//         <div className="flex flex-col items-center gap-12 md:hidden relative max-w-sm mx-auto">
//           <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/40 -translate-x-1/2"></div>
//           {steps.map((step, i) => (
//             <div key={i} className="flex flex-col items-center text-center relative z-10">
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
//                 style={{ background: step.color }}
//               >
//                 {step.icon}
//               </div>
//               <p className="mt-3 font-semibold">{step.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioManagement;

// src/components/PortfolioManagement.jsx
import React from "react";
import {
  FaRegFileAlt,
  FaUserPlus,
  FaHandHoldingUsd,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  { label: "Register", icon: <FaRegFileAlt />, color: "#e74c3c" },
  { label: "Create Account", icon: <FaUserPlus />, color: "#e67e22" },
  { label: "Invest for Growth", icon: <FaHandHoldingUsd />, color: "#f1c40f" },
  { label: "Trading", icon: <FaChartLine />, color: "#27ae60" },
  { label: "Withdraw", icon: <FaMoneyBillWave />, color: "#2980b9" },
];

const PortfolioManagement = () => {
  return (
    <section className="bg-[#152750] text-white py-20 px-6 md:px-20">
      {/* Top Content */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-[var(--accent)]">Accordan Research</span>
        </motion.h2>
        <motion.p
          className="max-w-5xl mx-auto text-justify text-lg mb-14 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Accordan Research is a specialized portfolio management firm with core expertise
          in forex and gold trading. With a disciplined, research-driven approach, we focus on
          delivering consistent returns while managing risk in highly liquid, globally active markets.
        </motion.p>
      </div>

      {/* How It Works */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-12">How It Works?</h3>

        {/* Desktop Horizontal Card Flow */}
      {/* Desktop Horizontal Card Flow */}
<div className="hidden md:flex justify-between items-center max-w-6xl mx-auto gap-6 relative">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      className="bg-[#0e1d3b] p-6 rounded-2xl shadow-lg flex-1 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div
        className="w-20 h-20 flex items-center justify-center rounded-full mb-4 text-2xl"
        style={{ backgroundColor: step.color }}
      >
        {step.icon}
      </div>
      <p className="font-semibold text-lg">{step.label}</p>
    </motion.div>
  ))}
</div>

        {/* Mobile Vertical Timeline */}
        <div className="flex flex-col items-center gap-12 md:hidden relative max-w-sm mx-auto">
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/30 -translate-x-1/2"></div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-2 text-2xl"
                style={{ backgroundColor: step.color }}
              >
                {step.icon}
              </div>
              <p className="mt-1 font-semibold">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioManagement;
