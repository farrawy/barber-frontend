"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.jpeg";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative sm:h-[40rem] h-[30rem] w-full flex flex-col ">
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <Image
          src={HeroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="z-10 w-full h-full flex flex-col items-center text-center justify-center p-4">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          Welcome to Barboor
        </h1>
        <p className="text-white text-sm sm:text-xl mt-4">
          Discover our exceptional services and book your next haircut today.
        </p>
        <div className="mt-8 flex flex-row gap-4">
          <Button variant="default" className="bg-black text-white">
            Book Now
          </Button>
          <Button variant="outline" className="bg-transparent border-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
