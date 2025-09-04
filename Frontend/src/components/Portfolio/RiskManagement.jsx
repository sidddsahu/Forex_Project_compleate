// import React from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { motion } from "framer-motion";
// const data = [
//   { name: "Series 1", ivory: 18, slate: 24, bronze: 80 },
//   { name: "Series 2", ivory: 12, slate: 36, bronze: 110 },
//   { name: "Series 3", ivory: 16, slate: 48, bronze: 160 },
// ];

// // Tier titles
// const tierTitle = {

// ivory: "Ivory Tier (Low)", //this need i have in first number in my ui sequence
// slate: "Slate Tier (Low-Medium)",//this need i have in second number in my ui sequence
//   bronze: "Bronze Tier (Medium)",//this need i have in third number in my ui sequence



// };

// // Custom Tooltip
// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || !payload.length) return null;
//   return (
//     <div className="bg-black text-white px-3 py-2 rounded-md shadow-lg">
//       <p className="font-semibold">{tierTitle[payload[0].dataKey]}</p>
//       <p className="text-sm">
//         {label}: <span className="font-bold">{payload[0].value}</span>
//       </p>
//     </div>
//   );
// };

// export default function RiskManagement() {
//   return (
//     <section className="bg-white px-4 sm:px-8 lg:px-14 py-10 lg:py-14 border-b border-gray-200 dark:border-gray-700">
//       {/* Title */}
//       <div className="relative mb-6 lg:mb-10 text-center">
//         {/* <span className="absolute -top-1 left-0 w-10 h-4 bg-[#cfeefb]" /> */}
//          <motion.h2
//           className="text-4xl md:text-5xl text-black text-center font-bold mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//        RISK <span className="text-[var(--accent)]"> MANAGEMENT</span>
//         </motion.h2>

//       </div>

//       {/* Chart */}
//       <div className="w-full h-[360px] sm:h-[400px] md:h-[420px] border-2 border-[#7c3aed]/60 rounded-md mb-8 bg-white p-3">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={data}
//             margin={{ top: 20, right: 30, left: 0, bottom: 24 }}
//             barCategoryGap="25%"
//             barGap={6}
//           >
//             <CartesianGrid strokeDasharray="4 4" stroke="#d4d4d8" />
//             <XAxis
//               dataKey="name"
//               tick={{ fontSize: 12, fill: "#374151" }}
//               tickLine={false}
//               axisLine={{ stroke: "#9ca3af" }}
//             />
//             <YAxis
//               domain={[0, 200]}
//               tick={{ fontSize: 12, fill: "#374151" }}
//               tickLine={false}
//               axisLine={{ stroke: "#9ca3af" }}
//             />
//             <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(124,58,237,0.05)" }} />
//             <Legend
//               verticalAlign="top"
//               height={40}
//               formatter={(value) => tierTitle[value]}
//             />

//             {/* Bars */}
//             <Bar dataKey="ivory" fill="#a3d6f1" radius={[6, 6, 0, 0]} />
//             <Bar dataKey="slate" fill="#9ca3af" radius={[6, 6, 0, 0]} />
//             <Bar dataKey="bronze" fill="#ffc53d" radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Legend + Description */}
//     <div className="   grid grid-cols-1 md:grid-cols-3 max-w-6xl m-auto md:gap-52">
//   <div>
//     <div className="flex items-center mb-2">
//       <span className="w-5 h-5 bg-[#a3d6f1] inline-block mr-2" />
//       <h3 className="font-semibold">Ivory Tier (Low)</h3>
//     </div>
//     <p className="text-sm text-gray-700 leading-relaxed">
//       Low Risk – Forex Account
//       <br />
//       Conservative exposure to major currency pairs.
//       <br />
//       Designed for capital preservation with steady compounding.
//     </p>
//   </div>

//   <div>
//     <div className="flex items-center mb-2">
//       <span className="w-5 h-5 bg-[#9ca3af] inline-block mr-2" />
//       <h3 className="font-semibold">Slate Tier (Low-Medium)</h3>
//     </div>
//     <p className="text-sm text-gray-700 leading-relaxed">
//       Medium Risk – Gold Strategy
//       <br />
//       Balanced exposure to gold trading using algorithmic signals.
//       <br />
//       Ideal for moderate growth with risk control.
//     </p>
//   </div>

//   <div>
//     <div className="flex items-center mb-2">
//       <span className="w-5 h-5 bg-[#ffc53d] inline-block mr-2" />
//       <h3 className="font-semibold">Bronze Tier (Medium)</h3>
//     </div>
//     <p className="text-sm text-gray-700 leading-relaxed">
//       High Risk – Aggressive Gold Leveraged
//       <br />
//       High-return potential with leveraged gold positions.
//       <br />
//       Suited for experienced investors with higher risk appetite.
//     </p>
//   </div>
// </div>

