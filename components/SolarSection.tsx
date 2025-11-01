"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface SolarSectionProps {
  image: string;
}

export default function SolarSection({ image }: SolarSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth opposite-direction motion
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);  // move right
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]); // move left
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-20 bg-white"
    >
      {/* ==== Animated Yellow Background Glow ==== */}
      <motion.div
        style={{ x: bgX }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#FCC012] opacity-20 blur-3xl"
      />

      {/* ==== Left Text Section ==== */}
      <motion.div
        style={{ x: leftX }}
        className="relative z-10 flex-1 space-y-6 text-center lg:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a6ab8]"
        >
          Powering a Sustainable Future with Solar Energy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
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

      {/* ==== Right Image Section ==== */}
      <motion.div
        style={{ x: rightX }}
        className="relative flex-1 mt-10 lg:mt-0 flex justify-center"
      >
        <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={image}
            alt="Solar Energy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
