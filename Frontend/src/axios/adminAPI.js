import axios from "axios";

const adminAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // ✅ cookies send karne ke liye
});

// =================== AUTH REQUESTS ===================


// ✅ Login
export const loginAdmin = (data) => adminAPI.post("auth/login", data);

// ✅ Logout
export const logoutAdmin = () => adminAPI.post("auth/logout");

// ✅ Dashboard (fetch logged-in user)
export const fetchDashboard = () => adminAPI.get("auth/admin");

// ✅ Change Password
export const changePassword = (oldPassword, newPassword) =>
  adminAPI.post("auth/change-password", { oldPassword, newPassword });

export default adminAPI;
