"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ResponsiveMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center items-center"
    >
      <div className="w-full max-w-7xl">
        {/* Responsive iframe wrapper */}
        <div className="relative w-full h-64 sm:h-80 md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121804.27226221997!2d78.29514159726563!3d17.441349000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915107a3668d%3A0x9287278fc3fa57d5!2sSky%20Volt%20Renewables%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1764575520329!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}
