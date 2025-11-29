"use client";

import React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

interface Service {
  title: string;
  description: string[];
  media: string; // image or video URL
  isVideo?: boolean;
}

const SERVICES: Service[] = [

   {
    title: "Solar EPC Services",
    media: "https://ik.imagekit.io/tsuss6ulm/Sky%20volt%20renewables%20Pvt.Ltd/EPC.png",
    description: [
      "We provide complete EPC solutions ensuring seamless execution from concept to commissioning.",
      "System design & consultation with site assessment and load analysis.",
      "Equipment procurement using MNRE-approved high-quality components.",
      "Expert installation following strict safety and quality standards.",
    ],
  },
  {
    title: "After-Sales Service",
    media: "https://ik.imagekit.io/tsuss6ulm/Sky%20volt%20renewables%20Pvt.Ltd/After%20Sales.png",
    description: [
      "Our commitment continues long after installation.",
      "Comprehensive product and installation warranties.",
      "Preventive maintenance and performance monitoring.",
      "Quick technical support and service assistance.",
    ],
  },
 
  {
    title: "Financing & Administrative Support",
    media: "https://ik.imagekit.io/tsuss6ulm/Sky%20volt%20renewables%20Pvt.Ltd/Financial%20&%20Adminstrative.png",

    description: [
      "Flexible financing and administrative assistance for easier solar investment.",
      "Guidance on government subsidies and rebate programs.",
      "Support for DISCOM approvals and net metering setup.",
      "Easy EMI and loan options to make solar affordable.",
    ],
  },
];

// TS-safe animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  }),
};

export default function TrustedServices() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center bg-[#f5fbf7]">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-14 text-gray-900"
      >
        Trusted Sustainable Energy Services
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
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
            {/* Media Section */}
            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
              {service.isVideo ? (
                <video
                  src={service.media}
                  className="object-cover w-full h-full"
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <Image
                  src={service.media}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              )}
            </div>

            {/* Text Section */}
            <div className="p-6 sm:p-8 text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <ul className="text-gray-600 space-y-2 text-base leading-relaxed list-disc ml-5">
                {service.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
