// // src/components/PremiumForexPage.jsx
// "use client";
// import React, { useState, useRef } from "react";
// import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket } from "react-icons/fa";

// export default function PremiumForexPage() {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "91",
//     number: "",
//     service: "Forex Premium",
//     message: "",
//   });
//   const [status, setStatus] = useState({ loading: false, success: null, message: "" });
//   const submitRef = useRef(null);

//   const payLinks = {
//     monthly: "https://www.paypal.com/paypalme/yourmerchant/500",
//     quarterly: "https://www.paypal.com/paypalme/yourmerchant/1200",
//     halfyear: "https://www.paypal.com/paypalme/yourmerchant/2000",
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
//         service: "Forex Premium",
//         message: "",
//       });
//     } catch {
//       setStatus({ loading: false, success: false, message: "Something went wrong. Try again." });
//     }
//     if (submitRef.current) submitRef.current.focus();
//   }

//   // small helper components inside file
//   const Stat = ({ label, value, accent }) => (
//     <div className="flex flex-col items-start">
//       <div className={`text-2xl md:text-3xl font-extrabold ${accent ? "text-[var(--accent)]" : ""}`}>{value}</div>
//       <div className="text-sm opacity-80">{label}</div>
//     </div>
//   );

//   const SampleSignal = ({ pair = "EUR/USD", entry = "1.1742", tp = "1.1782", sl = "1.1712" }) => (
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
//       <div className="mt-3 text-xs opacity-70">Target: <span className="font-medium">40 pips</span></div>
//     </div>
//   );

//   return (
//     <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen mt-20">
//       {/* HERO / PAGE HEADER */}
//       <header className="relative py-12">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=89d2e5d3f43c39b7dba9fb7f78d7c0a3')",
//           }}
//           aria-hidden
//         />
//         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold">Forex Premium</h1>
//           <nav className="text-sm opacity-80 mt-3">
//             Home &nbsp; / &nbsp; Pages &nbsp; / &nbsp; <span className="font-medium">Forex Premium</span>
//           </nav>
//         </div>
//       </header>

//       {/* MAIN GRID */}
//       <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* LEFT: content */}
//           <div className="md:col-span-7">
//             <article className="prose prose-slate dark:prose-invert max-w-none">
//               <p className="mb-1">Everyday basis <strong>2–3 signals</strong> will be sent.</p>
//               <p className="mb-1">Each signal includes: entry price, target and stop loss.</p>
//               <p className="mb-1">Typical trade target: <strong>40–60 pips</strong>, sometimes extended up to <strong>100 pips</strong>.</p>
//               <p className="mb-1">Estimated monthly: <strong>~800–1000 pips</strong>.</p>
//               <p className="mb-1">We share both <strong>swing</strong> and <strong>scalping</strong> trades and supply support/resistance levels with charts and follow-up alerts.</p>

//               <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--muted)]">
//                 Mode: Signals are delivered one-to-one on WhatsApp. After you buy, share transaction on WhatsApp for onboarding.
//               </blockquote>

//               <h3>Things to follow</h3>
//               <ol>
//                 <li>Follow each recommendation you receive from Acordan Research.</li>
//                 <li>Respect the levels: entry, stop loss and target.</li>
//                 <li>Use uniform lot sizing to manage risk consistently.</li>
//               </ol>

//               <h3>Sample signal</h3>
//               <div className="grid gap-4 md:grid-cols-2">
//                 <SampleSignal pair="EUR/USD" entry="1.1742" tp="1.1782" sl="1.1712" />
//                 <SampleSignal pair="GBP/USD" entry="1.2745" tp="1.2790" sl="1.2710" />
//               </div>

//               <h3 className="mt-6">Performance & Stats</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
//                 <Stat label="Avg monthly pips" value="800–1000+" accent />
//                 <Stat label="Avg target / trade" value="40–60 pips" />
//                 <Stat label="Delivery" value="WhatsApp & Follow-ups" />
//               </div>

