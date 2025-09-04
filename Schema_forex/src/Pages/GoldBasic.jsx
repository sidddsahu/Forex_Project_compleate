// // src/components/GoldBasicPage.jsx
// "use client";
// import React, { useState, useRef } from "react";
// import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket } from "react-icons/fa";

// export default function GoldBasicPage() {
//   // Form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "91",
//     number: "",
//     service: "Gold Basic",
//     message: "",
//   });
//   const [status, setStatus] = useState({ loading: false, success: null, message: "" });
//   const submitRef = useRef(null);

//   const payLinks = {
//     monthly: "paypal?amount=200",
//     quarterly: "paypal?amount=500",
//     halfyear: "paypal?amount=800",
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
//         service: "Gold Basic",
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

//   const SampleSignal = ({ pair = "XAU/USD", entry = "1460", tp = "1466", sl = "1455" }) => (
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
//       <div className="mt-3 text-xs opacity-70">Target: <span className="font-medium">60 pips</span></div>
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
//               "url('https://images.unsplash.com/photo-1614176710432-81bdf52f120f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')",
//           }}
//           aria-hidden
//         />
//         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold">Gold Basic</h1>
//           <nav className="text-sm opacity-80 mt-3">
//             Home &nbsp; / &nbsp; Pages &nbsp; / &nbsp; <span className="font-medium">Gold Basic</span>
//           </nav>
//         </div>
//       </header>

//       {/* MAIN GRID */}
//       <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* LEFT: content */}
//           <div className="md:col-span-7">
//             <article className="prose prose-slate dark:prose-invert max-w-none">
//               <p className="mb-1">Everyday basis <strong>1-2 signals</strong> will be sent.</p>
//               <p className="mb-1">Each signal includes: entry price, target and stop loss.</p>
//               <p className="mb-1">Each trade <strong>50-60 pips</strong> target will be given.</p>
//               <p className="mb-1">Expected monthly: <strong>600-800 pips</strong>.</p>
//               <p className="mb-1">Followup alerts will be sent.</p>

//               <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--muted)]">
//                 <span className="font-bold">Mode:</span> Signals are delivered one-to-one directly on WhatsApp.
//               </blockquote>

//               <h3>Things to follow</h3>
//               <ol>
//                 <li>Follow each recommendation that you receive from Acordan Research.</li>
//                 <li>Follow the levels (entry level, stop loss and target).</li>
//                 <li>To ensure risk management, use uniform lot size through the period.</li>
//               </ol>

//               <h3>Sample signal</h3>
//               <div className="grid gap-4 md:grid-cols-1">
//                 <SampleSignal pair="XAU/USD" entry="1460" tp="1466" sl="1455" />
//               </div>

//               <h3 className="mt-6">Performance & Stats</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
//                 <Stat label="Avg monthly pips" value="600-800" accent />
//                 <Stat label="Avg target / trade" value="50-60 pips" />
//                 <Stat label="Delivery" value="WhatsApp Direct" />
//               </div>

//               {/* Small support/resistance chart mock (SVG) */}
//               <h3 className="mt-6">Support / Resistance Snapshot</h3>
//               <div className="rounded-lg border border-[var(--secondary-bg)] p-4 bg-white dark:bg-[var(--secondary-bg)]">
//                 <div className="text-sm opacity-80 mb-3">XAU/USD — 4H chart (snapshot)</div>
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
//                     <line x1="40" x2="380" y1="40" y2="40" stroke="#ef4444" strokeDasharray="6 4" strokeWidth="1" />
//                     <text x="44" y="34" fontSize="10" fill="#ef4444">Resistance</text>
//                     <line x1="40" x2="380" y1="120" y2="120" stroke="#10b981" strokeDasharray="6 4" strokeWidth="1" />
//                     <text x="44" y="134" fontSize="10" fill="#10b981">Support</text>

//                     {/* zigzag price line */}
//                     <polyline
//                       fill="none"
//                       stroke="#374151"
//                       strokeWidth="2"
//                       points="40,100 80,70 120,85 160,50 200,80 240,64 280,90 320,60 360,80"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     {/* markers for suggested entry/TP/SL */}
//                     <circle cx="160" cy="50" r="4" fill="var(--accent)" />
//                     <text x="168" y="54" fontSize="10" fill="var(--text-color)">Entry</text>

//                     <circle cx="200" cy="80" r="4" fill="#10b981" />
//                     <text x="208" y="84" fontSize="10" fill="#10b981">TP</text>

//                     <circle cx="120" cy="85" r="4" fill="#ef4444" />
//                     <text x="128" y="89" fontSize="10" fill="#ef4444">SL</text>
//                   </svg>
//                 </div>
//                 <div className="text-xs opacity-70 mt-2">This is a mock snapshot. Live charts are provided to subscribers in messages and graphs.</div>
//               </div>

