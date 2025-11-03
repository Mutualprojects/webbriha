"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const nationalImage = "/freepik__background__97726.png"; // 🖼️ Add your image inside /public folder

export default function National() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple scroll-linked parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-white "
    >
         <motion.div
        style={{ x: rightX }}
        className="relative flex-1 mt-10 lg:mt-0 flex justify-center lg:justify-end w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative w-[80%] sm:w-[70%] lg:w-[85%] max-w-[600px]"
        >
          <Image
            src={nationalImage}
            alt="SkyVolt Nationwide Presence Map"
            width={600}
            height={600}
            className="object-contain drop-shadow-[0_10px_25px_rgba(10,106,184,0.25)]"
            priority
          />
        </motion.div>
      </motion.div>
      {/* ===== Left Content ===== */}
      <motion.div
        style={{ x: leftX }}
        className="relative z-10 flex-1 text-center lg:text-left space-y-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fcc012]"
        >
          Nationwide Presence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-[#07518a] leading-relaxed max-w-lg mx-auto lg:mx-0"
        >
          SkyVolt Renewable Private Limited is expanding its solar energy
          footprint across India — delivering innovative EPC solutions that
          empower homes, industries, and institutions nationwide.
        </motion.p>
      </motion.div>

      {/* ===== Right Image ===== */}
     
    </section>
  );
}
