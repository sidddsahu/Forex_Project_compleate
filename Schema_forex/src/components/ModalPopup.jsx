
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Added

const ModalPopup = ({ buttonText = "Open Modal" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [captchaToken, setCaptchaToken] = useState(null); // ✅ Captcha state
  const recaptchaRef = useRef(null);

  // ✅ Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("⚠️ Please verify reCAPTCHA before submitting!");
      return;
    }

    console.log("Form Data:", form, "Captcha:", captchaToken);

    // ✅ Example API Call
    // await fetch("/api/send-message", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...form, captchaToken }),
    // });

    // Reset captcha + close modal
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
    setIsOpen(false);
    setForm({ name: "", number: "", message: "" });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="shadow-lg font-medium transition-all duration-300 px-6 py-3 rounded-full bg-[var(--accent)] text-white hover:scale-105"
      >
        {buttonText}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex mt-24 items-center justify-center z-[99999]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Content */}
          <div
            className="relative w-full max-w-lg p-6 rounded-2xl shadow-2xl z-[100000] transition-all duration-300"
            style={{ background: "var(--bg)", color: "var(--text-color)" }}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-4 text-2xl font-bold transition hover:scale-110"
              style={{ color: "var(--text-color)" }}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-left font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition border focus:ring-2"
                  style={{
                    background: "var(--secondary-bg)",
                    color: "var(--text-color)",
                    borderColor: "transparent",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm text-left font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition border focus:ring-2"
                  style={{
                    background: "var(--secondary-bg)",
                    color: "var(--text-color)",
                    borderColor: "transparent",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-left font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none transition border focus:ring-2"
                  style={{
                    background: "var(--secondary-bg)",
                    color: "var(--text-color)",
                    borderColor: "transparent",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                  }}
                ></textarea>
              </div>

              {/* ✅ reCAPTCHA */}
              <div className="my-3 flex justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcxaLQrAAAAABOF8FDl5W6fedjvzepzO9uKj21G" // 🔑 Replace with your site key
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!captchaToken}
                className={`w-full rounded-lg py-3 font-medium transition-all shadow-md hover:shadow-lg ${
                  captchaToken
                    ? "bg-[var(--accent)] text-white"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