//               {/* Pricing block */}
//               <h3 className="mt-6">Pricing</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">1 Month</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$200</div>
//                   <div className="mt-3">
//                     <a href={payLinks.monthly} className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
//                       Buy 1 Month
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">3 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$500</div>
//                   <div className="mt-3">
//                     <a href={payLinks.quarterly} className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
//                       Buy 3 Months
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-xl p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm opacity-80">6 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$800</div>
//                   <div className="mt-3">
//                     <a href={payLinks.halfyear} className="inline-block w-full px-3 py-2 rounded-md bg-[var(--accent)] text-white text-center font-semibold">
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
//                     <a href={payLinks.monthly} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">1 Month - $200</a>
//                     <a href={payLinks.quarterly} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">3 Months - $500</a>
//                     <a href={payLinks.halfyear} className="px-3 py-2 rounded-md bg-[var(--accent)] text-white">6 Months - $800</a>
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
//                       <option>Gold Basic</option>
//                       <option>Forex Premium</option>
//                       <option>Forex Basic</option>
//                       <option>Indices</option>
//                       <option>Crypto</option>
//                     </select>
//                   </div>

//                   <div>
//                                      <label className="block text-sm font-medium mb-1">Message *</label>
//                                      <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Preferred contact time, WhatsApp number, any queries..." className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none" />
//                                    </div>

//                                    <div className="text-center">
//                                      <button ref={submitRef} type="submit" disabled={status.loading} className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-95 disabled:opacity-60">
//                                        {status.loading ? "Submitting..." : "Submit"}
//                                      </button>
//                                    </div>

//                                    {status.message && (
//                                      <div className={`mt-2 text-sm text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
//                                        {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
//                                        {status.message}
//                                      </div>
//                                    )}
//                                  </form>

//                                  <div className="mt-4 text-xs text-[var(--muted)]">
//                                    By submitting you agree to receive WhatsApp updates. We respect your privacy.
//                                  </div>

//                                  <div className="mt-4 border-t pt-3 text-sm">
//                                    <div className="flex items-center justify-between">
//                                      <div>
//                                        <div className="text-[var(--muted)]">Need help?</div>
//                                        <div className="font-medium">WhatsApp: +91-XXXXXXXXXX</div>
//                                      </div>
//                                      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">
//                                        <FaWhatsapp /> Chat
//                                      </a>
//                                    </div>
//                                  </div>
//                                </div>

//                                {/* small trust box */}
//                                <div className="mt-4 p-3 rounded-md bg-gradient-to-r from-[var(--secondary-bg)] to-white border border-[var(--secondary-bg)] flex items-center gap-3">
//                                  <FaRocket className="text-[var(--accent)] text-2xl" />
//                                  <div>
//                                    <div className="text-sm font-semibold">Fast Onboarding</div>
//                                    <div className="text-xs opacity-80">Share payment receipt on WhatsApp and join within minutes.</div>
//                                  </div>
//                                </div>
//                              </div>
//                            </div>
//                          </div>

//                          {/* NOTES / FAQ */}
//                          <div className="mt-8">
//                            <div className="rounded-lg p-5 bg-[var(--secondary-bg)] border border-[var(--secondary-bg)]">
//                              <h4 className="text-lg font-semibold">Important Notes</h4>
//                              <ul className="list-disc list-inside mt-3 text-[var(--muted)]">
//                                <li>Signals are educational and do not guarantee profit. Trade with proper risk management.</li>
//                                <li>Always respect the stop loss level.</li>
//                                <li>Contact support for institutional / API integration.</li>
//                              </ul>
//                            </div>
//                          </div>
//                        </section>

//                        {/* Floating WhatsApp CTA */}
//                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="fixed right-5 bottom-5 z-50">
//                          <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white text-xl">
//                            <FaWhatsapp />
//                          </div>
//                        </a>
//                      </main>
//                    );
//                  }

