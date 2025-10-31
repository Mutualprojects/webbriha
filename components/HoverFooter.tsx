"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================================================
   Hover Footer Component (All-in-One Version)
   ================================================ */
export default function HoverFooter() {
  /* ========= Text Hover Effect ========= */
  const TextHoverEffect = ({
    text,
    duration,
    className,
  }: {
    text: string;
    duration?: number;
    className?: string;
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({
      cx: "50%",
      cy: "50%",
    });

    useEffect(() => {
      if (svgRef.current && cursor.x !== null && cursor.y !== null) {
        const rect = svgRef.current.getBoundingClientRect();
        const cx = ((cursor.x - rect.left) / rect.width) * 100;
        const cy = ((cursor.y - rect.top) / rect.height) * 100;
        setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
      }
    }, [cursor]);

    return (
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 250"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className={`select-none uppercase cursor-pointer ${className}`}
      >
        <defs>
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
            {hovered && (
              <>
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="25%" stopColor="#07518a" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0.3, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-neutral-300 font-[helvetica] text-7xl font-bold"
          style={{ opacity: hovered ? 0.5 : 0 }}
        >
          {text}
        </text>

        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-[#07518a] font-[helvetica] text-7xl font-bold"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {text}
        </motion.text>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
        >
          {text}
        </text>
      </svg>
    );
  };

  /* ========= Background Gradient ========= */
  const FooterBackgroundGradient = () => (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "",
      }}
    />
  );

  /* ========= Footer Data ========= */
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        { label: "Live Chat", href: "#", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#facc15]" />,
      text: "info@skyvoltsolar.com",
      href: "mailto:info@skyvoltsolar.com",
    },
    {
      icon: <Phone size={18} className="text-[#facc15]" />,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: <MapPin size={18} className="text-[#facc15]" />,
      text: "Hyderabad, India",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  /* ========= MAIN FOOTER ========= */
  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-6">
      <div className="max-w-7xl mx-auto p-10 sm:p-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#facc15] text-3xl font-extrabold">⚡</span>
              <span className="text-[#07518a] text-3xl font-bold">
                Sky Volts
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#07518a]">
              Delivering clean, dependable, and innovative solar power solutions
              for a sustainable tomorrow.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#facc15] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#facc15] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#facc15] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#facc15] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
         {/* Hover text effect */}
      <div className="hidden lg:flex h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="SkyVolts" />
      </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#facc15] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Sky Volts Renewable Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>

     

      <FooterBackgroundGradient />
    </footer>
  );
}