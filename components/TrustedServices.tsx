"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, cubicBezier } from "framer-motion";

// ✅ Type updated to allow both imported and URL images
interface Service {
  title: string;
  description: string;
  image: string | StaticImageData;
}

interface Props {
  services: Service[];
  title?: string;
}

// ✅ TS-safe easing variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1), // ✅ replaces "easeOut"
    },
  }),
};

export default function TrustedServices({
  services,
  title = "Trusted Sustainable Energy Services",
}: Props) {
  if (!services || !Array.isArray(services)) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center bg-[#f5fbf7]">
      {/* ===== Title ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-14 text-gray-900"
      >
        {title}
      </motion.h2>

      {/* ===== Services Grid ===== */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title + i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{
              y: -10,
              scale: 1.05,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform-gpu hover:shadow-xl transition-all"
          >
            {/* ===== Image ===== */}
            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* ===== Text ===== */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
