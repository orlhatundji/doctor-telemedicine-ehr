import React from "react";

// Assets
import { ReactComponent as Star } from "../../../assets/icons/star.svg";
import person from "../../../assets/images/person.svg";

type ReviewProps = {
  name: string;
  rating: number;
  content: string;
};

const Review: React.FC<ReviewProps> = ({ name, rating, content }) => {
  return (
    <div className="border rounded-lg py-6 px-4 flex flex-col items-center max-w-[215px]">
      <img src={person} alt="" className="w-20 h-20 rounded-full" />
      <div className="flex gap-x-2 mt-2 items-center">
        <Star />
        <span className="p-2 text-xs bg-secondary-100 rounded-full w-7 h-7 flex items-center justify-center font-semibold">
          {rating.toFixed(1)}
        </span>
      </div>
      <h2 className="font-bold text-lg mt-1 text-tertiary-400">{name}</h2>
      <p className="text-grey-700 leading-[1.5rem] text-center">{content?.substring(0,50)}</p>
    </div>
  );
};

export default Review;
