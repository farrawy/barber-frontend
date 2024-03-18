"use client";

import Image from "next/image";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { RiBox2Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const ServicesSection: React.FC = () => {
  const router = useRouter();
  const services = [
    {
      id: 1,
      icon: "RiBox2Fill",
      title: "Discover Our Services",
      description:
        "We offer a range of high-quality services to cater to your grooming needs.",
      learnMore: true,
      link: "/services",
    },
    {
      id: 2,
      icon: "RiBox2Fill",
      title: "Get The Perfect Haircut",
      description:
        "Our experienced barbers will give you a stylish and precise haricut.",
      learnMore: true,
      link: "/services",
    },
    {
      id: 3,
      icon: "RiBox2Fill",
      title: "Beard Groomaing and Shaving",
      description:
        "Experience our professional beard grooming and shaving services.",
      learnMore: true,
      link: "/services",
    },
  ];
  return (
    <section
      className="grid sm:grid-cols-3 grid-cols-1
    gap-16 sm:p-20 p-8">
      {services.map((service) => (
        <div
          onClick={() => router.push(service.link)}
          className="flex flex-col gap-3 
        cursor-pointer hover:scale-105 transition-transform
        "
          key={service.id}>
          <RiBox2Fill className="w-10 h-full" />
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <p>{service.description}</p>

          <div className="flex flex-row">
            <Button variant="outline" className="">
              Learn More
            </Button>

            <Button variant="ghost" className="">
              Book Now <BiChevronRight />
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
