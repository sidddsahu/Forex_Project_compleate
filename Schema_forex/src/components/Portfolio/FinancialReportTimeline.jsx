
import React from "react";
import { motion } from "framer-motion";
/* ---------- Small helpers ---------- */
const Row = ({ label, value }) => (
  <div className="flex items-center text-[13px] leading-6">
    <span className="text-[var(--text-color)]/70">{label}</span>
    <span className="mx-2 flex-1 border-b border-dotted border-[var(--text-color)]/30 translate-y-[2px]" />
    <span className="font-medium text-[var(--accent)]">{value}</span>
  </div>
);

const Card = ({ title, rows, attach = "below" }) => {
  const isAbove = attach === "above";

  return (
    <div
      className={`relative w-full max-w-[360px] ${
        isAbove ? "mb-14" : "mt-14"
      } flex flex-col items-center`}
    >
      {/* connector from line to card */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${
          isAbove ? "-bottom-[64px]" : "-top-[64px]"
        } flex flex-col items-center`}
      >
        <span className="w-[2px] h-12 bg-[var(--text-color)]/70" />
        <span className="w-3 h-3 bg-[var(--text-color)] rounded-full mt-[-1px]" />
      </div>

      {/* card */}
      <div className="bg-[var(--bg)] border border-[var(--text-color)]/20 rounded-lg shadow-md px-6 py-5 relative z-10">
        <div className="mb-3">
          <span className="bg-[var(--secondary-bg)] text-[var(--text-color)] font-semibold px-2 py-[2px] inline-block rounded">
            {title}
          </span>
        </div>
        <div className="space-y-[6px]">
          {rows.map((r, i) => (
            <Row key={i} label={r.label} value={r.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FinancialReportTimeline() {
  return (
    <section
      className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16"
      style={{ backgroundColor: "var(--bg)", color: "var(--text-color)" }}
    >
      {/* Title */}
      <div className="relative mb-16 lg:mb-14">


             <motion.h2
                    className="text-4xl text-center md:text-5xl mb-14 font-bold "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                   Financial Report<span className="text-[var(--accent)]">   Timeline</span>
                  </motion.h2>
        </div>


      {/* Timeline area */}
      <div className="relative">
        {/* center line */}
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-[var(--text-color)]/70" />

        {/* left/right dots */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--text-color)] rounded-full" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--text-color)] rounded-full" />

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* 1) 2024 */}
          <div className="flex flex-col items-center">
            <div className="relative h-0 w-full flex justify-center">
              <span className="absolute -top-5 bg-[var(--text-color)] text-[var(--bg)] px-4 py-[4px] rounded font-semibold">
                2024
              </span>
            </div>
            <Card
              attach="below"
              title="Nov - Dec"
              rows={[
                { label: "Profit:", value: "4 664.98" },
                { label: "Deposit:", value: "22 230.00" },
                { label: "Balance:", value: "26 894.98" },
              ]}
            />
          </div>

          {/* 2) 2025 */}
          <div className="flex flex-col items-center">
            <div className="relative h-0 w-full flex justify-center">
              <span className="absolute sm-top-8 sm:-top-12 bg-[var(--text-color)] text-[var(--bg)] px-4 py-[4px] rounded font-semibold">
                2025
              </span>
            </div>
            <Card
              attach="above"
              title="Jan - Feb"
              rows={[
                { label: "Profit:", value: "8 000.60" },
                { label: "Deposit:", value: "40 000.00" },
                { label: "Withdrawal:", value: "-9 630.00" },
                { label: "Balance:", value: "38 370.60" },
              ]}
            />
          </div>

          {/* 3) Mar-Apr */}
          <Card
            attach="below"
            title="Mar - Apr"
            rows={[
              { label: "Profit:", value: "9 864.32" },
              { label: "Balance:", value: "9 864.32" },
            ]}
          />

          {/* 4) May-Jun */}
          <Card
            attach="above"
            title="May - Jun"
            rows={[
              { label: "Profit:", value: "5 490.50" },
              { label: "Balance:", value: "5 490.50" },
            ]}
          />

          {/* 5) Summary */}
          <Card
            attach="below"
            title="Summary"
            rows={[
              { label: "Profit:", value: "28 020.40" },
              { label: "Deposit:", value: "62 230.00" },
              { label: "Withdrawal:", value: "-9 630.00" },
              { label: "Balance:", value: "80 620.40" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
