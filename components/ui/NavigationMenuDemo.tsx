"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const toggleMobile = () => setMobileOpen(!mobileOpen)

  // Detect scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // change after 50px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Logos
  const blueLogo = "/highbtlogo-tm-1.png" // for white background
  const whiteLogo = "/highbtlogo white- tm.png" // for blue background

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-blue-600 shadow-lg" : "bg-white shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-1/4 flex items-center">
          <Link href="/">
            <Image
              src={scrolled ? whiteLogo : blueLogo}
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-3/4">
          <NavigationMenu>
            <NavigationMenuList className="flex w-full justify-between">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={scrolled ? "text-white" : "text-black"}
                >
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/">Dashboard Home</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/analytics">Analytics</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={scrolled ? "text-white" : "text-black"}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/products/product1">Product 1</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/products/product2">Product 2</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={scrolled ? "text-white" : "text-black"}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/react">React Services</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/node">Node Services</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={scrolled ? "text-white" : "text-black"}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[300px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/enterprise">Enterprise</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/solutions/startup">Startup</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={scrolled ? "text-white" : "text-black"}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 w-[300px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about/team">Team</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about/careers">Careers</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    scrolled ? "text-white" : "text-black"
                  }`}
                >
                  <Link href="/resources">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    scrolled ? "text-white" : "text-black"
                  }`}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMobile}>
            {mobileOpen ? (
              <X className={scrolled ? "text-white" : "text-black"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-white" : "text-black"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full shadow-lg z-40 transition-colors duration-300 ${
            scrolled ? "bg-blue-600" : "bg-white"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                href="/"
                className={scrolled ? "text-white" : "text-black"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products/product1"
                className={scrolled ? "text-white" : "text-black"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services/react"
                className={scrolled ? "text-white" : "text-black"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/enterprise"
                className={scrolled ? "text-white" : "text-black"}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/about/team"
                className={scrolled ? "text-white" : "text-black"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={scrolled ? "text-white" : "text-black"}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={scrolled ? "text-white" : "text-black"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
