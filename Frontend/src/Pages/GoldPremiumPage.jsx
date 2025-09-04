// // src/components/GoldPremiumPage.jsx
// "use client";
// import React, { useState, useRef } from "react";
// import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket } from "react-icons/fa";

// export default function GoldPremiumPage() {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "91",
//     number: "",
//     service: "Gold Premium",
//     message: "",
//   });
//   const [status, setStatus] = useState({ loading: false, success: null, message: "" });
//   const submitRef = useRef(null);

//   const payLinks = {
//     monthly: "paypal?amount=500",
//     quarterly: "paypal?amount=1200",
//     halfyear: "paypal?amount=2000",
//   };

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }

//   function validate() {
//     if (!form.name.trim()) return "Please enter your name.";
//     if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
//     if (!form.number.trim()) return "Please enter your mobile number.";
//     if (!form.message.trim()) return "Please enter a message.";
//     return null;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const err = validate();
//     if (err) return setStatus({ loading: false, success: false, message: err });

//     setStatus({ loading: true, success: null, message: "Submitting..." });
//     try {
//       // Replace with real API call
//       await new Promise((r) => setTimeout(r, 900));
//       console.log("FORM SUBMIT", { ...form, phone: `+${form.countryCode}${form.number}` });
//       setStatus({ loading: false, success: true, message: "Thanks! We'll contact you shortly." });
//       setForm({
//         name: "",
//         email: "",
//         countryCode: "91",
//         number: "",
//         service: "Gold Premium",
//         message: "",
//       });
//     } catch {
//       setStatus({ loading: false, success: false, message: "Something went wrong. Try again." });
//     }
//     if (submitRef.current) submitRef.current.focus();
//   }

//   // Helper components
//   const Stat = ({ label, value, accent }) => (
//     <div className="flex flex-col items-start">
//       <div className={`text-2xl md:text-3xl font-extrabold ${accent ? "text-[var(--accent)]" : ""}`}>{value}</div>
//       <div className="text-sm opacity-80">{label}</div>
//     </div>
//   );

//   const SampleSignal = ({ pair = "XAU/USD", entry = "1460", tp = "1470, 1485", sl = "1452" }) => (
//     <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl p-4 shadow-sm">
//       <div className="flex items-center justify-between">
//         <div>
//           <div className="text-sm opacity-80">Pair</div>
//           <div className="text-lg font-semibold">{pair}</div>
//         </div>
//         <div className="text-right">
//           <div className="text-sm opacity-80">Type</div>
//           <div className="text-lg font-semibold text-[var(--accent)]">BUY</div>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-3 mt-3 text-sm">
//         <div>
//           <div className="opacity-70">Entry</div>
//           <div className="font-medium">{entry}</div>
//         </div>
//         <div>
//           <div className="opacity-70">TP</div>
//           <div className="font-medium">{tp}</div>
//         </div>
//         <div>
//           <div className="opacity-70">SL</div>
//           <div className="font-medium">{sl}</div>
//         </div>
//       </div>
//       <div className="mt-3 text-xs opacity-70">Targets: <span className="font-medium">Multi-level (60-120 pips)</span></div>
//     </div>
//   );

//   return (
//     <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen mt-20">
//       {/* Hero Section */}
//       <header className="relative py-12">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1614176710432-81bdf52f120f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')",
//           }}
//           aria-hidden
//         />
//         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold">Gold Premium</h1>
//           <nav className="text-sm opacity-80 mt-3">
//             Home &nbsp; / &nbsp; Pages &nbsp; / &nbsp; <span className="font-medium">Gold Premium</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* Left Content Column */}
//           <div className="md:col-span-7">
//             <article className="prose prose-slate dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-bold mb-4">Gold Premium Signals Service</h2>

