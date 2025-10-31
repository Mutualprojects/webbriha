"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

/* ===== Base fade-up variant for headings / image ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

/* ===== Step-by-step reveal animation ===== */
const stepReveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25, // each step staggers slightly
      duration: 0.7,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  }),
};

export default function Execution() {
  const steps = [
    {
      number: "1",
      title: "Consultation & Site Assessment",
      desc: "We begin with detailed energy consultations and on-site evaluations to understand your solar requirements.",
    },
    {
      number: "2",
      title: "System Design & Engineering",
      desc: "Our experts craft customized, high-efficiency solar system designs tailored to your site conditions and power goals.",
    },
    {
      number: "3",
      title: "Procurement & Construction",
      desc: "We source premium, MNRE-approved components and execute turnkey installation with strict quality standards.",
    },
    {
      number: "4",
      title: "Testing & Commissioning",
      desc: "Every system undergoes comprehensive testing and commissioning to ensure optimal safety and performance.",
    },
    {
      number: "5",
      title: "Post-Installation Support",
      desc: "Continuous maintenance, performance tracking, and customer support guarantee long-term system reliability.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ===== LEFT TEXT SECTION ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm tracking-widest text-yellow-400 uppercase font-medium">
              Expanding Energy Opportunities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#07518a] mt-2">
              Seamless shift to renewable power
            </h2>
          </div>

          <div className="space-y-8 mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start space-x-5"
              >
                {/* Number circle + vertical line */}
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.25,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#07518a] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-10 bg-gray-300 mt-1"></div>
                  )}
                </motion.div>

                {/* Step text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== RIGHT IMAGE SECTION ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://tse1.mm.bing.net/th/id/OIP.zje_pWDcdGt_-aGUBUWMPgHaE8?pid=Api&P=0&h=180"
            alt="Solar Execution"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
