import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logoutAdmin, fetchDashboard } from "../../../axios/adminAPI"; // ✅ API

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null); // 👈 Dropdown wrapper ref

  // ✅ Fetch logged-in user details
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetchDashboard();
        setUser(res.data?.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    getUser();
  }, []);

  // ✅ Outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await logoutAdmin();
      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // ✅ Change Password
  const handleChangePassword = () => {
    navigate("/admin/change-password");
  };

  return (
    <header className="flex items-center justify-between bg-[var(--bg)] shadow px-6 py-3 sticky top-0 z-40">
      {/* Sidebar Toggle (Mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-[var(--text-color)]"
      >
        <FaBars size={20} />
      </button>

      {/* Title */}
      <h1 className="text-lg font-bold text-[var(--accent)]">Welcome {user?.name || user?.email || "User"} <span>ji</span></h1>

      {/* User Info + Dropdown Menu */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 text-[var(--text-color)]"
        >
          <span>Hello, {user?.name || user?.email || "User"}</span>
          <FaUserCircle size={28} className="text-[var(--accent)]" />
        </button>

        {/* Dropdown */}
        {openMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
            <button
              onClick={handleChangePassword}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
