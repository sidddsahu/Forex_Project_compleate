
// "use client";

// import React from "react";
// import Slider from "react-slick";
// import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     type: "text",
//     name: "John Doe",
//     role: "CEO",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     text: "Acordan Research gave me overall consistent growth, of course it was upward, downward but in the end consistent returns.",
//   },
//   {
//     type: "text",
//     name: "Alden Smith",
//     role: "Creative Designer",
//     image: "https://randomuser.me/api/portraits/men/31.jpg",
//     text: "I love the signals. Because these are very stable and profitable. I am thankful to Acordan Research for their assistance.",
//   },
//   {
//     type: "video",
//     youtubeId: "dQw4w9WgXcQ", // Replace with your real video ID
//     name: "Emma Watson",
//     role: "Marketing Head",
//     text: "In this short video, Emma shares how Acordan Research helped her company grow profits.",
//   },
//   {
//     type: "text",
//     name: "Alfred Amos",
//     role: "Creative Designer",
//     image: "https://randomuser.me/api/portraits/men/30.jpg",
//     text: "Acordan Research gave me step-by-step guidance on how to trade in this fluctuating market to make more money.",
//   },
// ];

// export default function TestimonialSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="relative py-20 overflow-hidden bg-[var(--secondary-bg)] text-[var(--text-color)] border-b border-gray-200 dark:border-gray-700">

//       {/* Animated gradient background */}
//       <motion.div
//         className="absolute inset-0 -z-10"
//         style={{
//           background: `radial-gradient(circle at top left, var(--accent)15%, transparent 60%)`,
//         }}
//         animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//       />

//       <div className="max-w-7xl mx-auto px-4">
//         <motion.h2
//           className="text-4xl md:text-5xl text-center font-bold mb-10"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Our Client <span className="text-[var(--accent)]">Says</span>
//         </motion.h2>

//         <Slider {...settings}>
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               className="px-3"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div className="relative bg-[var(--bg)]/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-[var(--text-color)]/10 transition-transform transform hover:-translate-y-2 duration-300">

