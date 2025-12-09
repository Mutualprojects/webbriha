"use client";

import React from "react";
import Image from "next/image";
import SOLAR_INSTALLATIONS_DATA from "@/app/solar-installations/data";

type Props = {
  slug: string;
};

export default function InstallationDetail({ slug }: Props) {
  // Find the installation matching the slug
  const installation = SOLAR_INSTALLATIONS_DATA.items.find(
    (item) => item.slug === slug
  );

  // If not found, show a simple fallback (Cloudflare safe)
  if (!installation) {
    return (
      <div className="py-20 text-center text-2xl font-semibold text-gray-600">
        Installation not found.
      </div>
    );
  }

  const { 
    name,
    summary,
    description,
    features,
    tags,
    bannerImage,
    image,
    cta
  } = installation;

  return (
    <div className="w-full">
      
      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt={name}
          fill
          className="object-cover brightness-[0.55]"
        />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            {name}
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            {summary}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            {description?.overview && (
              <div>
                <h2 className="text-3xl font-bold text-[#07518a] mb-4">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {description.overview}
                </p>
              </div>
            )}

            {/* Other sections */}
            {Object.entries(description || {})
              .filter(([key, val]) => key !== "overview" && val)
              .map(([key, val]) => (
                <div key={key}>
                  <h2 className="text-3xl font-bold text-[#07518a] capitalize mb-4">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {val as string}
                  </p>
                </div>
              ))}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-10">

            {/* Features */}
            <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-[#07518a] mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">●</span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Image */}
            {image && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image src={image} alt={name} className="object-cover w-full" />
              </div>
            )}

            {/* Tags */}
            <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-[#07518a] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-[#07518a] rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {cta && (
              <a
                href={cta.href}
                className="block text-center bg-[#07518a] hover:bg-[#0a6eb6] text-white text-lg font-semibold py-3 rounded-xl transition"
              >
                {cta.label}
              </a>
            )}

          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-[#07518a] text-white py-14 text-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Looking for a Custom Solar Solution?</h2>
        <p className="text-lg opacity-90">
          Our experts will guide you with the best EPC options.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-white text-[#07518a] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
