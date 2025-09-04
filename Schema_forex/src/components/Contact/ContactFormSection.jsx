import React from "react";

const ContactFormSection = () => {
  return (
    <section className="relative bg-[#fdfdfd] py-20 overflow-hidden mt-24">
      {/* Top Decoration Wave */}
      <div className="absolute right-10 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute left-12 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Form Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's Build Your Growth Journey <br />
            With <span className="text-red-500">ICAN Global Solution</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you're looking for BPO support, staffing solutions, or business consultancy,
            we're here to guide and assist you. Reach out to our team and let’s start a conversation.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white w-full py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
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
