"use client";
import Autoplay from "embla-carousel-autoplay";
import ServicesSection from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { RiBox2Fill } from "react-icons/ri";
import aboutUsImage from "@/public/images/about-us.jpeg";
import aboutUsImage2 from "@/public/images/about-us-2.jpeg";
import aboutUsImage3 from "@/public/images/about-us-3.jpeg";
import aboutUsImage4 from "@/public/images/about-us-4.jpeg";
import barber1 from "@/public/images/barber-1.jpeg";
import barber2 from "@/public/images/barber-2.jpeg";
import barber3 from "@/public/images/barber-3.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const AboutUsPage = () => {
  const team = [
    {
      name: "John Doe",
      role: "Master Barber",
      image: barber1,
    },
    {
      name: "Jane Doe",
      role: "Senior Barber",
      image: barber2,
    },
    {
      name: "John Doe",
      role: "Master Barber",
      image: barber3,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="bg-primary w-full sm:p-20 p-8 text-primary-foreground relative z-10 text-center">
        <h1
          className="sm:text-5xl text-2xl font-bold !leading-snug"
          style={{ textShadow: "0 0 100px #000" }}>
          Welcome to BARBOOR
        </h1>
        <div className="absolute w-full sm:text-9xl hidden sm:flex items-center justify-center top-0 left-0 m-auto bottom-10 right-0 -z-[9]">
          <h1
            className="sm:text-9xl text-5xl font-bold !leading-snug text-primary-foreground/5"
            style={{ textShadow: "0 0 100px #000" }}>
            Welcome to BARBOOR
          </h1>
        </div>
        <p className="sm:text-lg text-base font-light">
          Discover the essence of our barbershop and experience exceptional
          grooming services.
        </p>
      </div>

      <div className="flex justify-between items-center sm:flex-row flex-col-reverse w-full sm:gap-20 gap-4 sm:p-20 p-8">
        <div className="sm:w-1/2 sm:gap-8 gap-4 flex flex-col">
          <h5 className="font-semibold text-xl">Exceptional</h5>
          <h3 className="sm:text-5xl text-2xl">
            Crafting Unique Styles for Modern Gentlemen
          </h3>
          <p className="text-base font-light ">
            At our barbershop, we have a rich history of providing top-notch
            grooming services. Our mission is to help men look and feel their
            best by offering a wide range of services, fro classic haircuts to
            modern beard styling. With our team of skilled barbers and our
            commitment to exceptional customer service, we strinve to create a
            welcoming and comfortable environment for every client.
          </p>

          <div className="flex flex-row gap-2">
            <Button variant="default">Learn More</Button>
            <Button variant="link">
              Book Now
              <BiChevronRight />
            </Button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            active: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="sm:w-1/2 w-full rounded-xl overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={aboutUsImage}
                alt="About Us"
                className="object-cover aspect-square object-center"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={aboutUsImage2}
                alt="About Us"
                className="object-cover aspect-square object-center"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={aboutUsImage3}
                alt="About Us"
                className="object-cover aspect-square object-center"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={aboutUsImage4}
                alt="About Us"
                className="object-cover aspect-square object-center"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Meet our team */}
      <div className="">
        <h5 className="font-semibold text-xl">Meet Our Team</h5>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full">
          <CarouselContent>
            {team.map((member) => (
              <CarouselItem key={member.name}>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <h5 className="font-semibold text-lg">{member.name}</h5>
                  <p className="text-base font-light">{member.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUsPage;
