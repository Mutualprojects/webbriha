"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CircularTestimonials } from "@/components/Circular-Testmonials";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "The solar installation process was very smooth and professional. My electricity bill dropped significantly within the first month itself. Excellent service by the team!",
    name: "Ashok Reddy",
    designation: "Home Owner, Hyderabad",
    src: "/Ashok Reddy Sir-1.png",
  },
  {
    quote:
      "I opted for a rooftop solar system for my commercial building. Brihaspathi’s engineers explained everything clearly and completed the installation on time. Highly recommended!",
    name: "R. Mallesh Goud",
    designation: "Commercial Property Owner, Warangal",
    src: "/R Mallesh Goud-1.png",
  },
  {
    quote:
      "Their after-sales support is top-notch. Whenever I needed help, the team responded immediately. Very reliable solar service provider in Telangana.",
    name: "Shreedhar Reddy",
    designation: "Farmer, Nalgonda",
    src: "/Shreedhar Reddy sir-1.png",
  },
];


export const CircularTestimonialsDemo = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-20 py-24 bg-gradient-to-b from-white via-[#f9f9fb] to-[#eef1f4] relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-[#00A6FB]/10 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#07518a]/10 rounded-full blur-3xl bottom-0 right-10"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center space-y-3"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#07518a]">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from customers who’ve experienced excellence with us.
        </p>
      </motion.div>

      {/* Testimonial Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-2xl p-10 md:p-16 mx-auto max-w-[1400px]"
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </motion.div>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="flex justify-center"
      >
        <motion.button
          type="button"
          onClick={() => router.push("/testimonials")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 bg-[#07518a] text-white text-lg font-semibold px-8 py-3 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#064374] hover:shadow-lg"
          aria-label="View all testimonials"
        >
          <span>View All Testimonials</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowRight className="text-yellow-300" />
          </motion.span>

          {/* Glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#00A6FB]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CircularTestimonialsDemo;
