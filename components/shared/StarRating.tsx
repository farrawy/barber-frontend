"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { BiStar } from "react-icons/bi";

interface RatingProps {
  value: number | null;
}

const StarRating: React.FC = () => {
  const [value, setValue] = useState<number | null>(3);
  return (
    <div className="flex flex-row ">
      <Rating
        name="half-rating"
        value={value}
        precision={0.5}
        defaultValue={3}
        readOnly
        classes={{
          iconEmpty: "text-secondary-foreground",
          iconFilled: "text-primary",
        }}
      />
    </div>
  );
};

export default StarRating;
