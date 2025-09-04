import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#fdfdfd] py-16 relative overflow-hidden">
      {/* Dotted Background Patterns */}
      <div className="absolute right-10 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute left-12 top-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute left-12 bottom-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />
      <div className="absolute right-12 bottom-10 w-24 h-24 bg-[radial-gradient(circle,red_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl px-6 py-10 md:py-16">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Future with <br />
            <span className="text-red-500">ICAN Global Solution</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join one of India's fastest-growing BPO companies and unlock new career opportunities. Whether you're starting fresh or leveling up, we offer the tools, training, and team to support your journey.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-6 py-3 rounded-md font-semibold">
              Explore Careers →
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold shadow-md">
              Apply Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-end">
          <img
            src="/img/girl.jpg"
            alt="ICAN Careers"
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
