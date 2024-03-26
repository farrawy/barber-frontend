import ServicesSection from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { RiBox2Fill } from "react-icons/ri";

const ServicesPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-3 sm:p-20 p-8">
        <p className="text-lg">Discover</p>
        <h1 className="sm:text-5xl text-3xl font-bold !leading-snug ">
          Expert Haircuts & Styles
        </h1>
        <p className="text-base">
          Experience our wide range of professional barbering services, tailored
          to your needs.
        </p>
        <div className="flex gap-2 mt-4">
          <Button variant="default">Book Now</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      <ServicesSection />

      <div className="flex flex-row">
        <div className="">
          <h3>
            Experience the Best Haircuts and Grooming Services at Our Barbershop
          </h3>
          <p>
            Our skilled barbers provide top-notch haircuts and grooming services
            in a relaxing atmosphere.
          </p>
          <ul>
            <li className="flex flex-row items-center justify-start">
              <RiBox2Fill />
              Expert Barbers
            </li>
            <li className="flex flex-row items-center justify-start">
              <RiBox2Fill />
              Quality Products
            </li>
            <li className="flex flex-row items-center justify-start">
              <RiBox2Fill />
              Relaxing Atmosphere
            </li>
          </ul>
        </div>

        <Image src="/images/trimmer.png" alt="Image" width={400} height={400} />
      </div>
    </div>
  );
};

export default ServicesPage;
