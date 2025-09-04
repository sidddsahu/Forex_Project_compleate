// // src/components/IndicesBasicPage.jsx
// "use client";
// import React, { useState, useRef } from "react";
// import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket } from "react-icons/fa";

// export default function IndicesBasicPage() {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "91",
//     number: "",
//     service: "Indices Basic",
//     message: "",
//   });
//   const [status, setStatus] = useState({ loading: false, success: null, message: "" });
//   const submitRef = useRef(null);

//   const payLinks = {
//     monthly: "paypal?amount=200",
//     quarterly: "paypal?amount=500",
//     halfyear: "paypal?amount=1200",
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
//         service: "Indices Basic",
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

//   const SampleSignal = ({ index = "US30", entry = "24350", tp = "24400", sl = "24300", type = "BUY" }) => (
//     <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl p-4 shadow-sm">
//       <div className="flex items-center justify-between">
//         <div>
//           <div className="text-sm opacity-80">Index</div>
//           <div className="text-lg font-semibold">{index} (DOW JONES)</div>
//         </div>
//         <div className="text-right">
//           <div className="text-sm opacity-80">Type</div>
//           <div className={`text-lg font-semibold ${type === "BUY" ? "text-[var(--accent)]" : "text-red-500"}`}>{type}</div>
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
//       <div className="mt-3 text-xs opacity-70">Target: <span className="font-medium">50 pips</span></div>
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
//           <h1 className="text-4xl md:text-5xl font-extrabold">Indices Basic</h1>
//           <nav className="text-sm opacity-80 mt-3">
//             Home &nbsp; / &nbsp; Pages &nbsp; / &nbsp; <span className="font-medium">Indices Basic</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* Left Content Column */}
//           <div className="md:col-span-7">
//             <article className="prose prose-slate dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-bold mb-4">Indices Basic Signals Service</h2>

//               <p className="mb-3">Everyday basis <strong>1-2 signals</strong> will be sent directly to your WhatsApp.</p>
//               <p className="mb-3">Each signal includes complete trade details: <strong>entry price, target and stop loss</strong>.</p>
//               <p className="mb-3">Each trade comes with <strong>50 pips</strong> target range.</p>
//               <p className="mb-3">Expected monthly performance: <strong>500-600 pips</strong>.</p>
//               <p className="mb-3">Regular <strong>follow-up alerts</strong> to manage open positions.</p>

//               <div className="bg-[var(--secondary-bg)] p-4 rounded-lg border-l-4 border-[var(--accent)] my-6">
//                 <p className="font-semibold">Delivery Method:</p>
//                 <p>Signals are delivered one-to-one directly on WhatsApp after purchase confirmation.</p>
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">How To Follow Our Signals</h3>
//               <ol className="list-decimal pl-5 space-y-2">
//                 <li>Follow each recommendation that you receive from Acordan Research</li>
//                 <li>Strictly follow the provided levels (entry, stop loss and target)</li>
//                 <li>Use uniform lot size throughout for proper risk management</li>
//               </ol>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Sample Indices Signals</h3>
//               <div className="grid gap-4">
//                 <SampleSignal index="US30" entry="24350" tp="24400" sl="24300" type="BUY" />
//                 <SampleSignal index="TECH100" entry="11050" tp="11010" sl="11080" type="SELL" />
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Performance Metrics</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                 <Stat label="Monthly Pips" value="500-600" accent />
//                 <Stat label="Per Trade Target" value="50 pips" />
//                 <Stat label="Signal Frequency" value="1-2 daily" />
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Market Coverage</h3>
//               <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 mb-6">
//                 <div className="text-sm opacity-80 mb-3">We cover major global indices including:</div>
//                 <ul className="list-disc pl-5 space-y-1">
//                   <li>DOW JONES (US30)</li>
//                   <li>NASDAQ (TECH100)</li>
//                   <li>DAX (GER30)</li>
//                   <li>S&P 500 (SPX500)</li>
//                 </ul>
//                 <div className="text-xs opacity-70 mt-2">Focus on high-probability trades with clear risk-reward ratios.</div>
//               </div>

