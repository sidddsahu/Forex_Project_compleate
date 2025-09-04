import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import MainLayoutAdmin from "./MainLayoutAdmin";
import FloatingWhatsApp from "./Pages/FloatingWhatsApp";
import PremiumChatbot from "./Pages/PremiumChatbot";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<AppRoute />} />

        {/* Admin Routes (nested inside MainLayoutAdmin) */}
        <Route path="/admin/*" element={<MainLayoutAdmin />} />
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
