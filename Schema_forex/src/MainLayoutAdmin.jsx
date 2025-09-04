"use client";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Admin/Layout/Sidebar";
import Navbar from "./components/Admin/Layout/Navbar";
import ProformaInvoice from "./components/Admin/ProformaInvoice";


export default function MainLayoutAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mobile toggle
  const [collapsed, setCollapsed] = useState(false); // Desktop collapse

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className="flex min-h-screen bg-[var(--secondary-bg)]">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        collapsed={collapsed}
        toggleSidebar={toggleSidebar}
        toggleCollapse={toggleCollapse}
      />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300
        ${collapsed ? "md:ml-20" : "md:ml-64"} ml-0`}
      >
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Body / Pages */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/admin/blogs" element={<Dashboard />} />
            <Route path="proforma" element={<ProformaInvoice />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
