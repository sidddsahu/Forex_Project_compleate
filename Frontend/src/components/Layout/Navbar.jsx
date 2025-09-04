
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   SunIcon,
//   MoonIcon,
//   Bars3Icon,
//   XMarkIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@heroicons/react/24/solid';
// import {
//   FaChartLine,
//   FaCoins,
//   FaDollarSign,
//   FaHome,
//   FaInfoCircle,
//   FaBriefcase,
//   FaPhoneAlt,
//   FaNewspaper,
// } from 'react-icons/fa';

// /**
//  * Full fixed Navbar (desktop + mobile)
//  * - paste/replace your current Header component with this file
//  * - uses Tailwind and your CSS vars: --bg, --text-color, --accent, --secondary-bg
//  */

// const logoLight = 'https://dummyimage.com/160x40/4f46e5/ffffff&text=Forex+Trading';
// const logoDark = 'https://dummyimage.com/160x40/f1f5f9/4f46e5&text=Forex+Trading';

// export default function Header() {
//   const [isDark, setIsDark] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Desktop dropdown controller (services)
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [subDropdownOpen, setSubDropdownOpen] = useState(null);

//   // Mobile accordions
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [mobileForexOpen, setMobileForexOpen] = useState(false);
//   const [mobileComexOpen, setMobileComexOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setIsDark(document.documentElement.classList.contains('dark'));
//   }, []);

//   // Close desktop dropdown when click outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//         setSubDropdownOpen(null);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle('dark');
//     setIsDark(prev => !prev);
//   };

//   const handleLinkClick = () => {
//     // 🔹 Scroll to top on navigation
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     // Close everything when navigating on mobile
//     setMenuOpen(false);
//     setMobileServicesOpen(false);
//     setMobileForexOpen(false);
//     setMobileComexOpen(false);
//     // also reset desktop dropdowns (safe)
//     setDropdownOpen(false);
//     setSubDropdownOpen(null);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] shadow-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
//           <img
//             src="img/slider.png"
//             alt="Logo"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm text-[var(--text-color)]">
//           <Link to="/" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//             <FaHome className="inline" /> HOME
//           </Link>

//           <Link to="/about" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//             <FaInfoCircle className="inline" /> ABOUT US
//           </Link>

//           {/* Services Dropdown (desktop) */}
//           <div
//             ref={dropdownRef}
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => { setDropdownOpen(false); setSubDropdownOpen(null); }}
//           >
//             <button
//               aria-expanded={dropdownOpen}
//               onClick={() => setDropdownOpen(prev => !prev)}
//               className="flex items-center gap-2 hover:text-[var(--accent)] transition font-semibold"
//             >
//               <FaChartLine /> SERVICES <ChevronDownIcon className="w-4 h-4" />
//             </button>

//             {dropdownOpen && (
//               <div className="absolute left-0  w-72 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md z-1000">
//                 {/* Forex (has sub) */}
//                 <div
//                   className="relative group"
//                   onMouseEnter={() => setSubDropdownOpen('forex')}
//                   onMouseLeave={() => setSubDropdownOpen(null)}
//                 >
//                   <div className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-[var(--secondary-bg)]">
//                     <FaDollarSign className="text-[var(--accent)]" /> <span className="flex-1">Forex</span>
//                     <ChevronRightIcon className="w-4 h-4 text-gray-500" />
//                   </div>

//                   {subDropdownOpen === 'forex' && (
//                     <div className="absolute top-0 left-full  w-60 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md">
//                       <Link to="/basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
//                         <FaDollarSign /> Basic Forex
//                       </Link>
//                       <Link to="/premium" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
//                         <FaDollarSign /> Premium Forex
//                       </Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Comex Gold (has sub) */}
//                 <div
//                   className="relative group"
//                   onMouseEnter={() => setSubDropdownOpen('comex')}
//                   onMouseLeave={() => setSubDropdownOpen(null)}
//                 >
//                   <div className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-[var(--secondary-bg)]">
//                     <FaCoins className="text-[var(--accent)]" /> <span className="flex-1">Comex Gold</span>
//                     <ChevronRightIcon className="w-4 h-4 text-gray-500" />
//                   </div>
//                   {subDropdownOpen === 'comex' && (
//                     <div className="absolute top-0 left-full  w-60 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md">
//                       <Link to="/gold-basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
//                         <FaCoins /> Basic Comex/Gold
//                       </Link>
//                       <Link to="/gold-premium" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
//                         <FaCoins /> Premium Comex/Gold
//                       </Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Indices (single) */}
//                 <Link to="/indice-basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-3 hover:bg-[var(--secondary-bg)]">
//                   <FaChartLine className="text-[var(--accent)]" /> Indices
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link to="/learning" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//              <FaNewspaper />LEARNING
//            </Link>

//           <Link to="/portfolio" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//             <FaBriefcase />  PORTFOLIO
//           </Link>

//           <Link to="/career" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//             <FaBriefcase /> CAREER
//           </Link>

//           <Link to="/contact" className="flex items-center gap-2 hover:text-[var(--accent)] transition" onClick={handleLinkClick}>
//             <FaPhoneAlt /> CONTACT US
//           </Link>
//         </nav>

