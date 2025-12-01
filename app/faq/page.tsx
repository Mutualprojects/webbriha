"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is solar energy and how does it work in India?",
    answer:
      "Solar energy is power generated from sunlight using solar panels, which convert sunlight into electricity. Sky Volt Renewables designs and installs efficient solar systems across India for homes, businesses, and industries.",
  },
  {
    question: "Why should I install a solar power system in India?",
    answer:
      "Installing solar reduces electricity bills, ensures energy independence, and helps India transition to clean, renewable energy while lowering your carbon footprint.",
  },
  {
    question: "How long do solar panels last in Indian climates?",
    answer:
      "High-quality solar panels last 25+ years, maintaining over 80% efficiency even under hot, humid, or dusty Indian conditions.",
  },
  {
    question: "Do solar systems require maintenance in India?",
    answer:
      "Yes, minimal maintenance is needed. Panel cleaning is recommended every 15–30 days, and annual system checks ensure maximum performance.",
  },
  {
    question: "Why trust Sky Volt Renewables for solar EPC projects Pan India?",
    answer:
      `We are a leading solar EPC company in India, offering:\n
• Turnkey rooftop, ground-mounted, on-grid, off-grid, and hybrid solar solutions\n
• MNRE-approved panels, inverters, and equipment\n
• End-to-end installation, maintenance, and financing support\n
• Projects across residential, commercial, industrial, and government sectors`,
  },
  {
    question: "Which industries can benefit from solar EPC services in India?",
    answer:
      `Industries that benefit include:\n
• Homes & Apartments\n
• Offices & Warehouses\n
• Factories & Manufacturing Plants\n
• Educational Institutions & Hospitals\n
• Government & Utility Projects`,
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900"
        >
          Frequently Asked <span className="text-[#07518a]">Questions</span>
        </motion.h1>

        <p className="text-center mt-4 text-gray-600 text-lg">
          Find answers about solar energy, benefits, and how Sky Volt Renewables supports your clean energy journey.
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#07518a] text-xl"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600 whitespace-pre-line"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
