"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/TestimonialsColumn";

const testimonials: Testimonial[] = [
  {
    text:
      "sky volts handled our rooftop solar installation end-to-end. The team was punctual, explained the system clearly, and my power bills dropped noticeably in the first month.",
    image: "/Ashok Reddy Sir-1.png",
    name: "Ashok Reddy",
    role: "Home Owner — Hyderabad",
  },
  {
    text:
      "We installed a 10 kW system for our shop in Secunderabad. The engineers optimized panels for maximum yield and completed installation within a day. Excellent workmanship.",
    image: "/R Mallesh Goud-1.png",
    name: "R. Mallesh Goud",
    role: "Shop Owner — Secunderabad",
  },
  {
    text:
      "After switching to a solar + battery solution, our farmhouse near Nalgonda has reliable power even during outages. The after-sales support is fast and helpful.",
    image: "/Shreedhar Reddy sir-1.png",
    name: "Shreedhar Reddy",
    role: "Farmer — Nalgonda",
  },
  {
    text:
      "The Hyderabad team provided a site assessment and suggested the best orientation for panels. Installation was neat and the inverter setup is working flawlessly.",
    image: "/Ashok Reddy Sir.png",
    name: "Priya Kumar",
    role: "Resident — Kukatpally, Hyderabad",
  },
  {
    text:
      "We upgraded our commercial building with a rooftop solar plant. The project management was professional and the ROI estimates matched reality.",
    image: "/R Mallesh Goud.png",
    name: "K. Ramesh",
    role: "Facility Manager — Warangal",
  },
  {
    text:
      "Their maintenance plan keeps our system performing well. Technicians visit promptly for cleaning and checks, which improved our monthly energy yield.",
    image: "/Shreedhar Reddy sir.png",
    name: "S. Anitha",
    role: "Small Business Owner — Karimnagar",
  },
  {
    text:
      "We appreciated the clear financing options and government subsidy guidance. Installation at our villa in Hyderabad was smooth and on schedule.",
    image: "/Ashok Reddy Sir-1.png",
    name: "M. Srinivas",
    role: "Villa Owner — Hyderabad",
  },
  {
    text:
      "The team calibrated panel angles to maximize output throughout the year. Our factory's energy expenses reduced significantly after installation.",
    image: "/R Mallesh Goud-1.png",
    name: "R. Satyanarayana",
    role: "Factory Owner — Medchal",
  },
  {
    text:
      "Responsive technicians and reliable performance — the battery backup saved critical operations during a recent outage. Highly recommended for rural homes.",
    image: "/Shreedhar Reddy sir-1.png",
    name: "Laxmi Devi",
    role: "Home Owner — Nizamabad",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
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
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