//         {/* Right side: theme toggle + mobile menu button */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition"
//             aria-label="Toggle theme"
//           >
//             {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
//           </button>

//           <button
//             className="md:hidden p-2 rounded focus:outline-none"
//             onClick={() => setMenuOpen(prev => !prev)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <XMarkIcon className="w-6 h-6 text-[var(--text-color)]" /> : <Bars3Icon className="w-6 h-6 text-[var(--text-color)]" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-[var(--bg)] border-t border-gray-100 dark:border-neutral-800`}>
//         <div className="px-6 py-4 space-y-2 font-semibold text-[var(--text-color)]">
//           <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
//             <FaHome /> HOME
//           </Link>

//           <Link to="/about" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
//             <FaInfoCircle /> ABOUT US
//           </Link>

//           {/* Mobile Services accordion */}
//           <div>
//             <button
//               onClick={() => { setMobileServicesOpen(prev => !prev); if (mobileServicesOpen) { setMobileForexOpen(false); setMobileComexOpen(false); } }}
//               className="w-full flex items-center justify-between gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
//               aria-expanded={mobileServicesOpen}
//             >
//               <div className="flex items-center gap-3">
//                 <FaChartLine /> SERVICES
//               </div>
//               <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
//             </button>

//             {mobileServicesOpen && (
//               <div className="pl-4 mt-2 space-y-1">
//                 {/* Forex mobile accordion */}
//                 <div>
//                   <button
//                     onClick={() => setMobileForexOpen(prev => !prev)}
//                     className="w-full flex items-center justify-between px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
//                     aria-expanded={mobileForexOpen}
//                   >
//                     <div className="flex items-center gap-3">
//                       <FaDollarSign /> Forex
//                     </div>
//                     <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileForexOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {mobileForexOpen && (
//                     <div className="pl-4 mt-1 space-y-1">
//                       <Link to="/basic" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Basic Forex</Link>
//                       <Link to="/premium" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Premium Forex</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Comex Gold mobile accordion */}
//                 <div>
//                   <button
//                     onClick={() => setMobileComexOpen(prev => !prev)}
//                     className="w-full flex items-center justify-between px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
//                     aria-expanded={mobileComexOpen}
//                   >
//                     <div className="flex items-center gap-3">
//                       <FaCoins /> Comex Gold
//                     </div>
//                     <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileComexOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {mobileComexOpen && (
//                     <div className="pl-4 mt-1 space-y-1">
//                       <Link to="/gold-basic" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Basic Comex/Gold</Link>
//                       <Link to="/gold-premium" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Premium Comex/Gold</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Indices (mobile link) */}
//                 <Link to="/indices" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
//                   <FaChartLine /> Indices
//                 </Link>
//               </div>
//             )}
//           </div>

//          <Link
//   to="/learning"
//   onClick={handleLinkClick}
//   className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
// >
//   <FaNewspaper /> LEARNING
// </Link>

// <Link
//   to="/portfolio"
//   onClick={handleLinkClick}
//   className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
// >
//   <FaBriefcase /> PORTFOLIO
// </Link>

//           <Link to="/career" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
//             <FaBriefcase /> CAREER
//           </Link>

