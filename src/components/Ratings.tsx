import React from "react";

// Assets
import { ReactComponent as StarActiveIcon } from "../assets/icons/star_active.svg";
import { ReactComponent as StarInactiveIcon } from "../assets/icons/star_inactive.svg";

type RatingsProps = {
  rating: number;
};

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex gap-x-0.5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              {i < rating ? <StarActiveIcon /> : <StarInactiveIcon />}
            </div>
          ))}
      </div>
      <div className="text-sm text-tertiary-300 text-[.625rem] leading-[0] -mb-0.5">{rating}</div>
    </div>
  );
};

export default Ratings;
