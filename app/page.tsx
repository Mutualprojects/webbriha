import Image from "next/image";
import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <NavigationMenuDemo />
      </header>

      {/* Main content */}
      <main className="flex-1 mt-16 p-4 bg-gray-50">
        {/* mt-16 = height of the fixed header, adjust if header height changes */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>
            This is your main content area. Scroll to see the footer remain at the bottom.
          </p>
          <div className="h-[1500px] bg-white mt-6 shadow p-6">
            Long scrollable content here...
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 Your Company — All Rights Reserved
      </footer>
    </div>
  );
}
