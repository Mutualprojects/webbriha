"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

// ====== Motion Variant (TypeScript-safe) ======
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1), // ✅ replaces "easeOut" safely
    },
  },
};

// ====== Component ======
export default function BlogsInsights() {
  const blogs = [
    {
      id: 1,
      category: "SOLAR",
      title: "How Rooftop Solar is Changing Urban India",
      date: "Aug 23, 2024",
      comments: "2 Comments",
      image:
        "https://img.freepik.com/free-photo/solar-panels-rooftop_23-2148752588.jpg?t=st=1730400000~exp=1731004800~hmac=f50acb7b6f5f8b3d5f6d7f1f5b5f2b41bbac8a62",
    },
    {
      id: 2,
      category: "POLICY",
      title: "Understanding OPEX vs CAPEX for Solar Projects",
      date: "Aug 22, 2024",
      comments: "No Comments",
      image:
        "https://img.freepik.com/free-photo/solar-farm-field-renewable-energy_53876-104211.jpg",
    },
    {
      id: 3,
      category: "INNOVATION",
      title: "Smart Energy Management – Real World Success Stories",
      date: "Aug 20, 2024",
      comments: "4 Comments",
      image:
        "https://img.freepik.com/free-photo/engineers-monitoring-energy-efficiency-smart-system_23-2149156894.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADING ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <p className="text-sm tracking-widest text-gray-500 uppercase font-medium">
              Blog & Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Latest news and insights from{" "}
              <span className="text-yellow-400">industry</span>
            </h2>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0 max-w-xl">
            Stay updated with the latest in{" "}
            <span className="text-[#07518a] font-medium">
              solar innovation
            </span>
            , India’s renewable energy policies, case studies, and practical
            tips for optimizing your energy systems.
          </p>
        </motion.div>

        {/* ===== BLOG CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold tracking-wider text-[#07518a] uppercase mb-2">
                  {blog.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2 hover:text-[#07518a] transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {blog.date} • {blog.comments}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
