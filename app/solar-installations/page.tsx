"use client";

import SOLAR_INSTALLATIONS_DATA from "./data";
import Image from "next/image";
import Link from "next/link";

export default function SolarInstallationsMainPage() {
  const items = SOLAR_INSTALLATIONS_DATA.items;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 mt-14 overflow-x-hidden">

      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#07518a]">
          {SOLAR_INSTALLATIONS_DATA.hero.title}
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          {SOLAR_INSTALLATIONS_DATA.hero.blurb}
        </p>

        <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-[#07518a] to-[#fcc012] rounded-full"></div>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/solar-installations/${item.slug}`}
            className="group bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Card Image */}
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#07518a] group-hover:text-[#0a7bd1] transition">
                {item.name}
              </h3>

              <p className="text-gray-600 mt-3 line-clamp-3">
                {item.summary}
              </p>

              <div className="mt-4 flex items-center text-[#07518a] font-semibold group-hover:gap-2 transition-all">
                View Details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