//               {/* Small support/resistance chart mock (SVG) */}
//               <h3 className="mt-6">Support / Resistance Snapshot</h3>
//               <div className="rounded-lg border border-[var(--secondary-bg)] p-4 bg-white dark:bg-[var(--secondary-bg)]">
//                 <div className="text-sm opacity-80 mb-3">EUR/USD — 4H chart (snapshot)</div>
//                 <div className="w-full h-40 bg-gradient-to-b from-white to-[var(--secondary-bg)] rounded-md overflow-hidden">
//                   {/* Simple SVG line with markers to illustrate S/R */}
//                   <svg viewBox="0 0 400 160" className="w-full h-full">
//                     {/* grid lines */}
//                     <defs>
//                       <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
//                         <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
//                         <stop offset="1" stopColor="#f5f7fa" stopOpacity="0.9" />
//                       </linearGradient>
//                     </defs>
//                     <rect x="0" y="0" width="400" height="160" fill="url(#g1)" />
//                     {/* support/resistance dashed lines */}
//                     <line x1="40" x2="380" y1="30" y2="30" stroke="#ef4444" strokeDasharray="6 4" strokeWidth="1" />
//                     <text x="44" y="24" fontSize="10" fill="#ef4444">Resistance</text>
//                     <line x1="40" x2="380" y1="110" y2="110" stroke="#10b981" strokeDasharray="6 4" strokeWidth="1" />
//                     <text x="44" y="124" fontSize="10" fill="#10b981">Support</text>

//                     {/* zigzag price line */}
//                     <polyline
//                       fill="none"
//                       stroke="#374151"
//                       strokeWidth="2"
//                       points="40,90 80,60 120,75 160,40 200,70 240,54 280,80 320,50 360,70"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     {/* markers for suggested entry/TP/SL */}
//                     <circle cx="160" cy="40" r="4" fill="var(--accent)" />
//                     <text x="168" y="44" fontSize="10" fill="var(--text-color)">Entry</text>

//                     <circle cx="200" cy="70" r="4" fill="#10b981" />
//                     <text x="208" y="74" fontSize="10" fill="#10b981">TP</text>

//                     <circle cx="120" cy="75" r="4" fill="#ef4444" />
//                     <text x="128" y="79" fontSize="10" fill="#ef4444">SL</text>
//                   </svg>
//                 </div>
//                 <div className="text-xs opacity-70 mt-2">This is a mock snapshot. Live charts are provided to subscribers in messages and graphs.</div>
//               </div>

//               {/* Pricing block */}
//               <h3 className="mt-6">Pricing</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">1 Month</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$500</div>
//                   <div className="mt-3">
//                     <a href={payLinks.monthly} target="_blank" rel="noreferrer" className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
//                       Buy 1 Month
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">3 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$1200</div>
//                   <div className="mt-3">
//                     <a href={payLinks.quarterly} target="_blank" rel="noreferrer" className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
//                       Buy 3 Months
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">6 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$2000</div>
//                   <div className="mt-3">
//                     <a href={payLinks.halfyear} target="_blank" rel="noreferrer" className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
//                       Buy 6 Months
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="rounded-lg p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)]">
//                   <h4 className="text-lg font-bold">Buy This Service Now</h4>
//                   <p className="mt-2 text-sm opacity-80">After payment, send the payment receipt via WhatsApp to start onboarding.</p>
//                   <div className="mt-4 flex gap-3 flex-wrap">
//                     <a href={payLinks.monthly} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">1 Month - $500</a>
//                     <a href={payLinks.quarterly} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">3 Months - $1200</a>
//                     <a href={payLinks.halfyear} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">6 Months - $2000</a>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           </div>

//           {/* RIGHT: sticky booking form */}
//           <div className="md:col-span-5">
//             <div className="sticky top-24">
//               <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl shadow p-6">
//                 <div className="mb-3">
//                   <h3 className="text-2xl font-bold">Book This Service</h3>
//                   <p className="text-sm opacity-80">Share your details & our sales expert will contact you shortly.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-3" name="enq">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Name *</label>
//                       <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter Your Name" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1">Email *</label>
//                       <input name="email" value={form.email} onChange={handleChange} required placeholder="name@domain.com" className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Mobile *</label>
//                     <div className="flex gap-2">
//                       <select name="countryCode" value={form.countryCode} onChange={handleChange} className="w-36 px-2 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent">
//                         <option value="91">INDIA +91</option>
//                         <option value="1">USA +1</option>
//                         <option value="44">UK +44</option>
//                         <option value="61">AU +61</option>
//                         <option value="971">UAE +971</option>
//                       </select>