//               <h3 className="text-xl font-semibold mt-8 mb-4">Subscription Plans</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">1 Month</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$200</div>
//                   <div className="mt-3">
//                     <a href={payLinks.monthly} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">3 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$500</div>
//                   <p className="text-xs mt-1 opacity-70">Save $100</p>
//                   <div className="mt-3">
//                     <a href={payLinks.quarterly} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--secondary-bg)] rounded-lg border border-[var(--secondary-bg)] p-4 shadow-sm">
//                   <div className="text-sm opacity-80">6 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$1200</div>
//                   <p className="text-xs mt-1 opacity-70">Save $600</p>
//                   <div className="mt-3">
//                     <a href={payLinks.halfyear} className="block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold hover:opacity-90 transition">
//                       Buy Now
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-[var(--secondary-bg)] rounded-lg p-4 border border-[var(--secondary-bg)]">
//                 <h4 className="text-lg font-bold mb-2">Ready to Subscribe?</h4>
//                 <p className="text-sm opacity-80 mb-4">Choose your plan and start receiving indices signals today.</p>
//                 <div className="flex flex-wrap gap-3">
//                   <a href={payLinks.monthly} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">1 Month - $200</a>
//                   <a href={payLinks.quarterly} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">3 Months - $500</a>
//                   <a href={payLinks.halfyear} className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">6 Months - $1200</a>
//                 </div>
//               </div>

//               {/* Indices Premium Section */}
//               <div className="mt-12 pt-8 border-t border-[var(--secondary-bg)]">
//                 <h2 className="text-2xl font-bold mb-4">Indices Premium Service</h2>
//                 <p className="mb-3">Upgrade to our premium service for more signals and features:</p>
//                 <ul className="list-disc pl-5 space-y-2 mb-4">
//                   <li><strong>2-3 signals daily</strong> with 70-100 pips targets (extended to 120 pips)</li>
//                   <li>Expected <strong>800-1000 pips monthly</strong></li>
//                   <li>Both <strong>swing and scalping</strong> opportunities</li>
//                   <li>Coverage of <strong>US30, TECH100, and GER30</strong></li>
//                   <li>Major market updates (FED, NFP, FOMC, CPI, etc.)</li>
//                 </ul>
//                 <div className="bg-[var(--secondary-bg)] rounded-lg p-4 border border-[var(--secondary-bg)]">
//                   <h4 className="text-lg font-bold mb-2">Premium Pricing</h4>
//                   <div className="flex flex-wrap gap-3">
//                     <a href="paypal?amount=500" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">1 Month - $500</a>
//                     <a href="paypal?amount=1200" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">3 Months - $1200</a>
//                     <a href="paypal?amount=2000" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium">6 Months - $2000</a>
//                   </div>
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

//                                     <div>
//                                       <label className="block text-sm font-medium mb-1">Service</label>
//                                       <select name="service" value={form.service} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent">
//                                         <option>Forex Premium</option>
//                                         <option>Forex Basic</option>
//                                         <option>Comex/Gold</option>
//                                         <option>Indices</option>
//                                         <option>Crypto</option>
//                                       </select>
//                                     </div>

//                                     <div>
//                                       <label className="block text-sm font-medium mb-1">Message *</label>
//                                       <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Preferred contact time, WhatsApp number, any queries..." className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                                     </div>

//                                     <div className="text-center">
//                                       <button ref={submitRef} type="submit" disabled={status.loading} className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-95 disabled:opacity-60">
//                                         {status.loading ? "Submitting..." : "Submit"}
//                                       </button>
//                                     </div>

//                                     {status.message && (
//                                       <div className={`mt-2 text-sm text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
//                                         {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
//                                         {status.message}
//                                       </div>
//                                     )}
//                                   </form>

//                                   <div className="mt-4 text-xs text-[var(--muted)]">
//                                     By submitting you agree to receive WhatsApp updates. We respect your privacy.
//                                   </div>

//                                   <div className="mt-4 border-t pt-3 text-sm">
//                                     <div className="flex items-center justify-between">
//                                       <div>
//                                         <div className="text-[var(--muted)]">Need help?</div>
//                                         <div className="font-medium">WhatsApp: +91-XXXXXXXXXX</div>
//                                       </div>
//                                       <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">
//                                         <FaWhatsapp /> Chat
//                                       </a>
//                                     </div>
//                                   </div>
//                                 </div>

//                                 {/* small trust box */}
//                                 <div className="mt-4 p-3 rounded-md bg-gradient-to-r from-[var(--secondary-bg)] to-white border border-[var(--secondary-bg)] flex items-center gap-3">
//                                   <FaRocket className="text-[var(--accent)] text-2xl" />
//                                   <div>
//                                     <div className="text-sm font-semibold">Fast Onboarding</div>
//                                     <div className="text-xs opacity-80">Share payment receipt on WhatsApp and join within minutes.</div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* NOTES / FAQ */}
//                           <div className="mt-8">
//                             <div className="rounded-lg p-5 bg-[var(--secondary-bg)] border border-[var(--secondary-bg)]">
//                               <h4 className="text-lg font-semibold">Important Notes</h4>
//                               <ul className="list-disc list-inside mt-3 text-[var(--muted)]">
//                                 <li>Signals are educational and do not guarantee profit. Trade with proper risk management.</li>
//                                 <li>Always respect the stop loss level.</li>
//                                 <li>Contact support for institutional / API integration.</li>
//                               </ul>
//                             </div>
//                           </div>
//                         </section>

