
// import React, { useState, useRef, useEffect } from "react";
// import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

// export default function BasicForex() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "91",
//     number: "",
//     service: "Forex Basic",
//     message: "",
//   });
//   const [status, setStatus] = useState({ loading: false, success: null, message: "" });
//   const submitRef = useRef(null);

//   // On mount, scroll to top of section if query param present? (no auto)
//   useEffect(() => {
//     // any init if needed
//   }, []);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
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
//     if (err) {
//       setStatus({ loading: false, success: false, message: err });
//       return;
//     }

//     setStatus({ loading: true, success: null, message: "Submitting..." });

//     // Simulate API call. Replace with your real endpoint.
//     try {
//       await new Promise((r) => setTimeout(r, 1000));
//       // Example payload:
//       const payload = { ...form, phone: `+${form.countryCode}${form.number}` };
//       // In real usage: await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })
//       console.log("Submitted payload:", payload);

//       setStatus({ loading: false, success: true, message: "Thanks! We'll contact you soon." });
//       setForm({
//         name: "",
//         email: "",
//         countryCode: "91",
//         number: "",
//         service: "Forex Basic",
//         message: "",
//       });
//     } catch (err) {
//       setStatus({ loading: false, success: false, message: "Something went wrong. Please try again." });
//     }

//     // focus submit button for accessibility
//     if (submitRef.current) submitRef.current.focus();
//   }

//   // Replace these PayPal links with your merchant links
//   const payLinks = {
//     monthly: "https://www.paypal.com/paypalme/yourmerchant/200",
//     quarterly: "https://www.paypal.com/paypalme/yourmerchant/500",
//     halfyear: "https://www.paypal.com/paypalme/yourmerchant/1200",
//   };

//   return (
//     <section className="py-12 bg-[var(--bg)] text-[var(--text-color)] mt-12">
//       <div className="max-w-6xl mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
//           {/* Left: content */}
//           <div className="md:col-span-7 order-1 md:order-1">
//             <div className="prose prose-slate dark:prose-invert max-w-none">
//               <p>
//                 Everyday basis <strong>1–2 signals</strong> will be sent.
//               </p>
//               <p>Each signal includes: entry price, target, and stop loss.</p>
//               <p>Typical target: <strong>30–40 pips</strong> per trade.</p>
//               <p>Estimated monthly pipeline: <strong>≈500–600 pips</strong>.</p>
//               <p>Followup alerts will be sent as needed.</p>
//               <p><strong>Mode:</strong> Signals are delivered one-to-one via WhatsApp.</p>

//               <h3 className="mt-6">Things to follow</h3>
//               <ol>
//                 <li>Follow every recommendation you receive from Acordan Research.</li>
//                 <li>Respect the levels: entry, stop loss, and target.</li>
//                 <li>For consistent risk, use a uniform lot size during the plan.</li>
//               </ol>

//               <h3 className="mt-6">Sample signal</h3>
//               <div className="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] rounded-lg p-4 border border-gray-200 dark:border-gray-700">
//                 <p className="font-medium">BUY <span className="uppercase">EUR/USD</span> at <strong>1.1742</strong></p>
//                 <p>TP: <strong>1.1782</strong> (40 pips)</p>
//                 <p>SL: <strong>1.1712</strong> (40 pips)</p>
//               </div>

//               <h3 className="mt-6">Pricing</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
//                 <div className="rounded-lg p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm text-[var(--muted)]">1 Month</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$200</div>
//                   <div className="mt-3">
//                     <a
//                       href={payLinks.monthly}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-block w-full text-center px-3 py-2 rounded-md bg-[var(--accent)] text-white font-semibold hover:opacity-95"
//                     >
//                       Buy 1 Month
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-lg p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm text-[var(--muted)]">3 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$500</div>
//                   <div className="mt-3">
//                     <a
//                       href={payLinks.quarterly}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-block w-full text-center px-3 py-2 rounded-md bg-[var(--accent)] text-white font-semibold hover:opacity-95"
//                     >
//                       Buy 3 Months
//                     </a>
//                   </div>
//                 </div>

