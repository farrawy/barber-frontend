import React from "react";
import StarRating from "../shared/StarRating";
import { Box } from "@mui/material";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I had the best experience with this company. They are just amazing!",
      name: "John Doe",
    },
    {
      id: 2,
      rating: 5,
      text: "I had the best experience with this company. They are just amazing!",
      name: "John Doe",
    },
    {
      id: 3,
      rating: 5,
      text: "I had the best experience with this company. They are just amazing!",
      name: "John Doe",
    },
  ];

  return (
    <Box className="sm:p-20 p-8">
      <Box className="flex flex-col gap-2 mb-4">
        <h3 className="sm:text-5xl text-2xl font-bold">
          What Our Customers Say
        </h3>
        <p className="sm:text-xl text-base !leading-snug">
          Read testimonials from our satisfied customers
        </p>
      </Box>

      <Box className="flex sm:flex-row flex-col gap-10">
        {testimonials.map((testimonial) => (
          <Box
            className="sm:w-1/3 border border-secondary flex justify-between flex-col gap-4 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out hover:dark:shadow-secondary "
            key={testimonial.id}>
            <StarRating />

            <p className="text-base font-light !leading-snug">
              I had the best experience with this company. They are just
              amazing!
            </p>

            <h3 className="text-lg font-semibold">John Doe</h3>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
