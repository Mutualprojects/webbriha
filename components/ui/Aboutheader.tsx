"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

const videobg = "https://ik.imagekit.io/tsuss6ulm/Sky%20volt%20renewables%20Pvt.Ltd/groundmounted.mp4";

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

export default function Aboutheader() {
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
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[px] px-0" />

      {/* ===== Hero Content ===== */}
   
    </header>
  );
}
