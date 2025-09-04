import React from "react";
import { motion } from "framer-motion";

const aboutData = [
  {
    big: "believe",
    highlight: "We Believe",
    textBold: "in an alternative to the trading of the past",
    description:
      "We're focused on solving problems, rather than selling trading products. We want to make the world a better place and change people's lives through ForexSignals.",
  },
  {
    big: "together",
    highlight: "We're building",
    textBold: "ForexSignals together",
    description:
      "We're doing things differently. For too long, trading has been obtuse, complex, and opaque. We want to change that and build a Trade Room with everyone, for everyone. Our amazing community suggests features, tests the app and gives us constant feedback so we can build something everyone loves.",
  },
  {
    big: "people",
    highlight: "Our way",
    textBold: "with words",
    description:
      "How we communicate changes how people feel about us, so we'd better make sure our words reflect what we stand for. Our tone of voice guidelines exist to do just that.",
  },
  {
    big: "team",
    highlight: "We're a fast-growing team",
    textBold: "from all over the world",
    description:
      "Home is everywhere around the world, our team is scattered around 20 countries, and we are just over 52 team members.",
  },
  {
    big: "",
    highlight: "Experienced traders",
    textBold: "by your side",
    description:
      "Our team of trading coaches is there for you. Leverage the 55+ years of their experience and finally crack the markets. Chat 24/7 with our pro trading coaches. Every question will be answered.",
  },
];

export default function AboutBody() {
  return (
    <section className="relative py-20 bg-[var(--bg)] text-[var(--text-color)] overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)] opacity-10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-[var(--secondary-bg)]/60 backdrop-blur-lg border border-[var(--accent)]/20 shadow-lg hover:shadow-[0_0_30px_var(--accent)] hover:-translate-y-2 transition-all duration-300"
          >
            {item.big && (
              <span className="absolute -top-8 left-4 text-8xl font-extrabold text-gray-300/20 dark:text-gray-600/20 select-none pointer-events-none">
                {item.big}
              </span>
            )}
            <h3 className="text-xl font-bold mb-3 leading-snug">
              <span className="text-yellow-400">{item.highlight}</span>{" "}
              <span className="text-[var(--text-color)]">{item.textBold}</span>
            </h3>
            <p className="text-base opacity-80 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
