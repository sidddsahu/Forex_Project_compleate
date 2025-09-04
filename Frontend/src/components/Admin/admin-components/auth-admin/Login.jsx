import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAdmin } from "../../../../axios/adminAPI"; // ✅ aapke API file ka import

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      await loginAdmin(formData); // ✅ backend se cookie set hogi
      setMsg("Login successful!");
      toast.success("Login successful! Redirecting...", { position: "top-center" });
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Login failed";
      setMsg(errorMsg);
      toast.error(errorMsg, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-blue-100  px-4">
      <ToastContainer />
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="../../../../../public/img/Entrepreneur.jpeg"
            alt="Admin Login"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Type your email"
                  className="w-full rounded-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-pink-400 outline-none"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Type your password"
                  className="w-full rounded-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-pink-400 outline-none"
                />
              </div>

              {/* Message */}
              {msg && (
                <div
                  className={`text-center text-sm font-medium ${
                    msg === "Login successful!" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {msg}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                {loading ? "Signing in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
