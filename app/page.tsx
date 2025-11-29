import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";
import Herosection from "@/components/ui/HeaderHero";
import HomeSecondComp from "@/components/HomeSecondComp";
import WhoWeAre from "@/components/WeAre";
import Execuation from "@/components/Execuation";
import BlogsInsights from "@/components/Blogs";

import { HeroVideoDemo } from "@/components/demo";
import SolarSection from "@/components/SolarSection";
import National from "@/components/National";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme (pick any)
import "primereact/resources/primereact.min.css";               // Core CSS
import "primeicons/primeicons.css";                             
import CircularTestimonials from "@/components/Circular-Testmonials";
import { CircularTestimonialsDemo } from "@/components/Testmonialdemo";


export default function Home() {
  return (
    <div className="bg-white m-0 p-0">
      {/* ===== NAVBAR (fixed and over hero) ===== */}
   

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-screen overflow-hidden m-0 p-0">
        <Herosection />
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 bg-gray-50 m-0 p-0">
        <section className="m-0 p-0 bg-gray-50">
          <HomeSecondComp />
        </section>

        <section className="m-0 p-0 bg-white">
          <WhoWeAre />
        </section>

        <section className="m-0 p-0 bg-gray-50">
          <Execuation />
        </section>

        <section className="m-0 p-0 bg-white">
          {/* <BlogsInsights /> */}
        </section>
  <section>

<HeroVideoDemo/>

        </section>
        {/* ===== CTA / Footer Section ===== */}
        <section className="">
          {/* <SolarOrbit/> */}
        </section>
      <SolarSection/>
      <National/>
<CircularTestimonialsDemo/>
      </main>

      {/* ===== SITE FOOTER ===== */}
    
    </div>
  );
}
