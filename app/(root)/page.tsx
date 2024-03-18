import FAQsSection from "@/components/sections/FAQsSection";
import GallerySection from "@/components/sections/GallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HeroSection from "@/components/shared/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQsSection />
    </div>
  );
};

export default HomePage;
