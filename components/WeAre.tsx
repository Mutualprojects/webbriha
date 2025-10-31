"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ====== Motion Variants ======
const fadeInUp = {
  hidden: { opacity: 0, y: 200},
  show: { opacity: 1, y: -50, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

// ====== Component ======
export default function WhoWeAre() {
  return (
    <section className="w-full bg-white">
      {/* ===== WHO WE ARE SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/who-we-are.jpg" // 🖼️ Replace with your image path
            alt="Who we are"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are a passionate team of renewable energy experts, engineers, and
            visionaries united by the goal of delivering clean, dependable power
            solutions across India. With over a decade of industry experience
            and a commitment to innovation, Sky Volts stands for quality,
            transparency, and customer satisfaction.
          </p>
        </motion.div>
      </div>

      {/* ===== OUR VALUES SECTION ===== */}
      <div className="bg-gray-50 py-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Values
        </motion.h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Value 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              {/* 🖼️ Dummy Icon */}
              <Image
                src="/icons/sustainability.png"
                alt="Sustainability"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Sustainability & Green Innovation
            </h3>
            <p className="text-gray-600">
              Driving renewable progress through sustainable and innovative
              energy solutions.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Image
                src="/icons/customer.png"
                alt="Customer"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Customer-Centric Solutions
            </h3>
            <p className="text-gray-600">
              Placing customer satisfaction at the core of every project we
              deliver.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Image
                src="/icons/integrity.png"
                alt="Integrity"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Integrity & Long-Term Collaboration
            </h3>
            <p className="text-gray-600">
              Building trust and enduring partnerships through transparency and
              integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
