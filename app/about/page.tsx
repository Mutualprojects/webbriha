"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import HeaderHero from "@/components/ui/HeaderHero";


const abot_image='/About page.jpg'
const PRIMARY = "#2469ad"; // blue
const ACCENT = "#fcc012";  // gold

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== HERO (your existing component) ===== */}
      <HeaderHero />

      {/* ===== OUR STORY SECTION (brand themed) ===== */}
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef4fb] overflow-hidden">
        {/* Floating brand blobs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${PRIMARY}20` }}
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${ACCENT}25` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto space-y-24">
          {/* ===== Our Story ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: PRIMARY }}
              >
                Our Story
              </span>
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </div>

            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: PRIMARY }}
            >
              Be Part of Our Solar Energy Journey
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sky Volt Renewable Pvt. Ltd. is a leading solar EPC company in India,
              delivering turnkey solar solutions that empower businesses, institutions,
              and homeowners to harness the power of the sun. Our mission is to make
              clean energy accessible, affordable, and reliable — driving India’s transition
              toward a sustainable future.
              <span className="block mt-4 text-gray-600">
                We combine innovation, technology, and expertise to design, install, and
                maintain high-performance on-grid, off-grid, and hybrid solar systems.
                Every project reflects our commitment to green energy, quality engineering,
                and long-term performance.
              </span>
            </p>
          </motion.div>

          {/* ===== Sustainability Meets Innovation ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: PRIMARY }}>
                Sustainability Meets Innovation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Sky Volt Renewable Pvt. Ltd., we believe in powering progress responsibly.
                From rooftop and ground-mounted solar installations to industrial and commercial
                solar EPC projects, we deliver end-to-end solar solutions that reduce carbon
                footprint and maximize energy efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal is simple — to build a brighter, cleaner, and more energy-secure
                tomorrow, one solar project at a time.
              </p>

              <Button
                label="Learn More"
                icon="pi pi-sun"
                className="text-white font-semibold"
                rounded
                // PrimeReact respects inline styles + utility classes
                style={{ backgroundColor: PRIMARY, borderColor: PRIMARY }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.backgroundColor = "#1f5e98";
                  e.currentTarget.style.borderColor = "#1f5e98";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.backgroundColor = PRIMARY;
                  e.currentTarget.style.borderColor = PRIMARY;
                }}
              />
            </div>

            <motion.img
              src={abot_image}
              alt="Sustainability"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border"
              style={{ borderColor: `${PRIMARY}22` }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 240 }}
            />
          </motion.div>

          {/* ===== Mission & Vision ===== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="text-center space-y-12"
          >
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY }}>
              Our Mission & Vision
            </h3>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition border"
                   style={{ borderColor: `${PRIMARY}1A` }}>
                <h4 className="text-2xl font-semibold mb-3" style={{ color: PRIMARY }}>
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To accelerate India’s transition towards a sustainable energy future by
                  delivering affordable, innovative, and efficient solar solutions for homes,
                  businesses, and institutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition border"
                   style={{ borderColor: `${PRIMARY}1A` }}>
                <h4 className="text-2xl font-semibold mb-3" style={{ color: PRIMARY }}>
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To become a leading force in India’s clean energy revolution — one that powers
                  progress, promotes green innovation, and preserves the planet for future generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===== Core Values ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-center" style={{ color: PRIMARY }}>
              Our Core Values
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Sustainability",
                  desc: "We drive eco-friendly initiatives that reduce carbon footprints.",
                },
                {
                  title: "Integrity",
                  desc: "Honesty and transparency in every project and partnership.",
                },
                {
                  title: "Innovation",
                  desc: "Engineering smarter energy systems for modern India.",
                },
                {
                  title: "Customer Commitment",
                  desc: "Delivering value, reliability, and satisfaction beyond expectations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition border"
                  style={{ borderColor: `${ACCENT}33` }}
                >
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <h4 className="text-xl font-semibold" style={{ color: PRIMARY }}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== Why Choose Us ===== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="text-center space-y-10"
          >
            <h3 className="text-3xl font-bold" style={{ color: PRIMARY }}>
              Why Choose Sky Volt Renewables Pvt. Ltd.
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Proven track record with 5MW+ projects completed, and 1MW under execution.",
                "Certified EPC expertise recognized by MNRE and leading industry bodies.",
                "End-to-end in-house capabilities — from design to maintenance.",
                "Tailored solar solutions for every scale — residential, commercial, and industrial.",
                "Strong focus on long-term sustainability and customer satisfaction.",
                "Driven by a team of passionate renewable energy professionals.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white p-6 rounded-xl shadow-md text-gray-700 hover:shadow-lg border"
                  style={{ borderColor: `${PRIMARY}14` }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-block h-3 w-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span>{text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== CTA ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 md:p-10 shadow-xl border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "white", borderColor: `${PRIMARY}22` }}
          >
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold" style={{ color: PRIMARY }}>
                Ready to Power Your Future?
              </h4>
              <p className="text-gray-700">
                Let’s design a tailored solar solution for your home or business.
              </p>
            </div>
            <Button
              label="Get in Touch"
              icon="pi pi-arrow-right"
              className="text-white font-semibold"
              rounded
              style={{ backgroundColor: ACCENT, borderColor: ACCENT, color: "#0a0a0a" }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.filter = "brightness(0.95)";
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.filter = "none";
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