"use client";
import React, { useState, useRef } from "react";
import { FaWhatsapp, FaCheckCircle, FaChartLine, FaRocket, FaSignal, FaShieldAlt, FaRegClock } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function GoldBasicPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "91",
    number: "",
    service: "Gold Basic",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [activeTab, setActiveTab] = useState("monthly");
  const submitRef = useRef(null);

  const payLinks = {
    monthly: "paypal?amount=200",
    quarterly: "paypal?amount=500",
    halfyear: "paypal?amount=800",
  };

  const features = [
    {
      icon: <FaSignal className="text-2xl text-[var(--accent)]" />,
      title: "Daily Gold Signals",
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
      price: "249 $",
      savings: "",
      features: ["1-2 signals daily", "WhatsApp delivery", "Basic support"],
    },
    {
      id: "quarterly",
      duration: "3 Months",
      price: "599$",
      savings: "Save $100",
      features: ["All basic features", "Priority support", "Monthly performance report"],
    },
    {
      id: "halfyear",
      duration: "6 Months",
      price: "999$",
      savings: "Save $400",
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
        service: "Gold Basic",
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

  const SampleSignal = ({ pair = "XAU/USD", entry = "1460", tp = "1466", sl = "1455" }) => (
    <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm opacity-80">Pair</div>
          <div className="text-lg font-semibold">{pair}</div>
        </div>
        <div className="text-right">
          <div className="text-sm opacity-80">Type</div>
          <div className="text-lg font-semibold text-[var(--accent)]">BUY</div>
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
      <div className="mt-3 text-xs opacity-70">Target: <span className="font-medium">60 pips</span></div>
    </div>
  );

  return (
    <main className="bg-[var(--bg)] text-[var(--text-color)] min-h-screen mt-5">
      {/* HERO SECTION */}
      <header className="relative py-16 bg-gradient-to-b from-[var(--accent)]/10 to-transparent">
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-[var(--accent)]">Gold Basic</span> Signals Service
          </h1>
          <p className="text-xl opacity-80  max-w-2xl mx-auto">
            Professional gold trading signals delivered directly to your WhatsApp
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
                      <p className="opacity-80  mt-1">{feature.description}</p>
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
                    <strong>Daily signals:</strong> Receive 1–2 high-probability gold trade setups every trading day
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">2</span>
                  <span>
                    <strong>Clear targets:</strong> Each signal includes precise entry price, take-profit (typically 50-60 pips), and stop-loss levels
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">3</span>
                  <span>
                    <strong>Estimated monthly pipeline:</strong> Approximately 600-800 pips potential across all signals
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
                    <p className="text-sm opacity-80  mt-1">Consistency is key - follow all recommendations to achieve optimal results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[var(--secondary-bg)] shadow-lg rounded-lg">
                  <GiPayMoney className="text-xl text-[var(--accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Respect Risk Levels</h4>
                    <p className="text-sm opacity-80  mt-1">Always adhere to the provided stop-loss and take-profit levels</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Sample Signal</h3>
              <div className="mt-4">
                <SampleSignal pair="XAU/USD" entry="1460" tp="1466" sl="1455" />
              </div>

              <h3 className="mt-8 text-xl font-semibold">Performance & Stats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                <Stat label="Avg monthly pips" value="600-800" accent />
                <Stat label="Avg target / trade" value="50-60 pips" />
                <Stat label="Delivery" value="WhatsApp Direct" />
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
                          <div key={index} className="flex items-center gap-2 opacity-80 ">
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
                  <form onSubmit={handleSubmit} className="space-y-4" name="enq">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
                        placeholder="name@example.com"
                        type="email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <div className="flex gap-3">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="w-24 px-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                        >
                          <option value="91">+91 IND</option>
                          <option value="1">+1 USA</option>
                          <option value="44">+44 UK</option>
                          <option value="61">+61 AUS</option>
                          <option value="971">+971 UAE</option>
                        </select>
                        <input
                          name="number"
                          value={form.number}
                          onChange={handleChange}
                          placeholder="9876543210"
                          required
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                      >
                        <option>Gold Basic</option>
                        <option>Forex Premium</option>
                        <option>Forex Basic</option>
                        <option>Indices</option>
                        <option>Crypto</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Your Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your trading experience or any questions..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <button
                      ref={submitRef}
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-blue-600 text-white font-semibold shadow-md transition-colors disabled:opacity-70 flex items-center justify-center"
                    >
                      {status.loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    {status.message && (
                      <div
                        className={`p-3 rounded-lg text-center ${
                          status.success ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300" : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                        }`}
                      >
                        {status.success ? <FaCheckCircle className="inline mr-2" /> : null}
                        {status.message}
                      </div>
                    )}
                  </form>

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
                  <div className="text-sm opacity-80 ">Get started within minutes after payment</div>
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
                <h3 className="text-lg font-semibold">What gold pairs do you cover?</h3>
                <p className="mt-2 opacity-80 ">
                  We primarily focus on XAU/USD (Gold vs US Dollar) with occasional opportunities in other gold crosses when high-probability setups emerge.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">What time are signals typically sent?</h3>
                <p className="mt-2 opacity-80 ">
                  Signals are sent during active market hours (London and New York sessions) between 8 AM to 6 PM GMT when gold liquidity is highest.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">Can I get a trial before subscribing?</h3>
                <p className="mt-2 opacity-80 ">
                  We occasionally offer free trial signals to new subscribers. Contact our support team via WhatsApp to check current availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-[var(--secondary-bg)] shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3">Important Disclaimer</h3>
          <p className="text-sm opacity-80 ">
            Trading gold carries a high level of risk and may not be suitable for all investors. The signals provided are for educational purposes only and do not constitute financial advice. Past performance is not indicative of future results. You should only trade with money you can afford to lose. Acordan Research is not responsible for any losses incurred from following our signals.
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