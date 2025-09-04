"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronLeft, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar({ isOpen, collapsed, toggleSidebar, toggleCollapse }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  // ✅ Active link class
  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all duration-200 ${
      location.pathname.startsWith(path)
        ? "bg-[var(--accent)] text-white"
        : "hover:bg-[var(--secondary-bg)] text-[var(--text-color)]"
    }`;

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-[var(--bg)] shadow-lg transition-all duration-300 z-50
      ${collapsed ? "w-20" : "w-64"}
      ${isOpen ? "translate-x-0" : "-translate-x-64"}
      md:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        {/* ✅ Logo hamesha visible + animate */}
        <Link to="/admin" className="flex items-center gap-2 w-full justify-center">
          <motion.img
            src="/img/logoAcordan1.png"
            alt="Admin Logo"
            className={`${collapsed ? "w-10" : "w-40"} h-auto object-contain`}
            animate={{
              scale: [1, 1.05, 1],   // zoom in-out
              rotate: [0, 2, -2, 0], // tilt left-right
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              rotate: 8,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
          />
        </Link>

        <div className="flex gap-2">
          <button
            onClick={toggleCollapse}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-[var(--secondary-bg)]"
          >
            <FaChevronLeft
              className={`text-[var(--text-color)] transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaBars className="text-[var(--text-color)]" />
          </button>
        </div>
      </div>

      {/* Sidebar Links */}
      <nav className="p-4 space-y-2 font-medium">
        <Link to="/admin/blogs" className={linkClass("/admin/blogs")}>
          <FaFileAlt /> {!collapsed && "Blog"}
        </Link>
      </nav>
    </aside>
  );
}
