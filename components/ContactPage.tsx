"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // FIXED
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4, ease: [0.42, 0, 0.58, 1] }, // FIXED
  }),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-center"
          variants={containerVariants}
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Contact <span className="text-[#FCC012]">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We are available for questions, feedback, or collaboration
            opportunities. Let us know how we can help!
          </p>

          <div className="mt-8 space-y-4">
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 9553339219
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span> info@skyvolts.in{" "}
              <a
                href="mailto:info@skyvolts.in"
                className="text-[#FCC012] hover:underline"
              >
                Send Email
              </a>
            </p>
            <p>
              <span className="font-semibold">🌐 Web:</span>{" "}
              <a
                href="https://skyvolts.in"
                className="text-[#FCC012] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skyvolts.in
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Section / Form */}
        <motion.form
          className="bg-white shadow-xl rounded-2xl p-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["First Name", "Last Name"].map((label, i) => (
              <motion.div key={label} custom={i} variants={fieldVariants}>
                <label className="font-semibold block mb-1 text-gray-700">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={label}
                  className="w-full border rounded-lg px-4 py-3 focus:border-[#FCC012] focus:ring-2 focus:ring-[#07518a]/30 outline-none"
                />
              </motion.div>
            ))}
          </div>

          <motion.div custom={2} variants={fieldVariants} className="mt-4">
            <label className="font-semibold block mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:border-[#FCC012] focus:ring-2 focus:ring-[#07518a]/30 outline-none"
            />
          </motion.div>

          <motion.div custom={3} variants={fieldVariants} className="mt-4">
            <label className="font-semibold block mb-1 text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 focus:border-[#FCC012] focus:ring-2 focus:ring-[#07518a]/30 outline-none"
            />
          </motion.div>

          <motion.div custom={4} variants={fieldVariants} className="mt-4">
            <label className="font-semibold block mb-1 text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows={4}
              className="w-full border rounded-lg px-4 py-3 focus:border-[#FCC012] focus:ring-2 focus:ring-[#07518a]/30 outline-none resize-none"
            ></textarea>
          </motion.div>

          <motion.div custom={5} variants={fieldVariants} className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#FCC012] text-black font-semibold py-3 rounded-lg hover:bg-[#ECC002] transition-all duration-200"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}
