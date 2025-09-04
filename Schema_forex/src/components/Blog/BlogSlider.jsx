"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaChartPie, FaShieldAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

// Blog data with icons and links
const blogs = [
  {
    title: "Market Insights for August",
    image:
      "https://cdn.prod.website-files.com/61cc4048703169cf7f80c492/6281d5b01f774b3a68b2cc7d_Forex-p-500.png",
    excerpt:
      "Discover the latest forex trends and how they could impact your strategy.",
    icon: FaChartLine,
    link: "/blog-detail",
  },
  {
    title: "Trading Psychology",
    image:
      "https://cdn.prod.website-files.com/61cc4048703169cf7f80c492/6645b155e02a40ea4da54e2b_Blog%20cover%20(1)-p-500.png",
    excerpt:
      "Learn how to manage emotions and make rational trading decisions.",
    icon: FaBrain,
    link: "/blog-detail",
  },
  {
    title: "Technical Analysis Basics",
    image:
      "https://cdn.prod.website-files.com/61cc4048703169cf7f80c492/61cd4cb05ee2085d2d93a99b_611b86749aab577bee03c4d5_stock-warrant-p-500.jpeg",
    excerpt: "Master the fundamentals of chart reading and indicators.",
    icon: FaChartPie,
    link: "/blog-detail",
  },
  {
    title: "Risk Management Essentials",
    image:
      "https://cdn.prod.website-files.com/61cc4048703169cf7f80c492/61cd4caf8be532493815145a_6124ad6795446b73057afd72_forex-p-500.png",
    excerpt:
      "Protect your capital with proven money management techniques.",
    icon: FaShieldAlt,
    link: "/blog-detail",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[var(--secondary-bg)] text-[var(--text-color)] border-b border-gray-200 dark:border-gray-700">
      {/* Animated radial glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at top left, var(--accent)/12 0%, transparent 70%)`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {blogs.map((blog, i) => {
          const Icon = blog.icon;
          return (
            <Icon
              key={i}
              className="absolute text-[var(--accent)] opacity-10 animate-float"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                fontSize: `${35 + Math.random() * 40}px`,
                animationDuration: `${10 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-center font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest <span className="text-[var(--accent)]">Blogs</span>
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, index) => {
            const Icon = blog.icon;
            return (
              <SwiperSlide key={index}>
                <motion.a
                  href={blog.link}
                  className="block bg-[var(--bg)]/90 backdrop-blur-sm rounded-xl shadow-xl border border-[var(--text-color)]/10 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover"
                    />
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4 bg-[var(--accent)] text-white p-3 rounded-full shadow-lg">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                    <p className="opacity-80 mb-4">{blog.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[var(--accent)] font-semibold hover:gap-2 transition-all duration-200">
                      Read More →
                    </span>
                  </div>
                </motion.a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