//     </section>
//   );
// }
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Series 1", ivory: 18, slate: 24, bronze: 80 },
  { name: "Series 2", ivory: 12, slate: 36, bronze: 110 },
  { name: "Series 3", ivory: 16, slate: 48, bronze: 160 },
];

// Strict sequence (first -> second -> third)
const tierOrder = ["ivory", "slate", "bronze"];

// Titles (with numbering as requested)
const tierTitle = {
  ivory: "1. Ivory Tier (Low)",
  slate: "2. Slate Tier (Low-Medium)",
  bronze: "3. Bronze Tier (Medium)",
};

// Colors
const tierColors = {
  ivory: "#a3d6f1",
  slate: "#9ca3af",
  bronze: "#ffc53d",
};

/* Custom Tooltip: sorts incoming payload by our strict order */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  // sort the payload items in the strict order
  const sorted = [...payload].sort(
    (a, b) => tierOrder.indexOf(a.dataKey) - tierOrder.indexOf(b.dataKey)
  );

  return (
    <div className="bg-black text-white px-3 py-2 rounded-md shadow-lg">
      <p className="font-semibold mb-1">{label}</p>
      {sorted.map((entry) => (
        <p key={entry.dataKey} className="text-sm">
          {tierTitle[entry.dataKey]}: <span className="font-bold">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

/* Custom Legend: renders items in exact order we want */
const CustomLegend = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 8 }}>
      {tierOrder.map((key) => (
        <div key={key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 14,
              height: 14,
              display: "inline-block",
              backgroundColor: tierColors[key],
              borderRadius: 3,
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03)",
            }}
          />
          <span style={{ fontSize: 14, color: "#374151" }}>{tierTitle[key].replace(/^\d\.\s*/, (m) => m)}</span>
          {/* the replace above simply removes leading number+dot from legend label
              if you want the number visible in the legend, remove the .replace() call */}
        </div>
      ))}
    </div>
  );
};

export default function RiskManagement() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-14 py-10 lg:py-14 border-b border-gray-200 dark:border-gray-700">
      {/* Title */}
      <div className="relative mb-6 lg:mb-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl text-black text-center font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          RISK <span className="text-[var(--accent)]"> MANAGEMENT</span>
        </motion.h2>
      </div>

      {/* Chart */}
      <div className="w-full h-[360px] sm:h-[400px] md:h-[420px] border-2 border-[#7c3aed]/60 rounded-md mb-8 bg-white p-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 24 }}
            barCategoryGap="25%"
            barGap={6}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#d4d4d8" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#374151" }}
              tickLine={false}
              axisLine={{ stroke: "#9ca3af" }}
            />
            <YAxis
              domain={[0, 200]}
              tick={{ fontSize: 12, fill: "#374151" }}
              tickLine={false}
              axisLine={{ stroke: "#9ca3af" }}
            />

            {/* Use our custom tooltip (sorted) */}
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(124,58,237,0.05)" }} />

            {/* Replace default legend with our custom legend component to enforce order */}
            <Legend verticalAlign="top" height={40} content={CustomLegend} />

            {/* Render bars in strict order */}
            {tierOrder.map((key) => (
              <Bar key={key} dataKey={key} fill={tierColors[key]} radius={[6, 6, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend + Description in strict order */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl m-auto md:gap-52">
        {tierOrder.map((key) => (
          <div key={key}>
            <div className="flex items-center mb-2">
              <span
                className="w-5 h-5 inline-block mr-2"
                style={{ backgroundColor: tierColors[key] }}
              />
              <h3 className="font-semibold">{tierTitle[key]}</h3>
            </div>

            {key === "ivory" && (
              <p className="text-sm text-gray-700 leading-relaxed">
                Low Risk – Forex Account
                <br />
                Conservative exposure to major currency pairs.
                <br />
                Designed for capital preservation with steady compounding.
              </p>
            )}
            {key === "slate" && (
              <p className="text-sm text-gray-700 leading-relaxed">
                Medium Risk – Gold Strategy
                <br />
                Balanced exposure to gold trading using algorithmic signals.
                <br />
                Ideal for moderate growth with risk control.
              </p>
            )}
            {key === "bronze" && (
              <p className="text-sm text-gray-700 leading-relaxed">
                High Risk – Aggressive Gold Leveraged
                <br />
                High-return potential with leveraged gold positions.
                <br />
                Suited for experienced investors with higher risk appetite.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
