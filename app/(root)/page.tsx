import FAQsSection from "@/components/sections/FAQsSection";
import GallerySection from "@/components/sections/GallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/Hero";
import React from "react";

const HomePage = () => {
  const footerConfig = {
    brandName: "Barboor",
    logo: "/images/trimmer.png",
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
