"use client";

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaChartLine, FaBitcoin, FaDollarSign } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import { fetchBlogById } from "../redux/fetures/blog.Slice";

const financeIcons = [FaDollarSign, FaBitcoin, FaChartLine, GiGoldBar];

export default function BlogDetail() {
  const { id } = useParams(); // ✅ Get blog ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentBlog, loading, error } = useSelector((state) => state.blogs);

  // ✅ Fetch blog data when component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchBlogById(id));
    }
  }, [dispatch, id]);

  // ✅ Handle back navigation
  const handleBackToBlog = () => {
    navigate(-1); // Go back to previous page
  };

  // ✅ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accent)] mx-auto mb-4"></div>
          <p className="text-[var(--text-color)]">Loading blog...</p>
        </div>
      </div>
    );
  }

  // ✅ Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={handleBackToBlog}
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/90"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // ✅ No blog found
  if (!currentBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <p className="text-[var(--text-color)] mb-4">Blog not found</p>
          <button
            onClick={handleBackToBlog}
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/90"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-[var(--bg)] text-[var(--text-color)] transition-colors duration-300">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-bg)] via-transparent to-[var(--secondary-bg)] -z-10"></div>

      {/* Floating Finance Icons */}
      {Array.from({ length: 14 }).map((_, i) => {
        const Icon = financeIcons[i % financeIcons.length];
        return (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              fontSize: `${Math.random() * 40 + 25}px`,
              color: "var(--accent)",
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* Blog Container */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Featured Image at Top */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-2xl border border-[var(--accent)]/20 mb-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={currentBlog.image || "https://cdn.prod.website-files.com/61cc4048703169cf7f80c492/6281d5b01f774b3a68b2cc7d_Forex-p-500.png"}
            alt={currentBlog.title}
            className="w-full max-h-[500px] object-contain rounded-xl
"
          />
        </motion.div>

        {/* Blog Content Box with Attractive Shadow */}
        <motion.div
          className="bg-[var(--secondary-bg)]/80 backdrop-blur-md rounded-xl shadow-2xl border border-[var(--accent)]/10 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Blog Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-center mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {currentBlog.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            className="flex justify-center gap-6 mb-10 text-sm opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>📅 {new Date(currentBlog.created_at || Date.now()).toLocaleDateString()}</span>
            <span>✍️ By {currentBlog.author_name}</span>
            <span>⏱ {Math.ceil(currentBlog.description?.length / 200) || 5} min read</span>
          </motion.div>

          {/* Blog Content */}
          <motion.article
            className="prose dark:prose-invert max-w-none prose-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
                    <div
          className="whitespace-pre-wrap text-justify"
          dangerouslySetInnerHTML={{ __html: currentBlog.description }}
        ></div>

          </motion.article>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleBackToBlog}
              className="inline-block px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              ← Back to Blogs
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32"
        >
          <path
            fill="var(--secondary-bg)"
            d="M0,224L80,202.7C160,181,320,139,480,133.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
