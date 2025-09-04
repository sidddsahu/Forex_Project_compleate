"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFileInvoice,
  FaPercentage,
  FaBars,
  FaChevronLeft,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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
        {!collapsed && (
          <Link to="/admin" className="text-xl font-bold text-[var(--accent)]">
            Billing System
          </Link>
        )}
        <div className="flex gap-2">
          <button
            onClick={toggleCollapse}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-[var(--secondary-bg)]"
          >
            <FaChevronLeft className={`text-[var(--text-color)] transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
          </button>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaBars className="text-[var(--text-color)]" />
          </button>
        </div>
      </div>

      {/* Sidebar Links */}
      <nav className="p-4 space-y-2 font-medium">
        <Link to="/admin" className={linkClass("/admin")}>
          <FaHome /> {!collapsed && "Dashboard"}
        </Link>

        {/* Masters Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("masters")}
            className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-[var(--secondary-bg)] text-[var(--text-color)]"
          >
            <span className="flex items-center gap-3">
              <FaFileInvoice /> {!collapsed && "Masters"}
            </span>
            {!collapsed && (
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${openMenu === "masters" ? "rotate-180" : ""}`}
              />
            )}
          </button>

          {openMenu === "masters" && !collapsed && (
            <div className="ml-6 mt-1 space-y-1">
              <Link to="/admin/proforma" className={linkClass("/admin/proforma")}>
                <FaFileInvoice /> Proforma Invoice
              </Link>
              <Link to="/admin/gst" className={linkClass("/admin/gst")}>
                <FaPercentage /> GST Details
              </Link>
            </div>
          )}
        </div>

        <Link to="/admin/farmer" className={linkClass("/admin/farmer")}>
          <FaUser /> {!collapsed && "Farmer"}
        </Link>
      </nav>
    </aside>
  );
}
