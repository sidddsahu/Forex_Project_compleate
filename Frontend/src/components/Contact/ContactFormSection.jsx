import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContact, resetContactState } from "../../redux/fetures/contactSlice";

const ContactFormSection = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  // ✅ Reset state after success/error
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(resetContactState());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContact(formData));
  };

  return (
    <section className="relative bg-[#fdfdfd] py-20 overflow-hidden mt-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Form Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s Build Your Growth Journey <br />
            With <span className="text-red-500">ICAN Global Solution</span>
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Phone Number"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Interested In"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white w-full py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* ✅ Show Status Messages */}
          {success && <p className="text-green-600">Message sent successfully ✅</p>}
          {error && <p className="text-red-600">Failed: {error}</p>}
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/img/5114865.jpg"
            alt="Support Executive"
            className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
