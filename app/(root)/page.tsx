"use client";
import FAQsSection from "@/components/sections/FAQsSection";
import GallerySection from "@/components/sections/GallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/Hero";
import React from "react";
import { useTheme } from "next-themes";

const HomePage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [logo, setLogo] = React.useState<string>("/images/trimmer-white.png");

  React.useEffect(() => {
    setTheme("light");
    setLogo(
      resolvedTheme === "dark"
        ? "/images/trimmer-white.png"
        : "/images/trimmer.png",
    );
  }, [resolvedTheme, setTheme]);

  const footerConfig = {
    brandName: "Barboor",
    logo: logo,
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    cta: [
      { label: "Book Now", href: "/book" },
      { label: "Learn More", href: "/about" },
    ],
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "FAQs", href: "/faqs" },
    ],
    social: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
    policies: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    isPremium: true,
  };
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQsSection />
      <Footer config={footerConfig} />
    </div>
  );
};

export default HomePage;
