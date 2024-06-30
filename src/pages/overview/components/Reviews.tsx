import React from "react";

// Assets
import person from "../../../assets/images/person.svg";
import Ratings from "../../../components/Ratings";
import { Button } from "../../../components/Button";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Doe",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="border rounded p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Reviews</h1>
        <div className="flex items-center gap-x-2">
          <span className="header1 text-xl">4.5</span>
          <Button title="322+ reviews" className="w-fit py-2 px-4 text-xs rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-x-2 items-center">
            <div className="p-2 flex flex-col gap-y-1">
              <div className="flex items-center gap-x-2">
                <img src={person} alt="" className="w-8 h-8 rounded-full" />
                <h2 className="font-bold text-sm leading-[.8rem]">
                  {review.name}
                </h2>
              </div>

              <p className="text-sm text-grey-100">{review.review}</p>
            </div>
            <div className="flex gap-x-1">
              <Ratings rating={review.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
