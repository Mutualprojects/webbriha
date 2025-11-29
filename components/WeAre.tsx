"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

// ====== Motion Variants ======
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

// ====== Component ======
export default function WhoWeAre() {
  return (
    <section className="w-full bg-white">
      {/* ===== WHO WE ARE SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left - Video */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] overflow-hidden rounded-2xl shadow-lg"
        >
          <video
            src="https://ik.imagekit.io/tsuss6ulm/Sky%20volt%20renewables%20Pvt.Ltd/92b2278a-0c7b-41d4-83e6-0d0165b5b6a9.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a dedicated team of renewable energy experts driven by the
            mission to deliver clean and reliable power across India. With over
            a decade of expertise, Sky Volts leads with innovation, quality, and
            customer trust.
          </p>
        </motion.div>
      </div>

      {/* ===== OUR VALUES SECTION ===== */}
      <div className="bg-gray-50 py-24">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-14"
        >
          Our Values
        </motion.h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Value 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-20 h-20">
              <Image
                src="https://content.presspage.com/uploads/1369/cae8f08d-2d20-4ab3-b51d-b27dcd1471bb/1920_martinablog.jpg?10000"
                alt="Sustainability"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Sustainability & Innovation
            </h3>
            <p className="text-gray-600">
              Empowering the future with eco-friendly and innovative energy
              solutions.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-20 h-20">
              <Image
                src="https://png.pngtree.com/png-clipart/20231208/original/pngtree-customer-centric-business-concept-stamp-grunge-photo-png-image_13794443.png"
                alt="Customer-Centric"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600">
              Putting client needs and satisfaction at the heart of every
              project.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-20 h-20">
              <Image
                src="https://img.favpng.com/12/11/15/computer-icons-partnership-icon-design-business-png-favpng-kTZ4vFtEeUQrqjbNyTGjJCPiW.jpg"
                alt="Integrity"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Integrity & Long-Term Vision
            </h3>
            <p className="text-gray-600">
              Building transparent, trustworthy, and lasting partnerships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
