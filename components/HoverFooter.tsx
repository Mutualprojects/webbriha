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
import { TextHoverEffect } from "./TextHoverEffect";
import Image from "next/image";
import skyvoltfooter_logo from '../app/images/Skyvolt.png'


/* ================================================
   Hover Footer Component (All-in-One Version)
   ================================================ */
export default function HoverFooter() {
  /* ========= Text Hover Effect ========= */
 

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
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
           { label: "Rooftop Solar", href: "/solar-installations/rooftop-solar-systems" },
        { label: "Ground-Mounted", href: "/solar-installations/ground-mounted-solar-systems" },
        { label: "Solar Street Lights", href: "/solar-installations/solar-street-lights", },
        { label: "FAQs", href: "/faq" },
  
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#facc15]" />,
      text: "info@skyvolts.in",
      href: "mailto:info@skyvolts.in",
    },
    {
      icon: <Phone size={18} className="text-[#facc15]" />,
      text: "+91 90634 70204",
      href: "tel:+90634 70204",
    },
     {
      icon: <Phone size={18} className="text-[#facc15]" />,
      text: "+91 63006 99999",
      href: "tel:+63006 99999",
    },
    {
      icon: <MapPin size={18} className="text-[#facc15]" />,
      text: "Hyderabad, India",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "instagram", href: "https://www.instagram.com/skyvolts_official/" },
    { icon: <Instagram size={20} />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61582996346398" },
    { icon: <Twitter size={20} />, label: "Linkedin", href: " https://www.linkedin.com/company/sky-volt-renewable-pvt-ltd/posts/?feedView=all" },
    // { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    // { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  /* ========= MAIN FOOTER ========= */
  return (
    <footer className="relative h-fit rounded-3xl overflow-hidden m-6">
      <div className="max-w-7xl mx-auto p-10 sm:p-14 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-10 mt-14">
            <div className="flex items-center space-x-2">
              {/* <span className="text-[#facc15] text-3xl font-extrabold"></span> */}
              <span className="text-[#07518a] text-3xl font-bold">
                <Image src={skyvoltfooter_logo}/>
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
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full "></span>
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
        <TextHoverEffect
        text="SKYVOLT"
        duration={0.5}
        className="w-[100%] sm:w-[60%] lg:w-[60%]"
      />
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
            © {new Date().getFullYear()} Sky Volts Renewables Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>

     

      <FooterBackgroundGradient />
    </footer>
  );
}