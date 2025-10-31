import Image from "next/image";
import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";
import Herosection from "@/components/ui/HeaderHero";
import AboutSplitFullBleed from "@/components/AboutSplitFullBleed";
import HomeSecondComp from "@/components/HomeSecondComp";
import WhoWeAre from "@/components/WeAre";
import Execuation from "@/components/Execuation";
import BlogsInsights from "@/components/Blogs";
import HoverFooter from "@/components/HoverFooter";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavigationMenuDemo />
      </header>



      {/* Main content */}
      <main className="flex-1 mt-20  bg-gray-50">
        {/* mt-16 = height of the fixed header, adjust if header height changes */}
        



<div  className="h-100 bg-center bg-amber-50 px-0" style={{height:'88vh'}}>
<Herosection/>
<HomeSecondComp/>
  <WhoWeAre/>
  <Execuation/>
  <BlogsInsights/>
  <HoverFooter/>
</div>
       
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 Your Company — All Rights Reserved
      </footer>
    </div>
  );
}
