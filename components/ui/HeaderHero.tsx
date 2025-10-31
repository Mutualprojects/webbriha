"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  cubicBezier, // ✅ TS-safe easing function
} from "framer-motion";

/* ===== Framer Motion Variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1), // ✅ replaces "easeOut"
    },
  },
};

/* ===== HERO SECTION COMPONENT ===== */
export default function HeaderHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based horizontal animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <header
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* ===== Background Layers ===== */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
          }}
          aria-hidden="true"
        />

        {/* Blue overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,81,138,0.92),rgba(10,108,182,0.78))]" />

        {/* Fade to white bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      {/* ===== Main Hero Content ===== */}
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ===== Left Text Content ===== */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              style={{ x }}
              className="text-center lg:text-left text-white"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-yellow-300 bg-white/10 rounded-full px-4 py-2 mb-5 shadow-sm">
                Transforming India’s Energy Landscape
              </span>

              <h1 className="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-snug">
                Powering Homes, Industries & Institutions with Smart Solar
                Solutions
              </h1>

              <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                “Empowering Progress. Energizing the Future.”
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="bg-yellow-400 text-[#07518a] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
                >
                  Get a Free Quote
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#learn-more"
                  className="border border-white/80 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* ===== Right Visual Section ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: cubicBezier(0.16, 1, 0.3, 1), // ✅ TS-safe easing
              }}
              className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            >
              <div
                className="
                  w-[90%] sm:w-[420px] md:w-[500px] lg:w-[560px] xl:w-[600px]
                  h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] xl:h-[480px]
                  rounded-3xl overflow-hidden shadow-2xl
                  border border-white/20 bg-white/5 backdrop-blur-sm
                "
              >
                <motion.img
                  src="https://images.pexels.com/photos/8853506/pexels-photo-8853506.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Solar panels on rooftop"
                  className="w-full h-full object-cover rounded-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== Optional Bottom Strip ===== */}
        <div className="relative -mt-6 sm:-mt-10 lg:-mt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
            className="mx-auto max-w-6xl text-center"
          >
            {/* Placeholder for future metric cards */}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
