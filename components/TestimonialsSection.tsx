"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TestimonialsColumn, type Testimonial } from "@/components/TestimonialsColumn";

// ====== Import Images Correctly from app/images or public folder ======
// Recommended: Move images to /public folder and reference using "/filename.png"
// If you're using the "app/images" folder, import like below 👇

import AshokReddy1 from "@/app/images/Ashok Reddy Sir-1.png";
import AshokReddy2 from "@/app/images/Ashok Reddy Sir.png";
import MalleshGoud1 from "@/app/images/R Mallesh Goud-1.png";
import MalleshGoud2 from "@/app/images/R Mallesh Goud.png";
import Shreedhar1 from "@/app/images/Shreedhar Reddy sir-1.png";
import Shreedhar2 from "@/app/images/Shreedhar Reddy sir.png";
import Anuradha from '@/app/images/Screenshot 2025-12-09 143046 (1).png'

// ====== Testimonials Data ======
const testimonials: Testimonial[] = [
   {
    text:
      "The service was very good. Whenever we needed help, the team responded quickly. A reliable solar provider — we are very happy with the installation at our home in Shamshabad.",
    image: Anuradha,
    name: "Architect’s Wife, Shamshabad",
    role: "Home Owner — Hyderabad",
  },
    {
    text:
      "Sky Volts handled our rooftop solar installation end-to-end. The team was punctual, explained the system clearly, and my power bills dropped noticeably in the first month.",
    image: AshokReddy1,
    name: "Ashok Reddy",
    role: "Home Owner — Hyderabad",
  },
  {
    text:
      "Sky Volts handled our rooftop solar installation end-to-end. The team was punctual, explained the system clearly, and my power bills dropped noticeably in the first month.",
    image: AshokReddy1,
    name: "Ashok Reddy",
    role: "Home Owner — Hyderabad",
  },
  {
    text:
      "We installed a 10 kW system for our shop in Secunderabad. The engineers optimized panels for maximum yield and completed installation within a day. Excellent workmanship.",
    image: MalleshGoud1,
    name: "R. Mallesh Goud",
    role: "Shop Owner — Secunderabad",
  },
  {
    text:
      "After switching to a solar + battery solution, our farmhouse near Nalgonda has reliable power even during outages. The after-sales support is fast and helpful.",
    image: Shreedhar1,
    name: "Shreedhar Reddy",
    role: "Farmer — Nalgonda",
  },
  {
    text:
      "The Hyderabad team provided a site assessment and suggested the best orientation for panels. Installation was neat and the inverter setup is working flawlessly.",
    image: AshokReddy2,
    name: "Priya Kumar",
    role: "Resident — Kukatpally, Hyderabad",
  },
  {
    text:
      "We upgraded our commercial building with a rooftop solar plant. The project management was professional and the ROI estimates matched reality.",
    image: MalleshGoud2,
    name: "K. Ramesh",
    role: "Facility Manager — Warangal",
  },
  {
    text:
      "Their maintenance plan keeps our system performing well. Technicians visit promptly for cleaning and checks, which improved our monthly energy yield.",
    image: Shreedhar2,
    name: "S. Anitha",
    role: "Small Business Owner — Karimnagar",
  },
  {
    text:
      "We appreciated the clear financing options and government subsidy guidance. Installation at our villa in Hyderabad was smooth and on schedule.",
    image: AshokReddy1,
    name: "M. Srinivas",
    role: "Villa Owner — Hyderabad",
  },
  {
    text:
      "The team calibrated panel angles to maximize output throughout the year. Our factory's energy expenses reduced significantly after installation.",
    image: MalleshGoud1,
    name: "R. Satyanarayana",
    role: "Factory Owner — Medchal",
  },
  {
    text:
      "Responsive technicians and reliable performance — the battery backup saved critical operations during a recent outage. Highly recommended for rural homes.",
    image: Shreedhar1,
    name: "Laxmi Devi",
    role: "Home Owner — Nizamabad",
  },
];

// Split testimonials into 3 columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// ====== Component ======
export default function TestimonialsSection() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        {/* ====== Header Text ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What Our Users Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        {/* ====== Testimonials Scrolling Columns ====== */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
