"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ===== Brand Colors ===== */
const PRIMARY = "#2469ad";
const ACCENT = "#fcc012";

/* ===== Product Data ===== */
const SOLAR_PRODUCTS = [
  {
    id: 1,
    title: "Solar Panels",
    description:
      "MNRE-certified solar panels (mono & poly) that deliver maximum power even in low-light conditions — ideal for rooftop, ground-mounted & floating projects.",
    image: "https://ik.imagekit.io/demo/solar-panels.jpg",
  },
  {
    id: 2,
    title: "Inverters",
    description:
      "Advanced on-grid, off-grid & hybrid inverters converting DC to stable AC power with seamless grid synchronization.",
    image: "https://ik.imagekit.io/demo/solar-inverter.jpg",
  },
  {
    id: 3,
    title: "Batteries",
    description:
      "Reliable lithium & tubular solar batteries for long-life backup and deep discharge efficiency in hybrid systems.",
    image: "https://ik.imagekit.io/demo/solar-battery.jpg",
  },
  {
    id: 4,
    title: "Solar Water Heaters",
    description:
      "ETC & FPC solar geysers for homes, hotels & hospitals — energy-efficient, low-maintenance & eco-friendly.",
    image: "https://ik.imagekit.io/demo/solar-water-heater.jpg",
  },
  {
    id: 5,
    title: "Solar Street Lights",
    description:
      "Automatic off-grid solar lights with motion sensors & long-life LEDs for streets & campuses.",
    image: "https://ik.imagekit.io/demo/solar-streetlight.jpg",
  },
  {
    id: 6,
    title: "Solar Fencing Equipment",
    description:
      "24×7 solar-powered security fencing with low maintenance and extended battery life for farms & industries.",
    image: "https://ik.imagekit.io/demo/solar-fence.jpg",
  },
  {
    id: 7,
    title: "Solar Wires & Cables",
    description:
      "UV-resistant, fire-retardant cables for safe & efficient DC transmission between panels & inverters.",
    image: "https://ik.imagekit.io/demo/solar-cables.jpg",
  },
  {
    id: 8,
    title: "Metal Steels & Mounting Accessories",
    description:
      "High-strength galvanized & stainless-steel mounting structures ensuring stability & weather resistance.",
    image: "https://ik.imagekit.io/demo/solar-mounts.jpg",
  },
  {
    id: 9,
    title: "Net Meter",
    description:
      "DISCOM-approved net meters accurately record import/export energy, enabling solar credit billing.",
    image: "https://ik.imagekit.io/demo/solar-meter.jpg",
  },
  {
    id: 10,
    title: "DCDB (DC Distribution Box)",
    description:
      "Safe DC management boxes with fuses & SPDs between panels & inverters for surge protection.",
    image: "https://ik.imagekit.io/demo/dcdb.jpg",
  },
  {
    id: 11,
    title: "ACDB (AC Distribution Box)",
    description:
      "Protective AC boxes ensuring smooth power flow from inverters to loads or grid connections.",
    image: "https://ik.imagekit.io/demo/acdb.jpg",
  },
  {
    id: 12,
    title: "Charge Controller",
    description:
      "PWM & MPPT controllers regulating panel-to-battery flow for optimal charging & battery health.",
    image: "https://ik.imagekit.io/demo/solar-controller.jpg",
  },
  {
    id: 13,
    title: "Solar Panel Cleaning Brush",
    description:
      "Soft-bristle cleaning kits for scratch-free maintenance & improved panel output.",
    image: "https://ik.imagekit.io/demo/solar-cleaning.jpg",
  },
  {
    id: 14,
    title: "Aluminium Mounting Structure (Shed-Mounted)",
    description:
      "Lightweight rust-proof aluminium frames with adjustable tilt — perfect for sheds & carports.",
    image: "https://ik.imagekit.io/demo/aluminium-structure.jpg",
  },
  {
    id: 15,
    title: "MMS (Module Mounting Structure)",
    description:
      "Galvanized-steel MMS systems for rooftop & ground projects — durable and easy to install.",
    image: "https://ik.imagekit.io/demo/mms-structure.jpg",
  },
  {
    id: 16,
    title: "Floating Solar Structures",
    description:
      "UV-stabilized HDPE floating systems harnessing solar power over water bodies — durable & corrosion-resistant.",
    image: "https://ik.imagekit.io/demo/floating-solar.jpg",
  },
];

/* ===== Component ===== */
export default function SolarProductsPage() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4fb] overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${PRIMARY}22` }}
        animate={{ y: [0, 25, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${ACCENT}33` }}
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: PRIMARY }}
          >
            Our Solar Products
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Sky Volt Renewable Pvt. Ltd., we offer a wide range of high-quality solar products for residential, commercial and industrial use — engineered for efficiency, reliability and long-term performance.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SOLAR_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: i * 0.03 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border"
              style={{ borderColor: `${PRIMARY}25` }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3
                  className="text-2xl font-semibold group-hover:text-[#2469ad] transition-colors"
                  style={{ color: PRIMARY }}
                >
                  {product.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Floating index badge */}
              <div
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
                style={{
                  backgroundColor: ACCENT,
                  color: PRIMARY,
                  fontWeight: 700,
                }}
              >
                {product.id}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <button
            className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white rounded-full overflow-hidden group"
            style={{ backgroundColor: PRIMARY }}
          >
            <span className="z-10">Request a Custom Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#fcc012] to-[#ffd84a] opacity-0 group-hover:opacity-100 transition duration-500"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