//                 <div className="rounded-lg p-4 border border-[var(--secondary-bg)] bg-white dark:bg-[var(--secondary-bg)] shadow-sm">
//                   <div className="text-sm text-[var(--muted)]">6 Months</div>
//                   <div className="text-2xl font-extrabold text-[var(--accent)] mt-1">$1200</div>
//                   <div className="mt-3">
//                     <a
//                       href={payLinks.halfyear}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-block w-full text-center px-3 py-2 rounded-md bg-[var(--accent)] text-white font-semibold hover:opacity-95"
//                     >
//                       Buy 6 Months
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <div className="card bg-soft-primary rounded-lg border border-[var(--secondary-bg)] p-4">
//                   <h4 className="text-xl font-bold">Buy This Service Now</h4>
//                   <p className="mt-2 text-[var(--muted)]">Choose a plan and pay via PayPal. After payment share transaction details on WhatsApp for onboarding.</p>
//                   <div className="mt-4 flex flex-wrap gap-3">
//                     <a href={payLinks.monthly} className="btn-sm inline-block px-3 py-2 bg-[var(--accent)] text-white rounded-md">1 Month - $200</a>
//                     <a href={payLinks.quarterly} className="btn-sm inline-block px-3 py-2 bg-[var(--accent)] text-white rounded-md">3 Months - $500</a>
//                     <a href={payLinks.halfyear} className="btn-sm inline-block px-3 py-2 bg-[var(--accent)] text-white rounded-md">6 Months - $1200</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right: booking form (sticky on desktop) */}
//           <div className="md:col-span-5 order-2 md:order-2">
//             <div
//               className="sticky top-24"

//             >
//               <div className="bg-white dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)] rounded-xl shadow p-6">
//                 <div className="mb-4">
//                   <h4 className="text-2xl font-bold">Book This Service</h4>
//                   <p className="text-sm text-[var(--muted)]">Share your details and our sales expert will contact you shortly.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-3" name="enq">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Name *</label>
//                       <input
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none"
//                         placeholder="Enter Your Name"
//                         type="text"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1">Email *</label>
//                       <input
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none"
//                         placeholder="name@domain.com"
//                         type="email"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Mobile *</label>
//                     <div className="flex gap-2">
//                       <select
//                         name="countryCode"
//                         value={form.countryCode}
//                         onChange={handleChange}
//                         className="w-36 px-2 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent"
//                       >
//                         {/* NOTE: this list is abbreviated — replace/expand as needed */}
//                         <option value="91">INDIA +91</option>
//                         <option value="1">USA +1</option>
//                         <option value="44">UK +44</option>
//                         <option value="61">AUSTRALIA +61</option>
//                         <option value="971">UAE +971</option>
//                         <option value="86">CHINA +86</option>
//                         <option value="92">PAKISTAN +92</option>
//                         <option value="971">UNITED ARAB EMIRATES +971</option>
//                         {/* You can paste the full country list here if you want the whole list */}
//                       </select>

//                       <input
//                         name="number"
//                         value={form.number}
//                         onChange={handleChange}
//                         placeholder="Enter Your Mobile"
//                         required
//                         className="flex-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none"
//                         type="tel"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Service</label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent"
//                     >
//                       <option>Forex Basic</option>
//                       <option>Forex</option>
//                       <option>Comex/Gold</option>
//                       <option>Indices</option>
//                       <option>Crypto</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1">Message *</label>
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       required
//                       rows={4}
//                       placeholder="Tell us something (e.g., preferred time to contact, WhatsApp number, questions...)"
//                       className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-[var(--accent)] outline-none"
//                     />
//                   </div>

//                   <div className="text-center">
//                     <button
//                       ref={submitRef}
//                       type="submit"
//                       disabled={status.loading}
//                       className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:opacity-95 disabled:opacity-60"
//                     >
//                       {status.loading ? "Submitting..." : "Submit"}
//                     </button>
//                   </div>

