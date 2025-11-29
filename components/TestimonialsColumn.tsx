"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface Testimonial {
  text: string;
  image: string | StaticImageData;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  duration = 18,
  className = "",
}) => {
  // Simple infinite vertical scroll animation
  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white/80 shadow-sm p-5 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-[0.95rem] text-gray-700 leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
