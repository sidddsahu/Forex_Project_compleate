// src/AppRoute.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";
// import BlogSection from "../components/Blog/BlogSection";
// import BlogCards from "../components/Blog/BlogSection";
import Portfolio from "../Pages/Portfolio";
import BasicForex from "../Pages/BasicForex";
import PremiumForex from "../Pages/PremiumForex";
import GoldBasicPage from "../Pages/GoldBasic";
import Careers from "../Pages/Careers";
import GoldPremiumPage from "../Pages/GoldPremiumPage";
import IndicesBasicPage from "../Pages/IndicesBasicPage";
import BlogDetail from "../Pages/BlogDetail";
import LearningPage from "../Pages/LearningPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Header from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function AppRoute() {
  return (
      <div className="mt-12">
 <Header />
    <Routes>


      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog-detail" element={<BlogDetail />} />
      <Route path="/learning" element={<LearningPage />} />


      <Route path="/contact" element={<ContactUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/basic" element={< BasicForex/>} />
      <Route path="/premium" element={< PremiumForex/>} />
      <Route path="/gold-basic" element={< GoldBasicPage/>} />
      <Route path="/career" element={< Careers/>} />
      <Route path="/gold-premium" element={< GoldPremiumPage/>} />
      <Route path="/indice-basic" element={< IndicesBasicPage/>} />
      <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
      <Route path="/terms-condition" element={< TermsAndConditions/>} />
      {/* <Route path="/blog" element={<BlogCards />} /> */}
    </Routes>
     <Footer />
    </div>
  );
}
