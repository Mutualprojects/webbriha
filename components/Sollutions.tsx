"use client";

import Image from "next/image";
import Link from "next/link";

/* ==== INLINE DATA FOR MAIN PAGE (SHORT VERSION) ==== */
const SOLAR_INSTALLATIONS = [
  {
    id: "rooftop",
    name: "Rooftop Solar Systems",
    slug: "rooftop-solar-systems",
    summary: "High-efficiency rooftop solar systems for homes and industries.",
    image: "/images/SolutionPage/Rooftop.png",
  },
  {
    id: "ground",
    name: "Ground Mounted Solar Systems",
    slug: "ground-mounted-solar-systems",
    summary: "Large-scale solar power generation for open land areas.",
    image: "/images/SolutionPage/GroundMounted.png",
  },
  {
    id: "floating",
    name: "Floating Solar Systems",
    slug: "floating-solar-systems",
    summary: "Next-generation solar power over lakes and reservoirs.",
    image: "/images/SolutionPage/Floating.png",
  },
  // ➜ Add the rest of your items here
];

export default function SolarInstallationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[#07518a] mb-10">
        Solar Installation Solutions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SOLAR_INSTALLATIONS.map((item) => (
          <Link
            key={item.id}
            href={`/solar-installations/${item.slug}`}
            className="rounded-xl overflow-hidden border shadow hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="object-cover w-full h-56"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#07518a]">
                {item.name}
              </h3>
              <p className="text-gray-700 mt-2">{item.summary}</p>
              <p className="mt-3 text-[#07518a] font-semibold">Learn More →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
