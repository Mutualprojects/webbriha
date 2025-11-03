import { SOLAR_INSTALLATIONS_DATA } from "../data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
function formatKey(key: string): string {
  switch (key) {
    case "overview":
      return "Overview";
    case "whyChoose":
      return "Why Choose";
    case "applications":
      return "Applications";
    case "technicalHighlights":
      return "Technical Highlights";
    case "roi":
      return "ROI";
    case "benefits":
      return "Benefits";
    case "models":
      return "Models";
    case "supportAndSubsidy":
      return "Support & Subsidy";
    case "sustainability":
      return "Sustainability";
    default:
      return key.charAt(0).toUpperCase() + key.slice(1);
  }
}
export default async function SolarInstallationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const installation = SOLAR_INSTALLATIONS_DATA.items.find(
    (item) => item.slug === slug
  );

  if (!installation) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.shutterstock.com/image-vector/solar-panel-battery-storage-collector-260nw-2272115157.jpg"
            alt="Solar energy banner"
            fill
            priority
            className="object-cover brightness-[0.9] blur-[1px]"
          />
          <div className="absolute inset-0 bg-[#07518a]/50 mix-blend-multiply"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 text-white">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {installation.name}
            </h1>
            <p className="text-lg text-gray-100">{installation.summary}</p>
            {installation.cta && (
              <Link
                href={installation.cta.href}
                className="inline-block bg-yellow-400 text-[#07518a] px-6 py-3 rounded-full font-semibold mt-4 hover:bg-yellow-300 transition"
              >
                {installation.cta.label}
              </Link>
            )}
          </div>

          {/* Right Image */}
          {installation.image && (
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/30">
                <Image
                  src={installation.image}
                  alt={installation.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>


<section className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#f9fbfd] to-white overflow-hidden">
  {/* ===== Decorative Gradient Overlay ===== */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#2469ad0d] via-[#fcc0120d] to-transparent pointer-events-none" />

  {installation.description && (
    <section className="relative z-10">
      {/* ===== Title ===== */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2469ad] to-[#fcc012] bg-clip-text text-transparent tracking-tight">
          Description
        </h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore a detailed breakdown of each aspect of this solar installation.
        </p>
        <div className="mt-5 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-[#2469ad] to-[#fcc012]" />
      </div>

      {/* ===== Description Cards ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
        {Object.entries(installation.description).map(([key, value], index) => (
          <div
            key={key}
            className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#2469ad33] hover:-translate-y-1"
          >
            {/* Gradient Glow Accent */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2469ad0a] via-transparent to-[#fcc0120f]" />

            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#2469ad] to-[#fcc012] bg-clip-text text-transparent relative z-10">
              {formatKey(key)}
            </h2>

            {/* Markdown Content */}
            <div className="relative z-10 text-gray-700 leading-relaxed prose prose-lg max-w-none">
              <ReactMarkdown>{String(value)}</ReactMarkdown>
            </div>

            {/* Index Badge */}
            <div className="absolute top-4 right-4 text-xs font-semibold bg-gradient-to-r from-[#2469ad] to-[#fcc012] text-white px-3 py-1 rounded-full shadow-md">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Decorative Footer Gradient Line ===== */}
      <div className="mt-20 flex flex-col items-center">
        <div className="h-1 w-44 rounded-full bg-gradient-to-r from-[#2469ad] to-[#fcc012]"></div>
        <p className="mt-4 text-gray-500 text-sm">
          Empowering progress through clean energy.
        </p>
      </div>
    </section>
  )}
</section>


      {/* ===== FEATURES SECTION ===== */}
      <section className="relative w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#07518a] mb-10 text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {installation.features.map((feature, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#07518a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px] leading-relaxed">
                    {feature.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ✅ Pre-render all slugs
export async function generateStaticParams() {
  return SOLAR_INSTALLATIONS_DATA.items.map((item) => ({
    slug: item.slug,
  }));
}