//               <p className="mb-3">Everyday basis <strong>2-3 high-quality signals</strong> will be sent directly to your WhatsApp.</p>
//               <p className="mb-3">Each signal includes complete trade details: <strong>entry price, multiple targets, and stop loss</strong>.</p>
//               <p className="mb-3">Each trade comes with <strong>60-80 pips</strong> target range, extended up to <strong>120 pips</strong> for favorable moves.</p>
//               <p className="mb-3">Expected monthly performance: <strong>1200-1400 pips</strong>.</p>
//               <p className="mb-3"><strong>Multiple target</strong> trades for optimal profit taking.</p>
//               <p className="mb-3">We share both <strong>swing</strong> and <strong>scalping</strong> opportunities based on market conditions.</p>
//               <p className="mb-3"><strong>Daily and weekly gold analysis</strong> with key levels and market outlook.</p>
//               <p className="mb-3">Coverage of <strong>major economic events</strong> (NFP, FED, FOMC, ECB, CPI) with trade opportunities.</p>
//               <p className="mb-3">Formulated strategy developed in consultation with experts, focusing on <strong>risk management</strong>.</p>
//               <p className="mb-3">Regular <strong>follow-up alerts</strong> to manage open positions.</p>

//               <div className="bg-[var(--secondary-bg)] p-4 rounded-lg border-l-4 border-[var(--accent)] my-6">
//                 <p className="font-semibold">Premium Features:</p>
//                 <ul className="list-disc pl-5 space-y-1">
//                   <li>Higher frequency signals (2-3 daily)</li>
//                   <li>Multi-level profit targets</li>
//                   <li>Advanced market analysis</li>
//                   <li>Economic event trading strategies</li>
//                 </ul>
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Sample Premium Gold Signal</h3>
//               <div className="grid gap-4">
//                 <SampleSignal />
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Performance Metrics</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                 <Stat label="Monthly Pips" value="1200-1400" accent />
//                 <Stat label="Per Trade Target" value="60-120 pips" />
//                 <Stat label="Signal Frequency" value="2-3 daily" />
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Market Analysis Snapshot</h3>
//               <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 mb-6">
//                 <div className="text-sm opacity-80 mb-3">XAU/USD — Weekly chart analysis with key levels</div>
//                 <div className="w-full h-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-md overflow-hidden relative">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-gray-400 dark:text-gray-600">Premium chart analysis would appear here</div>
//                   </div>
//                 </div>
//                 <div className="text-xs opacity-70 mt-2">Subscribers receive detailed weekly gold analysis with support/resistance levels and trading zones.</div>
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Subscription Plans</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">1 Month</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$500</div>
//                   <div className="mt-3">
//                     <a href={payLinks.monthly} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">3 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$1200</div>
//                   <p className="text-xs mt-1 opacity-70">Save $300</p>
//                   <div className="mt-3">
//                     <a href={payLinks.quarterly} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">6 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$2000</div>
//                   <p className="text-xs mt-1 opacity-70">Save $1000</p>
//                   <div className="mt-3">
//                     <a href={payLinks.halfyear} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-[var(--secondary-bg)] rounded-lg p-4 border border-[var(--secondary-bg)]">
//                 <h4 className="text-lg font-bold mb-2">Upgrade to Premium</h4>
//                 <p className="text-sm opacity-80 mb-4">Get our most advanced gold trading signals and analysis.</p>
//                 <div className="flex flex-wrap gap-3">
//                   <a href={payLinks.monthly} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">1 Month - $500</a>
//                   <a href={payLinks.quarterly} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">3 Months - $1200</a>
//                   <a href={payLinks.halfyear} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">6 Months - $2000</a>
//                 </div>
//               </div>
//             </article>
//           </div>

//           {/* Right Form Column */}
//           <div className="md:col-span-5">
//             <div className="sticky top-24">
//               <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-xl shadow-lg border border-[var(--secondary-bg)] p-6">
//                 <div className="mb-4">
//                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Started</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Fill this form and our team will contact you shortly</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
//                     <div className="flex gap-2">
//                       <select
//                         name="countryCode"
//                         value={form.countryCode}
//                         onChange={handleChange}
//                         className="w-28 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                       >
//                         <option value="91">India (+91)</option>
//                         <option value="1">USA (+1)</option>
//                         <option value="44">UK (+44)</option>
//                         <option value="971">UAE (+971)</option>
//                         <option value="65">Singapore (+65)</option>
//                       </select>
//                       <input
//                         type="tel"
//                         name="number"
//                         value={form.number}
//                         onChange={handleChange}
//                         required
//                         className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                         placeholder="Phone number"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Interested In</label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//                     >
//                       <option>Gold Premium</option>
//                       <option>Gold Basic</option>
//                       <option>Forex Premium</option>
//                       <option>Indices</option>
//                       <option>Crypto</option>
//                     </select>
//                   </div>
//                     <div>
//                                                        <label className="block text-sm font-medium mb-1">Message *</label>
//                                                        <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Preferred contact time, WhatsApp number, any queries..." className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                                                      </div>

