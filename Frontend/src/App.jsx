import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import MainLayoutAdmin from "./MainLayoutAdmin";
import FloatingWhatsApp from "./Pages/FloatingWhatsApp";
import PremiumChatbot from "./Pages/PremiumChatbot";
import Login from "./components/Admin/admin-components/auth-admin/Login";
import ProtectedRoute from "./components/Admin/ProtectedRoute";



function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<AppRoute />} />

        {/* Admin Login */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <MainLayoutAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Global Widgets */}
      <FloatingWhatsApp
        phoneNumber="+911234567890"
        message="Hi! I'm interested in your Forex trading services."
        tooltip="Chat on WhatsApp"
      />
      <PremiumChatbot
        title="Acordan Forex Assistant"
        subtitle="Ask anything about our forex courses, risk, accounts, or support."
        brandColor="#0f766e"
      />
    </>
  );
}

export default App;
