import React from "react";
import { Button } from "../ui/button";
import { ScrollAreaHorizontalDemo } from "../shared/ScrollArea";

const GallerySection: React.FC = () => {
  return (
    <div className="p-8 sm:p-20 flex flex-row items-center justify-between gap-4 ">
      <div className="flex flex-col gap-4">
        <h3 className="sm:text-5xl text-2xl font-bold">
          Discover Our Barber Services
        </h3>
        <p className="sm:text-xl text-lg">
          Experience quality haircuts and grooming services by our skilled
          barbers.
        </p>

        <div>
          <Button className="">Book</Button>
          <Button className="" variant="link">
            Explore
          </Button>
        </div>
      </div>

      <div className="sm:flex hidden w-1/2">
        <ScrollAreaHorizontalDemo />
      </div>
    </div>
  );
};

export default GallerySection;
