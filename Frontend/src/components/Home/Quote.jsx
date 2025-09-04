// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoClose } from "react-icons/io5";

// export default function QuotePopup() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 10000); // 10 seconds delay
//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => setIsOpen(false);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-[var(--bg)] text-[var(--text-color)] rounded-xl shadow-2xl w-full max-w-lg p-6 relative"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-[var(--text-color)] hover:text-[var(--accent)]"
//               onClick={closePopup}
//             >
//               <IoClose size={28} />
//             </button>

//             <h2 className="text-2xl font-bold text-center mb-6">
//               Get A <span className="text-[var(--accent)]">Quote</span>
//             </h2>

//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Your Name *"
//                   className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] bg-[var(--secondary-bg)]"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email *"
//                   className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] bg-[var(--secondary-bg)]"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] bg-[var(--secondary-bg)]">
//                   <option>Forex</option>
//                   <option>Comex/Gold</option>
//                   <option>Indices</option>
//                   <option>Crypto</option>
//                 </select>
//                 <input
//                   type="tel"
//                   placeholder="Enter Your Mobile *"
//                   className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] bg-[var(--secondary-bg)]"
//                   required
//                 />
//               </div>

//               <textarea
//                 placeholder="Message *"
//                 className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--accent)] bg-[var(--secondary-bg)]"
//                 rows="3"
//                 required
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition"
//               >
//                 Submit
//               </button>
//             </form>

//             <p className="text-center text-sm mt-4 cursor-pointer hover:text-[var(--accent)]">
//               Don't show this popup again!
//             </p>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Added
import ContactForm from "./ContactForm";

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // ✅ Captcha state
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("⚠️ Please verify reCAPTCHA before submitting!");
      return;
    }

    // ✅ Collect form data
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    console.log("Form submitted:", payload, "Captcha:", captchaToken);

    // Example: send to backend API
    // await fetch("/api/quote", { method: "POST", body: JSON.stringify({ ...payload, captchaToken }) });

    // Reset
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
    e.target.reset();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[var(--bg)] text-[var(--text-color)] rounded-xl shadow-2xl w-full max-w-lg p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-[var(--text-color)] hover:text-[var(--accent)]"
              onClick={closePopup}
            >
              <IoClose size={28} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Get A <span className="text-[var(--accent)]">Quote</span>
            </h2>

           <div className="h-96 overflow-y-auto ">
                        <ContactForm/>
                      </div>

            <p className="text-center text-sm mt-4 cursor-pointer hover:text-[var(--accent)]">
              Don't show this popup again!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