//                 {item.type === "text" && (
//                   <>
//                     <FaQuoteLeft className="text-[var(--accent)] text-3xl mb-4" />
//                     <p className="mb-6 italic leading-relaxed">“{item.text}”</p>
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-14 h-14 rounded-full border-2 border-[var(--accent)] shadow-md"
//                       />
//                       <div>
//                         <h4 className="font-bold text-lg flex items-center gap-2">
//                           {item.name} <FaCheckCircle className="text-green-500" title="Verified Client" />
//                         </h4>
//                         <p className="text-sm opacity-70">{item.role}</p>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {item.type === "video" && (
//                   <>
//                     <div className="mb-4 aspect-video rounded-lg overflow-hidden shadow-lg">
//                       <iframe
//                         width="100%"
//                         height="100%"
//                         src={`https://www.youtube.com/embed/${item.youtubeId}`}
//                         title={item.name}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       ></iframe>
//                     </div>
//                     <h4 className="font-bold text-lg flex items-center gap-2">
//                       {item.name} <FaCheckCircle className="text-green-500" title="Verified Client" />
//                     </h4>
//                     <p className="text-sm opacity-70">{item.role}</p>
//                     <p className="mt-2 italic text-sm opacity-80">{item.text}</p>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    type: "mp4",
     name: "Sandhya ",
     role: "India",
    videoUrl: "img/Sandhya.mp4",

  },
  {
    type: "mp4",
     name: "Jogendra ",
     role: "Dubai",
    videoUrl: "img/Jogender.mp4",

  },

    {
    type: "mp4",
      name: "Muhammad Nadeem ",
     role: "UAE",
    videoUrl: "img/Muhammad.mp4",

  },

    {
    type: "mp4",
    videoUrl: "img/1000042507.mp4",

  },
  {
    type: "text",
    name: "Tinson",
    // role: "Creative Designer",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAqQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgQFAwEH/8QALxAAAgIABAMHAwQDAAAAAAAAAAECAwQRITESQVETIjJSYXGBBUKRM3Kx0RQ0Yv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAADwOSW7S92B6CHaQ88fyeqcXs0/ZgSAAAAAAAAAAAAAAAAAAAAo4nHJZxp1fmAtWWwqWdkkinb9Qb0qjp1kUpScpNybbfNngHWeIun4rH8aHIAqPD0ACcLrK/DNos1Y+a/UipLqtGUwRWzTiK7vBLXo9zqYKeWq3LuGx3DlG/Veb+wNEHkWmk0009j0AAAAAAAAAAUfqGIyXZQer8QHPGYtzbrrfd5vqUwAAB0pr7SW3dKiNdcrPCtOrO8cPH7m2d8skl0BFc+wr8r/JCWGi/C2juAKNlcq91p1REvtZprqU7q+znpswIAAqLGFxTpeUta3uunsasXxJNPNPZmEXMBiOCXZyfdlt6MitIAAAAAAAHO6xVVym1sjGk3KTcnm282XfqdmbjUtt2UQAAKgXq4cEFFcinUs7Yr1LxFAAAAAAhbHjg4/gmAM8HtiynJep4VAAAa+Eu7WpN+JaM7mV9Ps4L+F7S0NUigAAAEZvKLb5agZGJnx4icvU5AFQAAEqnlZF+pe5meXap8daZFTAAAAAACF0+CD6vYCnY85yfqeAFQAAHsJcEotcnmbkXmk1zRhGxhHxYet/8kV2AAAhd+lP9rJkZrOEl1QGGACoAAATqtdTz5c0QAF+MlJZp5o9KEJyg+68jtHE+eP4IqyDj/kQ6MhLE8oR+WB3lJRWcnkipZY7Hny5EZScnnJ5nhUAAAAAA18D/qw+f5Mg2MGssNWvTMDsACKBgAYl8OC6cejIFz6jDK1Ty0ksn7lMAACoHsYyk8orM61UN6y0iWYxUVklkiKrxwz+6XwjoqK/Ln7s6gCHZV+RHjprf2nQAV5YZfbL8nGdcoeJadS8eNZgUAWLcOtXWvgrlQAABLNpdTcguGKj0RlYKvjxEeke8zXIoAAAAA44qrtqZR57r3MfZ5Pfobxm4/D8Mu1gtH4vcCnyLFFP3y35Ihh6+KWcl3V/JbAAAAAAAAAAAAcbqVKPFHJPn6nYAZ4LGJr3nH5GDo7azNruR3/oC5gKuzq4peKevwWgAAAAAAARlFSi1JaMkAKcquy0S7vUiXWk1kyvbS46x1QHIAAAAAAAAAAACddbn6LqBGEHN8K25lqquNcFCCySPYxUVlFZEgAAAAAD/9k=",
    text: "I've been thoroughly impressed with the overall performance and professionalism of this signal company. The trade signals are consistently super accurate, offering high-probability setups that have significantly improved my trading results. It's clear that a great deal of analysis and precision goes into each signal, and the results speak for themselves.",
  },
];




export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[var(--secondary-bg)] text-[var(--text-color)] border-b border-gray-200 dark:border-gray-700">

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at top left, var(--accent)15%, transparent 60%)`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-center font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Client <span className="text-[var(--accent)]">Says</span>
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="px-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative bg-[var(--bg)]/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-[var(--text-color)]/10 transition-transform transform hover:-translate-y-2 duration-300">

                {/* TEXT TESTIMONIAL */}
                {item.type === "text" && (
                  <>
                    <FaQuoteLeft className="text-[var(--accent)] text-3xl mb-4" />
                    <p className="mb-6 italic leading-relaxed">“{item.text}”</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full border-2 border-[var(--accent)] shadow-md"
                      />
                      <div>
                        <h4 className="font-bold text-lg flex items-center gap-2">
                          {item.name} <FaCheckCircle className="text-green-500" title="Verified Client" />
                        </h4>
                        <p className="text-sm opacity-70">{item.role}</p>
                      </div>
                    </div>
                  </>
                )}

                {/* MP4 VIDEO TESTIMONIAL */}
                {item.type === "mp4" && (
                  <>
                    <div className="mb-4 aspect-video rounded-lg h-full  overflow-hidden shadow-lg">
                      <video
                        className="w-full h-full "
                        controls
                        preload="metadata"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      {item.name} <FaCheckCircle className="text-green-500" title="Verified Client" />
                    </h4>
                    <p className="text-sm opacity-70">{item.role}</p>
                    <p className="mt-2 italic text-sm opacity-80">{item.text}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
