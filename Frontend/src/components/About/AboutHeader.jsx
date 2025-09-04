import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHeader() {
  return (
    <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-[var(--secondary-bg)] border-b border-gray-200 dark:border-gray-700">
      {/* Background with gradient & image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1920&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/90 to-[var(--bg)]/90"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl font-bold text-[var(--text-color)]">About Us</h1>
        <div className="flex justify-center mt-3 space-x-3 text-sm">
          <Link
            to="/"
            className="text-[var(--accent)] hover:underline"
          >
            Home
          </Link>
          <span className="text-gray-400 dark:text-gray-500">/</span>
          <span className="text-[var(--text-color)]">About Us</span>
        </div>
      </motion.div>

      {/* Decorative wave shape at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="var(--bg)"
          fillOpacity="1"
          d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,101.3C840,117,960,203,1080,229.3C1200,256,1320,224,1380,208L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
