"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import whiteLogo from "../../app/images/white.png";
import blueLogo from "../../app/images/Skyvolt.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { label } from "framer-motion/client";

export function NavigationMenuDemo() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [useWhiteLogo, setUseWhiteLogo] = React.useState(false);
  const vhThresholdRef = React.useRef<number>(0);
  const pathname = usePathname();

  const toggleMobile = () => setMobileOpen((v) => !v);

  /* ===== Scroll + Resize Detection ===== */
  React.useEffect(() => {
    const setThreshold = () => {
      vhThresholdRef.current = Math.round(window.innerHeight * 0.6);
      setScrolled(window.scrollY >= vhThresholdRef.current);
    };
    setThreshold();
    window.addEventListener("resize", setThreshold);

    const onScroll = () => {
      const isPastThreshold = window.scrollY >= vhThresholdRef.current;
      setScrolled(isPastThreshold);
      setUseWhiteLogo(isPastThreshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", setThreshold);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ===== Prevent Body Scroll when Menu Open ===== */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ===== STYLES ===== */
  const logoSrc = useWhiteLogo ? whiteLogo : blueLogo;
  const headerBg = useWhiteLogo
    ? "bg-[#07518a]/95 backdrop-blur-md border-b border-[#064374] text-white  "
    : "bg-transparent  text-[#2469ad] ";
  const textColor = useWhiteLogo 

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
     {label:"Testimonials",href:"/testimonials"},
    { label: "Contact", href: "/contact" },
   
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 transition-all">
        {/* ===== Logo ===== */}
        <Link href="/" aria-label="Homepage" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={150}
              height={50}
              priority
              className="h-12 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </Link>

        {/* ===== Desktop Nav ===== */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      asChild
                      className={[
                        navigationMenuTriggerStyle(),
                        textColor,
                        "font-bold text-[20px] tracking-wide transition-all duration-200 px-2 py-1.5 relative group border-0 bg-transparent ",
                        "hover:text-yellow-400 hover:bg-transparent focus:bg-transparent active:bg-transparent ",
                      ].join(" ")}
                    >
                      <Link href={item.href} className="outline-none">
                        {item.label}
                        {/* Underline Animation */}
                        <motion.span
                          layoutId="underline"
                          className={`absolute left-0 bottom-0  ${
                            isActive ? "bg-yellow-400" : "bg-transparent"
                          } group-hover:bg-yellow-400 transition-all duration-300 w-full`}
                        />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMobile}
            whileTap={{ scale: 0.9 }}
            className="p-2"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X
                size={28}
                className={`${useWhiteLogo ? "text-white" : "text-gray-900"}`}
              />
            ) : (
              <Menu
                size={28}
                className={`${useWhiteLogo ? "text-white" : "text-gray-900"}`}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full z-40 ${
              useWhiteLogo
                ? "bg-[#07518a]/95 backdrop-blur-sm"
                : "bg-white/95 backdrop-blur-sm"
            } border-t border-gray-200 shadow-lg`}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col p-5 space-y-3"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block px-3 py-2 rounded-md text-lg font-medium outline-none transition-all",
                      useWhiteLogo
                        ? "text-white hover:text-yellow-400"
                        : "text-gray-900 hover:text-[#07518a]",
                      "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="pt-4 border-t border-gray-300/30 flex justify-center"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`${
                    useWhiteLogo
                      ? "bg-yellow-400 text-[#07518a]"
                      : "bg-[#07518a] text-white"
                  } px-6 py-2 rounded-full font-semibold text-base hover:scale-105 active:scale-95 transition-transform`}
                >
                  Get in Touch
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