//                   {status.message && (
//                     <div
//                       className={`mt-2 text-sm text-center ${
//                         status.success ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
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
//                     <a
//                       href="https://wa.me/91XXXXXXXXXX"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white"
//                     >
//                       <FaWhatsapp /> Chat on WhatsApp
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Optional FAQ / Notes area */}
//         <div className="mt-8 bg-transparent">
//           <div className="rounded-lg p-5 bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg)] border border-[var(--secondary-bg)]">
//             <h4 className="text-lg font-semibold">Notes</h4>
//             <ul className="list-disc list-inside mt-3 text-[var(--muted)]">
//               <li>Signals are educational and not a guaranteed profit.</li>
//               <li>Always manage lot size per your risk rules.</li>
//               <li>Contact support for custom institutional plans.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaCheckCircle, FaSignal, FaChartLine, FaShieldAlt, FaRegClock, FaMoneyBillWave } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function BasicForex() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "91",
    number: "",
    service: "Forex Basic",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [activeTab, setActiveTab] = useState("monthly");
  const submitRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
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
    if (err) {
      setStatus({ loading: false, success: false, message: err });
      return;
    }

    setStatus({ loading: true, success: null, message: "Submitting..." });

    try {
      await new Promise((r) => setTimeout(r, 1000));
      const payload = { ...form, phone: `+${form.countryCode}${form.number}` };
      console.log("Submitted payload:", payload);

      setStatus({ loading: false, success: true, message: "Thanks! We'll contact you soon." });
      setForm({
        name: "",
        email: "",
        countryCode: "91",
        number: "",
        service: "Forex Basic",
        message: "",
      });
    } catch (err) {
      setStatus({ loading: false, success: false, message: "Something went wrong. Please try again." });
    }

    if (submitRef.current) submitRef.current.focus();
  }

  const pricingPlans = [
    {
      id: "monthly",
      duration: "1 Month",
      price: "249 $",
      savings: "",
      features: ["1-2 signals daily", "WhatsApp delivery", "Basic support"],
      link: "https://www.paypal.com/paypalme/yourmerchant/200"
    },
    {
      id: "quarterly",
      duration: "3 Months",
      price: "599 $",
      savings: "Save $100",
      features: ["All basic features", "Priority support", "Monthly performance report"],
      link: "https://www.paypal.com/paypalme/yourmerchant/500"
    },
    {
      id: "halfyear",
      duration: "6 Months",
      price: "999$",
      savings: "Save $400",
      features: ["All premium features", "Dedicated account manager", "Weekly market analysis"],
      link: "https://www.paypal.com/paypalme/yourmerchant/1200"
        // link: "https://www.paypal.com/paypalme/yourmerchant/1200"

// link: "https://www.paypal.com/paypalme/yourmerchant/1200"

    }
  ];

  const features = [
    {
      icon: <FaSignal className="text-2xl text-[var(--accent)]" />,
      title: "Daily Signals",
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

  return (
    <section className="py-16 bg-[var(--bg)] text-[var(--text-color)] mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Forex Basic <span className="text-[var(--accent)]">Signals Service</span>
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Professional trading signals delivered directly to your WhatsApp for consistent market opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: content */}
          <div className="lg:col-span-7 space-y-12">
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
                    <strong>Daily signals:</strong> Receive 1–2 high-probability trade setups every trading day
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">2</span>
                  <span>
                    <strong>Clear targets:</strong> Each signal includes precise entry price, take-profit (typically 30–40 pips), and stop-loss levels
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--accent)] text-white text-sm font-bold mt-1 flex-shrink-0">3</span>
                  <span>
                    <strong>Estimated monthly pipeline:</strong> Approximately 500–600 pips potential across all signals
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
                <div className="flex items-start gap-3 p-4 bg-[var(--secondary-bg)] shadow-lg rounded-lg">
                  <FaMoneyBillWave className="text-xl text-[var(--accent)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Uniform Position Sizing</h4>
                    <p className="text-sm opacity-80 mt-1">Maintain consistent lot sizes throughout the subscription period</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold">Sample Signal</h3>
              <div className="mt-4 bg-[var(--secondary-bg)] shadow-lg rounded-xl p-5 border border-gray-200 dark:border-gray-600 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg uppercase text-[var(--accent)]">EUR/USD</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">FX Majors | 15min Chart</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium">
                    BUY
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-[var(--secondary-bg)] p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Entry</p>
                    <p className="font-bold">1.1742</p>
                  </div>
                  <div className="bg-[var(--secondary-bg)] p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Take Profit</p>
                    <p className="font-bold text-green-600">1.1782 (+40 pips)</p>
                  </div>
                  <div className="bg-[var(--secondary-bg)] p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Stop Loss</p>
                    <p className="font-bold text-red-600">1.1712 (-30 pips)</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm opacity-80">
                    <span className="font-medium">Analysis:</span> Price bouncing off key support level with RSI showing bullish divergence. Expected move toward resistance zone.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--secondary-bg)] shadow-lg p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">RK</div>
                    <div>
                      <h4 className="font-medium">Rahul K.</h4>
                      <div className="flex text-yellow-400 text-sm">
                        ★ ★ ★ ★ ★
                      </div>
                    </div>
                  </div>
                  <p className="opacity-80 text-sm">
                    "The Forex Basic signals have transformed my trading. The clear entries and exits make execution simple, and I've seen consistent results month after month."
                  </p>
                </div>
                <div className="bg-[var(--secondary-bg)] shadow-lg p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">SP</div>
                    <div>
                      <h4 className="font-medium">Sarah P.</h4>
                      <div className="flex text-yellow-400 text-sm">
                        ★ ★ ★ ★ ★
                      </div>
                    </div>
                  </div>
                  <p className="opacity-80 text-sm">
                    "As a full-time professional, I appreciate the timely WhatsApp alerts. The 30-40 pip targets are realistic and achievable within my risk parameters."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: pricing and form */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pricing Card */}
            <div className="bg-[var(--secondary-bg)] rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[var(--accent)] p-6 text-white">
                <h2 className="text-2xl font-bold">Pricing Plans</h2>
                <p className="opacity-90">Choose the plan that fits your trading goals</p>
              </div>
              <div className="p-6">
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
                          href={plan.link}
                          target="_blank"
                          rel="noreferrer"
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
            </div>

            {/* Contact Form Card */}
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
                      <option>Forex Basic</option>
                      <option>Forex Premium</option>
                      <option>Comex/Gold</option>
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
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-[var(--secondary-bg)] rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">What trading pairs do you cover?</h3>
                <p className="mt-2 opacity-80">
                  Our Forex Basic service primarily focuses on major currency pairs (EUR/USD, GBP/USD, USD/JPY, etc.) with occasional opportunities in crosses when high-probability setups emerge.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">What time are signals typically sent?</h3>
                <p className="mt-2 opacity-80">
                  Signals are sent during active market hours (London and New York sessions) between 8 AM to 6 PM GMT. You'll typically receive 1-2 signals per trading day.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold">Can I get a trial before subscribing?</h3>
                <p className="mt-2 opacity-80">
                  We occasionally offer free trial signals to new subscribers. Contact our support team via WhatsApp to check current availability.
                </p>
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold">What's your success rate?</h3>
                <p className="mt-2 opacity-80">
                  While past performance is not indicative of future results, our Forex Basic signals have maintained a consistent 65-75% win rate over the past 12 months. Remember that proper risk management is essential regardless of win rate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-[var(--secondary-bg)] shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3">Important Disclaimer</h3>
          <p className="text-sm opacity-80">
            Trading forex carries a high level of risk and may not be suitable for all investors. The signals provided are for educational purposes only and do not constitute financial advice. Past performance is not indicative of future results. You should only trade with money you can afford to lose. Acordan Research is not responsible for any losses incurred from following our signals.
          </p>
        </div>
      </div>
    </section>
  );
}