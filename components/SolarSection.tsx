"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const backgroundpower = "/freepik__background__80691.png"; // large background image
const uppimage = "/solar-panel-with-thumbs-up.png"; // centered foreground image

export default function SolarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-white py-20 lg:py-0 "
    >
      {/* ====== Soft Yellow Glow Background ====== */}
      <motion.div
        style={{ x: bgX }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl z-0 "
      />

      {/* ====== LEFT CONTENT ====== */}
      <motion.div
        style={{ x: leftX }}
        className="relative z-10 flex-1 w-full px-6 lg:px-20 text-center lg:text-left space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fcc012]"
        >
          Powering a Sustainable Future with Solar Energy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-[#07518a] leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          India’s solar revolution is illuminating millions of lives — driving
          growth, sustainability, and innovation. Through clean energy
          initiatives, solar EPC solutions, and community projects, we’re
          transforming sunlight into progress. Our mission is to make renewable
          energy accessible, reliable, and affordable for every home, business,
          and industry.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-[#FCC012] text-[#0a6ab8] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Our Solar Projects
        </motion.button>
      </motion.div>

      {/* ====== RIGHT VISUAL SECTION ====== */}
      <motion.div
        style={{ x: rightX }}
        className="relative flex-1 w-full flex justify-center lg:justify-end mt-16 lg:mt-0"
      >
        {/* === Background container === */}
        <div className="relative w-full h-[120vh] sm:h-[130vh] lg:h-[150vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src={backgroundpower}
            alt="Solar background"
            fill
            className="object-cover lg:object-contain opacity-50 blur-[0.5px]"
            priority
          />

          {/* Overlay Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20 pointer-events-none" />

          {/* Foreground main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-[65%] sm:w-[50%] lg:w-[65%] aspect-square"
          >
            <Image
              src={uppimage}
              alt="Solar panel with thumbs up"
              fill
              className="object-contain drop-shadow-[0_10px_25px_rgba(10,106,184,0.3)]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
