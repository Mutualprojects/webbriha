// src/data/solarInstallations/data.ts

/* ========= Types ========= */
export type Feature = {
  label: string;
};

export type SolarInstallation = {
  id: string;                 // stable key
  name: string;               // display title
  slug: string;               // url-safe slug
  category: "Rooftop" | "Ground-mounted" | "Shed-mounted" | "Fencing" | "Street Lighting" | "Water Heating" | "Pumps" | "Wall-mounted" | "Floating";
  summary: string;            // short paragraph for cards
  features: Feature[];        // bullet points
  tags: string[];             // for filtering/search
  icon?: string;              // optional icon name/path
  image?: string;             // optional hero image path
  cta?: { label: string; href: string }; // optional CTA
};

export type SolarInstallationsDataset = {
  hero: {
    title: string;
    subtitle: string;
    blurb: string;
  };
  items: SolarInstallation[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
};

/* ========= Data ========= */
export const SOLAR_INSTALLATIONS_DATA: SolarInstallationsDataset = {
  hero: {
    title: "Our Solar Installation Systems",
    subtitle:
      "Power your world with Sky Volt Renewable Pvt. Ltd.",
    blurb:
      "A leading solar EPC company in India offering advanced, high-performance solar solutions for every need — from rooftop panels to floating solar systems. We deliver reliability, innovation, and sustainability in every project.",
  },

  items: [
    {
      id: "rooftop-solar",
      name: "Rooftop Solar Systems",
      slug: "rooftop-solar-systems",
      category: "Rooftop",
      summary:
        "Turn your roof into a power source for homes, offices, and industries with high-efficiency rooftop solar.",
      features: [
        { label: "Save More, Earn More – Reduce electricity bills and gain long-term energy independence." },
        { label: "Smart Energy Solutions – Ideal for residential, commercial, and industrial setups looking to switch to clean energy." },
        { label: "Seamless Integration – Compatible with on-grid, off-grid, and hybrid systems." },
        { label: "Quality You Can Trust – Premium modules and inverters from trusted manufacturers." },
        { label: "Certified & Approved – Complies with MNRE standards and DISCOM net-metering policies." },
        { label: "Trusted Solar Company in Hyderabad – End-to-end design, supply, and installation." },
      ],
      tags: ["rooftop", "on-grid", "off-grid", "hybrid", "MNRE", "net metering"],
      icon: "/icons/rooftop.svg",
      image: "/images/solar/rooftop.jpg",
      cta: { label: "Get Rooftop Quote", href: "/contact?type=rooftop" },
    },

    {
      id: "ground-mounted",
      name: "Ground-Mounted Solar Systems",
      slug: "ground-mounted-solar-systems",
      category: "Ground-mounted",
      summary:
        "Utility-scale and industrial ground plants engineered for maximum generation and long-term savings.",
      features: [
        { label: "Ideal for industrial facilities, farmlands, and institutional projects across India." },
        { label: "Optimized Performance – Tilt-adjustable galvanized structures for maximum irradiance capture." },
        { label: "Scalable & Reliable – Flexible capacities for utility and C&I EPC projects." },
        { label: "Low Maintenance, High ROI – Minimized O&M with consistent output." },
        { label: "Trusted Expertise – Precise execution and compliance at every stage." },
        { label: "Complete EPC – From design to commissioning for solar farms and power plants." },
      ],
      tags: ["ground-mounted", "utility-scale", "C&I", "tilt-structure", "EPC"],
      icon: "/icons/ground.svg",
      image: "/images/solar/ground.jpg",
      cta: { label: "Plan a Ground Plant", href: "/contact?type=ground-mounted" },
    },

    {
      id: "shed-mounted",
      name: "Shed-Mounted Solar Systems",
      slug: "shed-mounted-solar-systems",
      category: "Shed-mounted",
      summary:
        "Convert factory sheds and warehouses into clean power generators while improving workspace comfort.",
      features: [
        { label: "Dual-Purpose – Shade + power generation for industrial sheds." },
        { label: "Durable & Weatherproof – Corrosion-resistant mounting for long life." },
        { label: "Energy Efficiency Boost – Reduces internal heat, improving conditions and savings." },
        { label: "Seamless Integration – Connects to existing electrical infrastructure." },
        { label: "Smart Investment – Reliable EPC for commercial and industrial users." },
      ],
      tags: ["shed", "warehouse", "industrial", "retrofit"],
      icon: "/icons/shed.svg",
      image: "/images/solar/shed.jpg",
      cta: { label: "Assess Your Shed", href: "/contact?type=shed-mounted" },
    },

    {
      id: "solar-fencing",
      name: "Solar Fencing Systems",
      slug: "solar-fencing-systems",
      category: "Fencing",
      summary:
        "Solar-powered electric fencing for farms, factories, and residential compounds with robust battery backup.",
      features: [
        { label: "Reliable Solar Operation – Independent of grid with strong backup." },
        { label: "24/7 Security – Minimal maintenance for continuous protection." },
        { label: "Durable & Cost-Effective – Built for long-term performance." },
        { label: "Easy & Safe Installation – Modern safety standards and quick setup." },
        { label: "Custom Solutions – Tailored perimeter protection by property type." },
      ],
      tags: ["fencing", "security", "battery-backup", "farm", "industrial"],
      icon: "/icons/fence.svg",
      image: "/images/solar/fencing.jpg",
      cta: { label: "Secure Your Perimeter", href: "/contact?type=solar-fencing" },
    },

    {
      id: "street-lights",
      name: "Solar Street Lights",
      slug: "solar-street-lights",
      category: "Street Lighting",
      summary:
        "Smart, all-in-one solar street lighting with dusk-to-dawn automation for roads, parks, and campuses.",
      features: [
        { label: "Automatic Operation – Dusk-to-dawn control for hassle-free lighting." },
        { label: "Bright & Efficient – High-lumen LEDs for safety and visibility." },
        { label: "All-in-One Design – Integrated panel, battery, and controller." },
        { label: "Versatile Applications – Streets, townships, parks, campuses." },
        { label: "Low Maintenance – Zero electricity cost with long service life." },
      ],
      tags: ["street-light", "all-in-one", "LED", "public-infra"],
      icon: "/icons/streetlight.svg",
      image: "/images/solar/streetlight.jpg",
      cta: { label: "Light Up Public Spaces", href: "/contact?type=street-lights" },
    },

    {
      id: "solar-water-heaters",
      name: "Solar Water Heaters",
      slug: "solar-water-heaters",
      category: "Water Heating",
      summary:
        "Efficient, low-maintenance solar hot-water systems for homes, hotels, hospitals, and hostels.",
      features: [
        { label: "Efficient Solar Technology – Cuts electricity usage for heating." },
        { label: "Model Options – FPC (Flat Plate) and ETC (Evacuated Tube) variants." },
        { label: "Durable & Corrosion-Resistant – Built for long service." },
        { label: "Year-Round Supply – Reliable hot water from renewable energy." },
        { label: "Eco-Friendly & Cost-Effective – Sustainable comfort with savings." },
      ],
      tags: ["water-heater", "FPC", "ETC", "domestic", "commercial"],
      icon: "/icons/waterheater.svg",
      image: "/images/solar/waterheater.jpg",
      cta: { label: "Choose Your Heater", href: "/contact?type=water-heater" },
    },

    {
      id: "solar-pumpsets",
      name: "Solar Pumpsets",
      slug: "solar-pumpsets",
      category: "Pumps",
      summary:
        "Off-grid/remote irrigation made reliable and affordable for borewells, open wells, and drip systems.",
      features: [
        { label: "Versatile – Works for borewells, open wells, and micro-irrigation." },
        { label: "Off-Grid Performance – Reliable in non-electrified regions." },
        { label: "Energy & Cost Savings – Reduces diesel and grid dependence." },
        { label: "Model Variants – AC and DC pumps; subsidy options for eligible users." },
        { label: "Durable – Low maintenance for tough field conditions." },
      ],
      tags: ["pumps", "agriculture", "off-grid", "subsidy"],
      icon: "/icons/pump.svg",
      image: "/images/solar/pump.jpg",
      cta: { label: "Upgrade Irrigation", href: "/contact?type=solar-pumpset" },
    },

    {
      id: "wall-mounted",
      name: "Wall-Mounted Solar Systems",
      slug: "wall-mounted-solar-systems",
      category: "Wall-mounted",
      summary:
        "Compact, space-saving solar for urban homes and offices—ideal for lighting, CCTV, and small loads.",
      features: [
        { label: "Space-Saving – Perfect where roof space is limited." },
        { label: "Easy Installation – Lightweight; mounts on most walls." },
        { label: "Reliable Supply – Powers lights, cameras, and small appliances." },
        { label: "Customizable – Sized to residential or commercial needs." },
        { label: "Sustainable & Smart – Clean energy in compact form." },
      ],
      tags: ["wall-mounted", "compact", "urban", "space-saving"],
      icon: "/icons/wall.svg",
      image: "/images/solar/wall.jpg",
      cta: { label: "Fit Solar on Walls", href: "/contact?type=wall-mounted" },
    },

    {
      id: "floating-solar",
      name: "Floating Solar Systems",
      slug: "floating-solar-systems",
      category: "Floating",
      summary:
        "High-output floating PV on lakes, reservoirs, and ponds—saves land and boosts performance.",
      features: [
        { label: "Efficient & Space-Saving – Generates power without using land." },
        { label: "Improved Yield – Water cooling enhances panel efficiency." },
        { label: "Reduces Evaporation – Supports water conservation." },
        { label: "Durable & Corrosion-Resistant – High-strength floats and hardware." },
        { label: "Ideal for Large Projects – Government and industrial deployments." },
        { label: "End-to-End EPC – Floating PV solutions under Renewable Energy India initiatives." },
      ],
      tags: ["floating", "reservoir", "industrial", "REI"],
      icon: "/icons/floating.svg",
      image: "/images/solar/floating.jpg",
      cta: { label: "Explore Floating PV", href: "/contact?type=floating-solar" },
    },
  ],

  seo: {
    metaTitle: "Sky Volt Renewable — Solar Installation Systems (Rooftop, Ground, Floating, Pumps, Street Lights)",
    metaDescription:
      "Sky Volt Renewable Pvt. Ltd. offers rooftop, ground-mounted, shed, wall-mounted, floating solar, pumpsets, street lights, fencing, and solar water heaters across India with MNRE-compliant EPC services.",
    keywords: [
      "solar EPC India",
      "rooftop solar Hyderabad",
      "ground mounted solar",
      "floating solar India",
      "solar street lights",
      "solar pumpsets subsidy",
      "solar water heater FPC ETC",
      "solar fencing",
      "industrial solar EPC",
    ],
  },
};

export default SOLAR_INSTALLATIONS_DATA;
