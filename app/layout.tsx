// // app/layout.tsx
import "./globals.css";
import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";
import HoverFooter from "@/components/HoverFooter";
import { Inter, Manrope } from "next/font/google";

// ===== Font Setup =====
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// ===== Metadata =====
export const metadata = {
  title: "SkyVolt | Powering India's Clean Energy Future",
  description:
    "SkyVolt Renewable Pvt. Ltd. – Driving India's solar revolution through smart EPC solutions and sustainable technology.",
};

// ===== Root Layout =====
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body
        className="font-body text-gray-900 bg-white selection:bg-[#FCC012]/30 selection:text-[#0a6ab8] transition-colors duration-300"
      >
        {/* ===== Header Navigation ===== */}
        <NavigationMenuDemo />

        {/* ===== Main Content ===== */}
        <main className="min-h-[70vh]">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <HoverFooter />
      </body>
    </html>
  );
}