//           <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
//             <FaPhoneAlt /> CONTACT US
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import {
  FaChartLine,
  FaCoins,
  FaDollarSign,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaPhoneAlt,
  FaNewspaper,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

/**
 * Full Navbar with Top Header
 * - Top header with contact + social icons
 * - Desktop + Mobile nav, theme toggle
 */

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dropdowns
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  // Mobile accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileForexOpen, setMobileForexOpen] = useState(false);
  const [mobileComexOpen, setMobileComexOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setSubDropdownOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileForexOpen(false);
    setMobileComexOpen(false);
    setDropdownOpen(false);
    setSubDropdownOpen(null);
  };

  return (
    <>
      {/* 🔹 Top Header (Always Visible) */}
      <div className="w-full bg-gray-100 fixed top-0 z-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 text-sm">
        <div className="max-w-7xl h-full mx-auto px-6 sm:px-10 py-2 flex items-center justify-end">



<div className="flex items-center gap-4">
  <a
    href="https://www.facebook.com/share/1B71X6rGi6/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:opacity-80 transition"
  >
    <FaFacebook size={18} />
  </a>

  <a
    href="https://www.instagram.com/acordanreseaarch?igsh=MWc5eXVydHlubnV5cQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:opacity-80 transition"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://api.whatsapp.com/send/?phone=6531586787&text&type=phone_number&app_absent=0" // replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:opacity-80 transition"
  >
    <FaWhatsapp size={18} />
  </a>

  <a
    href="https://x.com/acordanresearch?t=lbtX3ZimaRr4AwWee4KDtQ&s=09"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:opacity-80 transition"
  >
    <FaTwitter size={18} />
  </a>
</div>



        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <header className="fixed top-8 left-0 w-full z-40 bg-[var(--bg)] shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
            <img src="img/slider.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm text-[var(--text-color)]">
            <Link to="/" className="flex items-center gap-2 hover:text-[var(--accent)]" onClick={handleLinkClick}>
              <FaHome /> HOME
            </Link>

            <Link to="/about" className="flex items-center gap-2 hover:text-[var(--accent)]" onClick={handleLinkClick}>
              <FaInfoCircle /> ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => { setDropdownOpen(false); setSubDropdownOpen(null); }}
            >
              <button
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(prev => !prev)}
                className="flex items-center gap-2 hover:text-[var(--accent)]"
              >
                <FaChartLine /> SERVICES <ChevronDownIcon className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 w-72 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md">
                  {/* Forex */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setSubDropdownOpen('forex')}
                    onMouseLeave={() => setSubDropdownOpen(null)}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-[var(--secondary-bg)]">
                      <FaDollarSign className="text-[var(--accent)]" /> <span className="flex-1">Forex</span>
                      <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    </div>
                    {subDropdownOpen === 'forex' && (
                      <div className="absolute top-0 left-full w-60 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md">
                        <Link to="/basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
                          <FaDollarSign /> Basic Forex
                        </Link>
                        <Link to="/premium" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
                          <FaDollarSign /> Premium Forex
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Comex Gold */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setSubDropdownOpen('comex')}
                    onMouseLeave={() => setSubDropdownOpen(null)}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-[var(--secondary-bg)]">
                      <FaCoins className="text-[var(--accent)]" /> <span className="flex-1">Comex Gold</span>
                      <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    </div>
                    {subDropdownOpen === 'comex' && (
                      <div className="absolute top-0 left-full w-60 bg-[var(--bg)] border border-gray-100 dark:border-neutral-800 shadow-lg rounded-md">
                        <Link to="/gold-basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
                          <FaCoins /> Basic Comex/Gold
                        </Link>
                        <Link to="/gold-premium" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--secondary-bg)]">
                          <FaCoins /> Premium Comex/Gold
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Indices */}
                  <Link to="/indice-basic" onClick={handleLinkClick} className="flex items-center gap-2 px-4 py-3 hover:bg-[var(--secondary-bg)]">
                    <FaChartLine className="text-[var(--accent)]" /> Indices
                  </Link>
                </div>
              )}
            </div>

            <Link to="/learning" onClick={handleLinkClick} className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FaNewspaper /> LEARNING
            </Link>

            <Link to="/portfolio" onClick={handleLinkClick} className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FaBriefcase /> PORTFOLIO
            </Link>

            <Link to="/career" onClick={handleLinkClick} className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FaBriefcase /> CAREER
            </Link>

            <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FaPhoneAlt /> CONTACT US
            </Link>
          </nav>

          {/* Right side: theme toggle + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <button
              className="md:hidden p-2 rounded"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XMarkIcon className="w-6 h-6 text-[var(--text-color)]" /> : <Bars3Icon className="w-6 h-6 text-[var(--text-color)]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-[var(--bg)] border-t border-gray-100 dark:border-neutral-800`}>
          <div className="px-6 py-4 space-y-2 font-semibold text-[var(--text-color)]">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaHome /> HOME
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaInfoCircle /> ABOUT US
            </Link>
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => { setMobileServicesOpen(prev => !prev); if (mobileServicesOpen) { setMobileForexOpen(false); setMobileComexOpen(false); } }}
                className="w-full flex items-center justify-between gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
              >
                <div className="flex items-center gap-3">
                  <FaChartLine /> SERVICES
                </div>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {/* Forex */}
                  <div>
                    <button
                      onClick={() => setMobileForexOpen(prev => !prev)}
                      className="w-full flex items-center justify-between px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
                    >
                      <div className="flex items-center gap-3">
                        <FaDollarSign /> Forex
                      </div>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileForexOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileForexOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        <Link to="/basic" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Basic Forex</Link>
                        <Link to="/premium" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Premium Forex</Link>
                      </div>
                    )}
                  </div>
                  {/* Comex */}
                  <div>
                    <button
                      onClick={() => setMobileComexOpen(prev => !prev)}
                      className="w-full flex items-center justify-between px-2 py-2 hover:bg-[var(--secondary-bg)] rounded"
                    >
                      <div className="flex items-center gap-3">
                        <FaCoins /> Comex Gold
                      </div>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileComexOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileComexOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        <Link to="/gold-basic" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Basic Comex/Gold</Link>
                        <Link to="/gold-premium" onClick={handleLinkClick} className="block px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">Premium Comex/Gold</Link>
                      </div>
                    )}
                  </div>
                  {/* Indices */}
                  <Link to="/indices" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
                    <FaChartLine /> Indices
                  </Link>
                </div>
              )}
            </div>

            <Link to="/learning" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaNewspaper /> LEARNING
            </Link>
            <Link to="/portfolio" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaBriefcase /> PORTFOLIO
            </Link>
            <Link to="/career" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaBriefcase /> CAREER
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="flex items-center gap-3 px-2 py-2 hover:bg-[var(--secondary-bg)] rounded">
              <FaPhoneAlt /> CONTACT US
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