//                       <input name="number" value={form.number} onChange={handleChange} required placeholder="Enter Your Mobile" className="flex-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Service</label>
//                     <select name="service" value={form.service} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent">
//                       <option>Forex Premium</option>
//                       <option>Forex Basic</option>
//                       <option>Comex/Gold</option>
//                       <option>Indices</option>
//                       <option>Crypto</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Message *</label>
//                     <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Preferred contact time, WhatsApp number, any queries..." className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                   </div>

//                   <div className="text-center">
//                     <button ref={submitRef} type="submit" disabled={status.loading} className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-95 disabled:opacity-60">
//                       {status.loading ? "Submitting..." : "Submit"}
//                     </button>
//                   </div>

//                   {status.message && (
//                     <div className={`mt-2 text-sm text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
//                       {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
//                       {status.message}
//                     </div>
//                   )}
//                 </form>

//                 <div className="mt-4 text-xs text-[var(--muted)]">
//                   By submitting you agree to receive WhatsApp updates. We respect your privacy.
//                 </div>

//                 <div className="mt-4 border-t pt-3 text-sm">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-[var(--muted)]">Need help?</div>
//                       <div className="font-medium">WhatsApp: +91-XXXXXXXXXX</div>
//                     </div>
//                     <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">
//                       <FaWhatsapp /> Chat
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* small trust box */}
//               <div className="mt-4 p-3 rounded-md bg-gradient-to-r from-[var(--secondary-bg)] to-white border border-[var(--secondary-bg)] flex items-center gap-3">
//                 <FaRocket className="text-[var(--accent)] text-2xl" />
//                 <div>
//                   <div className="text-sm font-semibold">Fast Onboarding</div>
//                   <div className="text-xs opacity-80">Share payment receipt on WhatsApp and join within minutes.</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* NOTES / FAQ */}
//         <div className="mt-8">
//           <div className="rounded-lg p-5 bg-[var(--secondary-bg)] border border-[var(--secondary-bg)]">
//             <h4 className="text-lg font-semibold">Important Notes</h4>
//             <ul className="list-disc list-inside mt-3 text-[var(--muted)]">
//               <li>Signals are educational and do not guarantee profit. Trade with proper risk management.</li>
//               <li>Always respect the stop loss level.</li>
//               <li>Contact support for institutional / API integration.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Floating WhatsApp CTA */}
//       <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="fixed right-5 bottom-5 z-50">
//         <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white text-xl">
//           <FaWhatsapp />
//         </div>
//       </a>
//     </main>
//   );
// }


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
import { GiGoldBar, GiProfit } from "react-icons/gi";

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
    <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen  relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-1 rounded-full mb-2 mt-5">
            <GiGoldBar className="text-sm" />
            <span className="text-sm font-medium ">GOLD PREMIUM SIGNALS</span>
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
          <div className="lg:col-span-7 space-y-12">
            {/* INTRO SECTION */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GiGoldBar className="text-[var(--accent)]" />
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
                  icon={GiProfit}
                />
                <Stat
                  label="Per Trade Target"
                  value={`${animatedStats[1]}-120 pips`}
                  icon={FaChartLine}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Mobile Number *</label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className="w-24 px-3 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none"
                      >
                        <option value="91">🇮🇳 +91</option>
                        <option value="1">🇺🇸 +1</option>
                        <option value="44">🇬🇧 +44</option>
                        <option value="971">🇦🇪 +971</option>
                        <option value="65">🇸🇬 +65</option>
                      </select>
                      <input
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        required
                        placeholder="9876543210"
                        className="flex-1 px-4 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none"
                    >
                      <option>Gold Premium</option>
                      <option>Gold Basic</option>
                      <option>Forex Premium</option>
                      <option>Indices</option>
                      <option>Crypto Signals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Your Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Your trading experience, preferred contact method, any questions..."
                      className="w-full px-4 py-3 rounded-lg border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 outline-none transition-all"
                    />
                  </div>

                  <button
                    ref={submitRef}
                    type="submit"
                    disabled={status.loading}
                    className="w-full px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent)]/90 transition-all flex items-center justify-center gap-2"
                  >
                    {status.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaRocket className="text-sm" />
                        Get Started Now
                      </>
                    )}
                  </button>

                  {status.message && (
                    <div className={`mt-2 text-sm text-center p-3 rounded-lg ${status.success ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                      {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
                      {status.message}
                    </div>
                  )}
                </form>

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