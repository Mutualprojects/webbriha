"use client";

import React from "react";
import AboutSplitFullBleed from "@/components/AboutSplitFullBleed";
import TrustedServices from "@/components/TrustedServices";
import india from "@/app/images/Home/583.jpg";
import SolarSmart from '../app/images/Trusted/2917 (1).jpg'
import GreenTech  from '../app/images/Trusted/42376.jpg'
import EcoPower  from '../app/images/Trusted/489.jpg'


const aboutSection = {
  title: "Powering India’s Clean Energy Future",
  subtitle:
    "Sky Volts Renewable Private Limited is a leading solar EPC company in India, headquartered in Hyderabad, Telangana.",
  content:
    "As a trusted name among the top rooftop solar companies in India, we provide turnkey EPC solutions for residential, commercial, and industrial projects. Founded with a vision to electrify every household through clean solar energy, we deliver reliable, innovative, and sustainable solar solutions that drive economic growth and environmental stewardship.",
};

const trustedServices = [
  {
    title: "SolarSmart systems",
    description:
      "Install advanced solar energy systems to help reduce costs and your carbon footprint.",
    image:
      SolarSmart,
  },
  {
    title: "GreenTech innovations",
    description:
      "Developing and implementing cutting-edge technologies to protect the planet.",
    image:
     GreenTech,
  },
  {
    title: "EcoPower resources",
    description:
      "Advanced solutions for transitioning to sustainable and clean energy.",
    image:
     EcoPower,
  },
];

export default function HomeSecondComp() {
  return (
    <div className="bg-[#f5fbf7] text-gray-800 w-full overflow-hidden">
      <AboutSplitFullBleed image={india} about={aboutSection} />
      <TrustedServices services={trustedServices} />
    </div>
  );
}
