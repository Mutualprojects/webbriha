"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

const videobg = "https://ik.imagekit.io/ynh4hdbml/Sequence%2001_1.mp4?updatedAt=1761975866109";

/* ===== Motion Variants ===== */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

export default function HeaderHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Parallax zoom effect

  return (
    <header
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden h-[100vh] flex items-center "
    >
      {/* ===== Background Video ===== */}
      <motion.video
        src={videobg}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        style={{ scale }}
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px] px-0" />

      {/* ===== Hero Content ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto  sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12"
      >
        {/* ===== Left Section (3/4) ===== */}
        <motion.div
          variants={fadeUp}
          style={{ x }}
          className="lg:w-3/4 w-full text-center lg:text-left text-gray-900 space-y-4 sm:space-y-5 px-0"
        >
          <motion.span
            variants={fadeUp}
            className="text-green-600 font-bold text-lg sm:text-xl md:text-2xl"
          >
            Transforming India’s Energy Landscape
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug sm:leading-tight text-[#2469AD]"
          >
            Powering Homes, Industries & Institutions
          
            with Smart Solar Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            “Empowering Progress. Energizing the Future.”
          </motion.p> 

          {/* ===== CTA Buttons ===== */}
          <motion.div
            variants={fadeUp}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#FCC012] text-[#2469AD] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base"
            >
              Get a Free Quote
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ===== Right Section (1/4) ===== */}
      {/* ===== Right Section (Text top + Smaller Image bottom) ===== */}
<motion.div
  variants={fadeUp}
  className="lg:w-1/4 w-full sm:w-[70%] md:w-[55%] lg:w-[40%] 
             flex justify-center lg:mt-80 sm:mt-20"
>
  {/* Card Wrapper */}
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative w-[80%] sm:w-[85%] md:w-[70%] lg:w-[80%]
               bg-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.25)]
               border border-blue-500/30 overflow-hidden flex flex-col 
               items-center text-center p-4 sm:p-5 gap-4"
  >
    {/* ===== Image Top ===== */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]
                 rounded-2xl overflow-hidden border border-green-700/20"
    >
      <motion.img
        src="https://images.pexels.com/photos/8853506/pexels-photo-8853506.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Eco energy panels"
        className="w-full h-full object-cover rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
      />

      {/* Blue Arrow Button */}
      <motion.a
        href="/solutions"
        whileHover={{ scale: 1.15, x: 2 }}
        className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 
                   text-white rounded-full p-3 shadow-lg transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </motion.a>
    </motion.div>

    {/* ===== Content Below ===== */}
    <motion.div
      variants={fadeUp}
      className="space-y-2 px-2 sm:px-3"
    >
      <motion.h3
        variants={fadeUp}
        className="text-[15px] sm:text-[16px] font-semibold text-green-700"
      >
        Eco-friendly solutions for your future
      </motion.h3>
      <motion.p
        variants={fadeUp}
        className="text-xs sm:text-sm text-gray-700 leading-relaxed"
      >
        Harness the power of nature — sun, wind, and water — for sustainable growth.
      </motion.p>
    </motion.div>
  </motion.div>
</motion.div>


      </motion.div>
    </header>
  );
}