//                                                      <div className="text-center">
//                                                        <button ref={submitRef} type="submit" disabled={status.loading} className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-95 disabled:opacity-60">
//                                                          {status.loading ? "Submitting..." : "Submit"}
//                                                        </button>
//                                                      </div>

//                                                      {status.message && (
//                                                        <div className={`mt-2 text-sm text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
//                                                          {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
//                                                          {status.message}
//                                                        </div>
//                                                      )}
//                                                    </form>

//                                                    <div className="mt-4 text-xs text-[var(--muted)]">
//                                                      By submitting you agree to receive WhatsApp updates. We respect your privacy.
//                                                    </div>

//                                                    <div className="mt-4 border-t pt-3 text-sm">
//                                                      <div className="flex items-center justify-between">
//                                                        <div>
//                                                          <div className="text-[var(--muted)]">Need help?</div>
//                                                          <div className="font-medium">WhatsApp: +91-XXXXXXXXXX</div>
//                                                        </div>
//                                                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">
//                                                          <FaWhatsapp /> Chat
//                                                        </a>
//                                                      </div>
//                                                    </div>
//                                                  </div>

//                                                  {/* small trust box */}
//                                                  <div className="mt-4 p-3 rounded-md bg-gradient-to-r from-[var(--secondary-bg)] to-white border border-[var(--secondary-bg)] flex items-center gap-3">
//                                                    <FaRocket className="text-[var(--accent)] text-2xl" />
//                                                    <div>
//                                                      <div className="text-sm font-semibold">Fast Onboarding</div>
//                                                      <div className="text-xs opacity-80">Share payment receipt on WhatsApp and join within minutes.</div>
//                                                    </div>
//                                                  </div>
//                                                </div>
//                                              </div>
//                                            </div>

//                                            {/* NOTES / FAQ */}
//                                            <div className="mt-8">
//                                              <div className="rounded-lg p-5 bg-[var(--secondary-bg)] border border-[var(--secondary-bg)]">
//                                                <h4 className="text-lg font-semibold">Important Notes</h4>
//                                                <ul className="list-disc list-inside mt-3 text-[var(--muted)]">
//                                                  <li>Signals are educational and do not guarantee profit. Trade with proper risk management.</li>
//                                                  <li>Always respect the stop loss level.</li>
//                                                  <li>Contact support for institutional / API integration.</li>
//                                                </ul>
//                                              </div>
//                                            </div>
//                                          </section>

//                                          {/* Floating WhatsApp CTA */}
//                                          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="fixed right-5 bottom-5 z-50">
//                                            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white text-xl">
//                                              <FaWhatsapp />
//                                            </div>
//                                          </a>
//                                        </main>
//                                      );
//                                    }


// src/components/GoldPremiumPage.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaChartLine,
  FaRocket,
  FaMoneyBillWave,
  FaShieldAlt,
  FaHeadset,
  FaRegClock
} from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import ContactForm from "../components/Home/ContactForm";