//                         {/* Floating WhatsApp CTA */}
//                         <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="fixed right-5 bottom-5 z-50">
//                           <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white text-xl">
//                             <FaWhatsapp />
//                           </div>
//                         </a>
//                       </main>
//                     );
//                   }
                  "use client";
import React, { useState, useRef } from "react";
import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket, FaSignal, FaShieldAlt, FaRegClock } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import ContactForm from "../components/Home/ContactForm";

export default function IndicesBasicPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "91",
    number: "",
    service: "Indices Basic",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [activeTab, setActiveTab] = useState("monthly");
  const submitRef = useRef(null);

  const payLinks = {
    monthly: "paypal?amount=200",
    quarterly: "paypal?amount=500",
    halfyear: "paypal?amount=1200",
  };

  const features = [
    {
      icon: <FaSignal className="text-2xl text-[var(--accent)]" />,
      title: "Daily Indices Signals",
      description: "1-2 high-probability trade setups delivered daily"
    },
    {
      icon: <FaChartLine className="text-2xl text-[var(--accent)]" />,
      title: "Clear Targets",
      description: "Precise entry, take-profit and stop-loss levels"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[var(--accent)]" />,
      title: "Risk Management",
      description: "1:1 risk-reward ratio on all trades"
    },
    {
      icon: <FaRegClock className="text-2xl text-[var(--accent)]" />,
      title: "Timely Alerts",
      description: "Real-time notifications via WhatsApp"
    }
  ];

  const pricingPlans = [
    {
      id: "monthly",
      duration: "1 Month",
      price: "$249",
      savings: "",
      features: ["1-2 signals daily", "WhatsApp delivery", "Basic support"],
    },
    {
      id: "quarterly",
      duration: "3 Months",
      price: "$599",
      savings: "Save $100",
      features: ["All basic features", "Priority support", "Monthly performance report"],
    },
    {
      id: "halfyear",
      duration: "6 Months",
      price: "$999",
      savings: "Save $600",
      features: ["All premium features", "Dedicated account manager", "Weekly market analysis"],
    }
  ];

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
        service: "Indices Basic",
        message: "",
      });
    } catch {
      setStatus({ loading: false, success: false, message: "Something went wrong. Try again." });
    }
    if (submitRef.current) submitRef.current.focus();
  }

  const Stat = ({ label, value, accent }) => (
    <div className="flex flex-col items-start">
      <div className={`text-2xl md:text-3xl font-extrabold ${accent ? "text-[var(--accent)]" : ""}`}>{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );

  const SampleSignal = ({ index = "US30", entry = "24350", tp = "24400", sl = "24300", type = "BUY" }) => (
    <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm opacity-80">Index</div>
          <div className="text-lg font-semibold">{index}</div>
        </div>
        <div className="text-right">
          <div className="text-sm opacity-80">Type</div>
          <div className={`text-lg font-semibold ${type === "BUY" ? "text-[var(--accent)]" : "text-red-500"}`}>{type}</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3 text-sm">
        <div>
          <div className="opacity-70">Entry</div>
          <div className="font-medium">{entry}</div>
        </div>
        <div>
          <div className="opacity-70">TP</div>
          <div className="font-medium">{tp}</div>
        </div>
        <div>
          <div className="opacity-70">SL</div>
          <div className="font-medium">{sl}</div>
        </div>
      </div>
      <div className="mt-3 text-xs opacity-70">Target: <span className="font-medium">50 pips</span></div>
    </div>
  );

  return (
    <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen mt-5">
      {/* HERO SECTION */}
      <header className="relative py-16 bg-gradient-to-b from-[var(--accent)]/10 to-transparent">
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-[var(--accent)]">Indices Basic</span> Signals Service
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Professional indices trading signals delivered directly to your WhatsApp
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Features Grid */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaSignal className="text-[var(--accent)]" />
                Service Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="opacity-80 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Service Details</h2>
              <div className="space-y-4">
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">1</span>
                  <span>
                    <strong>Daily signals:</strong> Receive 1–2 high-probability indices trade setups every trading day
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">2</span>
                  <span>
                    <strong>Clear targets:</strong> Each signal includes precise entry price, take-profit (typically 50 pips), and stop-loss levels
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">3</span>
                  <span>
                    <strong>Estimated monthly pipeline:</strong> Approximately 500-600 pips potential across all signals
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">4</span>
                  <span>
                    <strong>Delivery method:</strong> Signals sent directly to your WhatsApp for instant access
                  </span>
                </p>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Best Practices for Success</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[var(--secondary-bg)] shadow-lg rounded-lg">
                  <GiReceiveMoney className="text-xl text-[var(--accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Follow Every Signal</h4>
                    <p className="text-sm opacity-80 mt-1">Consistency is key - follow all recommendations to achieve optimal results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[var(--secondary-bg)] shadow-lg rounded-lg">
                  <GiPayMoney className="text-xl text-[var(--accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Respect Risk Levels</h4>
                    <p className="text-sm opacity-80 mt-1">Always adhere to the provided stop-loss and take-profit levels</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Sample Signals</h3>
              <div className="mt-4 grid gap-4">
                <SampleSignal index="US30" entry="24350" tp="24400" sl="24300" type="BUY" />
                <SampleSignal index="TECH100" entry="11050" tp="11010" sl="11080" type="SELL" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">Performance & Stats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                <Stat label="Avg monthly pips" value="500-600" accent />
                <Stat label="Avg target / trade" value="50 pips" />
                <Stat label="Signal frequency" value="1-2 daily" />
              </div>
            </div>


          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-5">
                {/* Pricing Section */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setActiveTab(plan.id)}
                    className={`flex-1 py-3 font-medium text-sm ${activeTab === plan.id ? 'text-[var(--accent)] border-b-2 border-[var(--accent)]' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {plan.duration}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                {pricingPlans.map((plan) => (
                  <div key={plan.id} className={`${activeTab === plan.id ? 'block' : 'hidden'}`}>
                    <div className="text-center">
                      <div className="text-4xl font-bold">{plan.price}</div>
                      {plan.savings && (
                        <div className="mt-1 text-sm text-green-600 font-medium">{plan.savings}</div>
                      )}
                      <div className="mt-6 space-y-3">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 opacity-80">
                            <FaCheckCircle className="text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={payLinks[plan.id]}
                        className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-blue-600 text-white font-semibold shadow-md transition-colors"
                      >
                        <RiSecurePaymentFill className="mr-2" />
                        Subscribe Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-6">
              <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[var(--accent)] p-6 text-white">
                  <h2 className="text-2xl font-bold">Get Started Today</h2>
                  <p className="opacity-90">Have questions? Our team is ready to assist you</p>
                </div>
                <div className="p-6">
                  <ContactForm/>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Need immediate assistance?</p>
                        <p className="font-medium">+91-XXXXXXXXXX</p>
                      </div>
                      <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium shadow-sm transition-colors"
                      >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-4 p-4 rounded-lg bg-[var(--secondary-bg)] shadow-lg border border-gray-200 dark:border-gray-600 flex items-center gap-3">
                <FaRocket className="text-[var(--accent)] text-2xl" />
                <div>
                  <div className="font-semibold">Fast Onboarding</div>
                  <div className="text-sm opacity-80">Get started within minutes after payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-[var(--secondary-bg)] rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">Which indices do you cover?</h3>
                <p className="mt-2 opacity-80">
                  We primarily focus on major global indices including US30 (Dow Jones), TECH100 (Nasdaq), GER30 (DAX), and SPX500 (S&P 500).
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">What time are signals typically sent?</h3>
                <p className="mt-2 opacity-80">
                  Signals are sent during active market hours (New York and London sessions) between 8 AM to 6 PM GMT when liquidity is highest.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">Can I get a trial before subscribing?</h3>
                <p className="mt-2 opacity-80">
                  We occasionally offer free trial signals to new subscribers. Contact our support team via WhatsApp to check current availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-[var(--secondary-bg)] shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3">Important Disclaimer</h3>
          <p className="text-sm opacity-80">
            Trading indices carries a high level of risk and may not be suitable for all investors. The signals provided are for educational purposes only and do not constitute financial advice. Past performance is not indicative of future results. You should only trade with money you can afford to lose. Acordan Research is not responsible for any losses incurred from following our signals.
          </p>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="fixed right-5 bottom-5 z-50">
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white text-xl hover:bg-green-600 transition-colors">
          <FaWhatsapp />
        </div>
      </a>
    </main>
  );
}