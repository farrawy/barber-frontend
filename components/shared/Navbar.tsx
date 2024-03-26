"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "#fff" : "#000";
  const logo =
    resolvedTheme === "dark"
      ? "/images/trimmer-white.png"
      : "/images/trimmer.png";

  const navbar = {
    brand: {
      logo: logo,
      name: "BARBOOR",
    },
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Book Now", href: "/appointment" },
    ],
    cta: [{ label: "Login", href: "/login" }],
  };

  return (
    <nav className="">
      {/* More semantic color */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center justify-center flex-row">
              <Image
                src={navbar.brand.logo}
                alt={navbar.brand.name}
                width={40}
                height={40}
              />
              {navbar.brand.name}
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbar.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className=" px-3 py-2 rounded-md text-sm font-medium">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {navbar.cta.map((item) => (
                <Button
                  key={item.label}
                  className="  px-3 py-2 rounded-md text-sm font-medium"
                  variant="default">
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={strokeColor}
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={strokeColor}
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Conditional) */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0  w-full bg-white dark:bg-background z-20 m-0 p-0"
          id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbar.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium">
                {item.label}
              </Link>
            ))}
            {navbar.cta.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