export default function GoldPremiumPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "91",
    number: "",
    service: "Gold Premium",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const submitRef = useRef(null);

  // Animation for stats counting up
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setAnimatedStats(prev => [Math.min(prev[0] + 30, 1200), Math.min(prev[1] + 2, 60), Math.min(prev[2] + 5, 95)]);
      }, 20),
      setInterval(() => {
        setAnimatedStats(prev => [Math.min(prev[0] + 15, 1400), Math.min(prev[1] + 1, 120), prev[2]]);
      }, 20)
    ];

    return () => intervals.forEach(int => clearInterval(int));
  }, []);

  const payLinks = {
    monthly: "paypal?amount=500",
    quarterly: "paypal?amount=1200",
    halfyear: "paypal?amount=2000",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.number.trim()) return "Please enter your mobile number.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setStatus({ loading: false, success: false, message: err });

    setStatus({ loading: true, success: null, message: "Submitting..." });
    try {
      await new Promise((r) => setTimeout(r, 900));
      console.log("FORM SUBMIT", { ...form, phone: `+${form.countryCode}${form.number}` });
      setStatus({ loading: false, success: true, message: "Thanks! We'll contact you shortly." });
      setForm({
        name: "",
        email: "",
        countryCode: "91",
        number: "",
        service: "Gold Premium",
        message: "",
      });
    } catch {
      setStatus({ loading: false, success: false, message: "Something went wrong. Try again." });
    }
    if (submitRef.current) submitRef.current.focus();
  }

  // Helper components
  const Stat = ({ label, value, accent, icon: Icon }) => (
    <div className="flex flex-col items-start p-4 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-xl border border-white/10 dark:border-black/10">
      {Icon && <Icon className={`text-2xl mb-2 ${accent ? "text-[var(--accent)]" : "text-[var(--text-color)]/70"}`} />}
      <div className={`text-2xl md:text-3xl font-extrabold ${accent ? "text-[var(--accent)]" : ""}`}>{value}</div>
      <div className="text-sm opacity-80 mt-1">{label}</div>
    </div>
  );

  const SampleSignal = ({ pair = "XAU/USD", entry = "1965.50", tp = "1975.50, 1988.00", sl = "1958.00" }) => (
    <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-xl p-4 shadow-lg hover:shadow-[var(--accent)]/10 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider opacity-70">Pair</div>
          <div className="text-lg font-bold">{pair}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider opacity-70">Type</div>
          <div className="text-lg font-bold text-[var(--accent)]">BUY</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
        <div>
          <div className="opacity-70 text-xs">Entry</div>
          <div className="font-medium">{entry}</div>
        </div>
        <div>
          <div className="opacity-70 text-xs">TP</div>
          <div className="font-medium text-green-400 dark:text-green-300">{tp}</div>
        </div>
        <div>
          <div className="opacity-70 text-xs">SL</div>
          <div className="font-medium text-red-400 dark:text-red-300">{sl}</div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-white/10 dark:border-black/10 text-xs flex justify-between items-center">
        <span className="opacity-70">Targets:</span>
        <span className="font-bold text-[var(--accent)]">Multi-level (80-120 pips)</span>
      </div>
    </div>
  );

  return (
    <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen mt-5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[var(--accent)]/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-1/3 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[var(--text-color)]/5 text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {['₿', '$', '€', '£', '¥'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* HERO SECTION */}
      <header className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-1 rounded-full mb-4">
            <GiGoldBar className="text-sm" />
            <span className="text-sm font-medium">GOLD PREMIUM SIGNALS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-color)] to-[var(--accent)] leading-tight">
            Institutional Gold <br />Trading Signals
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mt-4">
            Professional XAU/USD signals with 90-95% accuracy delivered directly to your WhatsApp
          </p>
          <nav className="text-sm opacity-80 mt-6">
            <span className="opacity-60">Home</span> &nbsp; / &nbsp;
            <span className="opacity-60">Services</span> &nbsp; / &nbsp;
            <span className="font-medium text-[var(--accent)]">Gold Premium</span>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            {/* INTRO SECTION */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GiGoldBar className="text-yellow-500" />
                <span>Gold Premium Signals</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent)] mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold">Daily Signals</h4>
                    <p className="text-sm opacity-80">2-3 high probability gold trades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent)] mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi Targets</h4>
                    <p className="text-sm opacity-80">Multiple profit-taking levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent)] mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold">Risk Management</h4>
                    <p className="text-sm opacity-80">1:3 or better risk-reward ratio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent)] mt-1">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold">Market Analysis</h4>
                    <p className="text-sm opacity-80">Weekly gold market reports</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Stat
                  label="Avg Monthly Pips"
                  value={`${animatedStats[0]}+`}
                  accent
                  icon={FaChartLine}
                />
                <Stat
                  label="Per Trade Target"
                  value={`${animatedStats[1]}-120 pips`}
                  icon={GiGoldBar}
                />
                <Stat
                  label="Success Rate"
                  value={`${animatedStats[2]}%`}
                  icon={FaShieldAlt}
                />
              </div>
            </div>

            {/* SAMPLE SIGNALS */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FaChartLine className="text-[var(--accent)]" />
                <span>Recent Signal Examples</span>
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <SampleSignal
                  pair="XAU/USD"
                  entry="1965.50"
                  tp="1975.50, 1988.00"
                  sl="1958.00"
                />
                <SampleSignal
                  pair="XAU/USD"
                  entry="1932.75"
                  tp="1942.50, 1955.00"
                  sl="1925.00"
                />
                <SampleSignal
                  pair="XAU/EUR"
                  entry="1785.25"
                  tp="1795.00, 1808.50"
                  sl="1778.00"
                />
                <SampleSignal
                  pair="XAU/GBP"
                  entry="1522.50"
                  tp="1532.00, 1545.50"
                  sl="1515.00"
                />
              </div>
            </div>

            {/* CHART EXAMPLE */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Gold Market Analysis</h3>
              <div className="rounded-lg border border-white/10 dark:border-black/10 p-4 bg-black/20">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-medium">XAU/USD — Weekly Chart</div>
                  <div className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded">
                    Updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>

                {/* Chart mockup */}
                <div className="w-full h-64 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-md overflow-hidden relative">
                  {/* Chart grid lines */}
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
                    {[...Array(5)].map((_, i) => (
                      <div key={`v-${i}`} className="border-r border-white/5"></div>
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <div key={`h-${i}`} className="border-t border-white/5"></div>
                    ))}
                  </div>

                  {/* Price line */}
                  <svg viewBox="0 0 400 256" className="w-full h-full">
                    {/* Price line */}
                    <polyline
                      fill="none"
                      stroke="url(#priceGradient)"
                      strokeWidth="2"
                      points="0,220 50,200 100,210 150,180 200,160 250,190 300,170 350,150 400,170"
                      strokeLinecap="round"
                    />

                    {/* Support/resistance levels */}
                    <line x1="0" x2="400" y1="240" y2="240" stroke="#10b981" strokeDasharray="4 2" strokeWidth="1" />
                    <text x="10" y="235" fill="#10b981" fontSize="10">Support</text>

                    <line x1="0" x2="400" y1="120" y2="120" stroke="#ef4444" strokeDasharray="4 2" strokeWidth="1" />
                    <text x="10" y="125" fill="#ef4444" fontSize="10">Resistance</text>

                    {/* Current price marker */}
                    <circle cx="390" cy="170" r="4" fill="var(--accent)" />
                    <text x="375" y="165" fill="var(--accent)" fontSize="10" textAnchor="end">1965.50</text>

                    <defs>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--accent)" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Time labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs opacity-70">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/5 p-2 rounded">
                    <div className="opacity-70 text-xs">Current</div>
                    <div className="font-bold">1965.50</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded">
                    <div className="opacity-70 text-xs">Today High</div>
                    <div className="font-bold text-green-400">1972.80</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded">
                    <div className="opacity-70 text-xs">Today Low</div>
                    <div className="font-bold text-red-400">1958.30</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs opacity-70">
                <p>Professional gold chart analysis provided to subscribers with entry zones, targets, and market commentary.</p>
              </div>
            </div>

            {/* PRICING */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FaMoneyBillWave className="text-[var(--accent)]" />
                <span>Pricing Plans</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {/* Monthly Plan */}
                <div className="bg-gradient-to-b from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-xl p-6 shadow-lg hover:border-[var(--accent)]/30 transition-all group">
                  <div className="text-sm uppercase tracking-wider opacity-70">1 Month</div>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-3xl font-bold text-[var(--accent)]">$599</span>
                    <span className="opacity-70 mb-1">/month</span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Daily 2-3 signals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Full trade management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Priority support</span>
                    </div>
                  </div>
                  <a
                    href={payLinks.monthly}
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent)]/90 transition-all group-hover:scale-[1.02]"
                  >
                    Get Monthly Plan
                  </a>
                </div>

                {/* Quarterly Plan (Featured) */}
                <div className="bg-gradient-to-b from-[var(--accent)]/10 to-[var(--accent)]/5 backdrop-blur-sm border border-[var(--accent)]/20 rounded-xl p-6 shadow-lg hover:border-[var(--accent)]/40 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 -right-0 bg-[var(--accent)] text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                  <div className="text-sm uppercase tracking-wider opacity-70">3 Months</div>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-3xl font-bold text-[var(--accent)]">$1499</span>
                    <span className="opacity-70 mb-1">($400/month)</span>
                  </div>
                  <div className="text-xs text-[var(--accent)] mt-1">Save $300 compared to monthly</div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Everything in Monthly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Weekly market analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>VIP support channel</span>
                    </div>
                  </div>
                  <a
                    href={payLinks.quarterly}
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent)]/90 transition-all group-hover:scale-[1.02]"
                  >
                    Get Quarterly Plan
                  </a>
                </div>

                {/* Half Year Plan */}
                <div className="bg-gradient-to-b from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-xl p-6 shadow-lg hover:border-[var(--accent)]/30 transition-all group">
                  <div className="text-sm uppercase tracking-wider opacity-70">6 Months</div>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-3xl font-bold text-[var(--accent)]">$2499</span>
                    <span className="opacity-70 mb-1">($333/month)</span>
                  </div>
                  <div className="text-xs text-[var(--accent)] mt-1">Save $1000 compared to monthly</div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Everything in Quarterly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Personalized strategy session</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--accent)] text-xs" />
                      <span>Advanced risk management</span>
                    </div>
                  </div>
                  <a
                    href={payLinks.halfyear}
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent)]/90 transition-all group-hover:scale-[1.02]"
                  >
                    Get 6 Month Plan
                  </a>
                </div>
              </div>

              <div className="mt-4 text-center text-sm opacity-80">
                All plans include 24/7 WhatsApp support and daily market updates.
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - CONTACT FORM */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              {/* CONTACT CARD */}
              <div className="bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 backdrop-blur-sm border border-[var(--accent)]/20 rounded-2xl p-6 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Get Started Today</h3>
                  <p className="text-sm opacity-80 mt-1">
                    Join our premium gold signals service and start trading like a professional
                  </p>
                </div>

               <ContactForm/>

                <div className="mt-4 text-xs text-center opacity-70">
                  By submitting, you agree to our terms and privacy policy. We'll contact you via WhatsApp.
                </div>
              </div>

              {/* SUPPORT CARD */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[var(--accent)]/10 text-[var(--accent)] p-3 rounded-full">
                    <FaHeadset className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">24/7 Support</h4>
                    <p className="text-sm opacity-80">Our team is always available to assist you</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 bg-green-600/20 border border-green-600/30 rounded-lg hover:bg-green-600/30 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <FaWhatsapp className="text-green-400 text-xl" />
                      <span>WhatsApp Support</span>
                    </div>
                    <span className="text-xs opacity-70">Instant Reply</span>
                  </a>

                  <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FaRegClock className="text-[var(--accent)] text-xl" />
                      <span>Working Hours</span>
                    </div>
                    <span className="text-xs opacity-70">24/7</span>
                  </div>
                </div>
              </div>

              {/* TESTIMONIAL */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <span className="font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John S.</h4>
                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-sm italic opacity-90">
                  "The gold premium signals have been incredibly accurate. I've seen consistent profits with their multi-target approach. The support team is always available when I have questions."
                </blockquote>
                <div className="mt-3 text-xs opacity-70 flex items-center gap-1">
                  <FaCheckCircle className="text-green-400" />
                  <span>Verified Subscriber</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How are gold signals delivered?",
                answer: "Signals are sent directly to your WhatsApp with entry, multiple targets, and stop loss levels. We also provide follow-up messages for trade management."
              },
              {
                question: "What's the typical trade duration?",
                answer: "Most trades last 1-3 days, but we also provide intraday opportunities. We clearly indicate the expected duration with each signal."
              },
              {
                question: "Can I get a refund?",
                answer: "Due to the digital nature of our service, we don't offer refunds. But we provide a 3-day trial for $99 that can be applied to a full subscription."
              },
              {
                question: "What time are signals sent?",
                answer: "Signals are typically sent during London (8AM-4PM GMT) and New York (8AM-5PM EST) trading sessions when gold is most active."
              },
              {
                question: "Do you provide trade analysis?",
                answer: "Yes, each signal comes with brief analysis explaining the trade setup. Weekly gold market analysis is provided to all subscribers."
              },
              {
                question: "What's the recommended account size?",
                answer: "We recommend at least $2,000 to properly implement our risk management strategy, but the service works with any account size."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                <p className="text-sm opacity-80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 group"
      >
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl text-white text-2xl relative overflow-hidden">
          <FaWhatsapp className="relative z-10" />
          <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-all"></div>
          <div className="absolute -inset-2 rounded-full border-4 border-green-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-all"></div>
        </div>
      </a>
    </main>
  );
}