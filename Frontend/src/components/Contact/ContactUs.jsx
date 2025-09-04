import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUsers
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative bg-[#fdfdfd] py-20 overflow-hidden mt-24">
      {/* Background Decorations */}
      <div className="absolute right-10 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute left-12 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute left-12 bottom-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute right-12 bottom-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="flex-1 relative">
          <img
            src="/img/newgirl.jpg"
            alt="Support Team"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
          {/* <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-xl flex items-center p-4 gap-4 w-[250px]">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <FaUsers className="text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">1500+</h3>
              <p className="text-sm text-gray-500">Happy Clients Across India</p>
            </div>
          </div> */}
        </div>

        {/* Right Contact Section */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Connect With <span className="text-red-500">ICAN Global Solution</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We’re here to support you. Reach out to our team for service inquiries, partnership
            opportunities, or any assistance related to our BPO and staffing services.
          </p>

          {/* Email Card */}
          <div className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Email:</h4>
              <p className="text-gray-600 text-sm">info@icanglobalsolution.com</p>
              <p className="text-gray-600 text-sm">hr@icanglobalsolution.com</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Phone:</h4>
              <p className="text-gray-600 text-sm">6262727248</p>
              <p className="text-gray-600 text-sm">8889914547</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Corporate Office:</h4>
              <p className="text-gray-600 text-sm">310 Silver Sanchura Rnt Marg Indore Mp 452010 Landmark Opposite To Davv Next To Silver Mall</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
