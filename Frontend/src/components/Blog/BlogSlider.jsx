"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import { fetchBlogs } from "../../redux/fetures/blog.Slice"; // 👈 import thunk

import "swiper/css";
import "swiper/css/pagination";

export default function BlogSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Added navigation hook
  const { items: blogs, loading, error } = useSelector((state) => state.blogs);

  // ✅ Component mount par API call
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // ✅ Handle Read More click
  const handleReadMore = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

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

        {/* ✅ Loading / Error handling */}
        {loading && <p className="text-center">Loading blogs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && blogs.length > 0 && (
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
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                <motion.div
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                                    <p
                  className="opacity-80 mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.description.length > 100
                        ? blog.description.substring(0, 100) + "..."
                        : blog.description,
                  }}
                />

                    <div className="flex justify-between items-center">
                      <span className="text-[var(--accent)] font-semibold">
                        By {blog.author_name}
                      </span>
                      <button
                        onClick={() => handleReadMore(blog.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-200 hover:scale-105"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {!loading && blogs.length === 0 && (
          <p className="text-center">No blogs available.</p>
        )}
      </div>
    </section>
  );
}
