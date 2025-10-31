"use client";

import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ===== Interfaces ===== */
interface AboutData {
  title: string;
  subtitle: string;
  content: string;
}
interface AboutProps {
  image: StaticImageData | string;
  about: AboutData;
  alt?: string;
}

/* ===== Component ===== */
export default function AboutSplitFullBleed({
  image,
  about,
  alt = "About section image",
}: AboutProps) {
  if (!about) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [viewportWidth, setViewportWidth] = useState(1024);

  // Detect screen width to adjust animation distances
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Animation strength by device type
  const imageShift =
    viewportWidth < 640
      ? "-6%" // mobile
      : viewportWidth < 1024
      ? "-10%" // tablets / medium
      : "-20%"; // large & xl

  const textShift =
    viewportWidth < 640
      ? "6%" // mobile
      : viewportWidth < 1024
      ? "10%" // tablets / medium
      : "20%"; // large & xl

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  // Scroll-based animation
  const imageX = useTransform(smoothProgress, [0, 1], ["0%", imageShift]);
  const textX = useTransform(smoothProgress, [0, 1], ["0%", textShift]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 0.9]);
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f5fbf7] py-10 sm:py-14 md:py-20 lg:py-24"
    >
      {/* ===== Gradient Glows ===== */}
      <div className="absolute -top-32 -left-32 h-72 w-72 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 bg-sky-200/50 rounded-full blur-3xl" />

      {/* ===== Main Grid ===== */}
      <div className="grid md:grid-cols-2 items-center justify-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* === Left: Image Card (Center ➜ Left Motion) === */}
        <motion.div
          style={{ x: imageX, opacity: imageOpacity }}
          className="flex justify-center w-full h-[40vh] sm:h-[48vh] md:h-[55vh] lg:h-[65vh]"
        >
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              rotate: 0.5,
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-md"
          >
            <Image
              src={image}
              alt={alt}
              fill
              priority
              placeholder={typeof image === "string" ? undefined : "blur"}
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 ring-1 ring-black/5" />
          </motion.div>
        </motion.div>

        {/* === Right: Text Content (Center ➜ Right Motion) === */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="flex flex-col justify-center px-2 sm:px-6 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h3 className="text-sky-600 font-semibold uppercase tracking-widest mb-3 text-sm sm:text-base md:text-lg">
              About Us
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-yellow-400">
              {about.title}
            </h2>

            <p className="mt-4 text-blue-500 text-sm sm:text-base md:text-lg">
              {about.subtitle}
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              {about.content}
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(14,165,233,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 self-center md:self-start inline-flex items-center px-6 sm:px-8 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-md hover:bg-sky-700 transition-all text-sm sm:text-base"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
