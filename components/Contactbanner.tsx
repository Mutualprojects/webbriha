"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Your Image Import
import contactBanner from "@/app/images/Solar-Panel-For-Home-In-Rajkot.jpeg";

export default function Contactbanner() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [
    0.4,
    1,
    1,
    0.7,
  ]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-slate-900"
    >
      {/* Background Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactBanner.src})`,
          }}
        />

        {/* Yellow-Themed Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-10 lg:px-20">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl text-center"
        >
          {/* Small Tag + Yellow Style */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-4"
          >
            <span className="inline-block px-5 py-2 text-sm font-semibold tracking-wider 
              text-yellow-400 uppercase
              rounded-full">
              Contact Us
            </span>
          </motion.div>

          {/* Main Title — Yellow Highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight"
          >
            We're Here to  
            <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-yellow-300 
              bg-clip-text text-transparent">
              Assist You Anytime
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mt-6"
          >
            Whether you have questions about solar solutions, pricing, installation,
            or maintenance — our expert team is ready to help you make informed decisions.
          </motion.p>

          {/* Decorative Line (Yellow) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-yellow-400/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-2 bg-yellow-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
