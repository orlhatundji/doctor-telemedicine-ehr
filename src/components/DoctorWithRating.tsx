import React from "react";

// Components
import Ratings from "../components/Ratings";

// Assets

type DoctorWithRatingProps = {
  rating: number;
  name: string;
  specialty: string;
  img_url: string;
};

const DoctorWithRating: React.FC<DoctorWithRatingProps> = ({
  rating,
  name,
  specialty,
  img_url,
}) => {
  return (
    <div className="flex gap-x-4 items-center">
      <img src={img_url} alt="doctor" className="max-w-[74px]" />
      <div className="">
        <h2 className="header2 text-sm">{name}</h2>
        <p className="description2 text-sm text-grey-100 mt-1 mb-2">
          {specialty}
        </p>

        <Ratings rating={rating} />
      </div>
    </div>
  );
};

export default DoctorWithRating;
