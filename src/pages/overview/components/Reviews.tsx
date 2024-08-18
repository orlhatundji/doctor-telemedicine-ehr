import React, { useEffect, useState } from "react";

// Assets
import person from "../../../assets/images/person.svg";
import Ratings from "../../../components/Ratings";
import { Button } from "../../../components/Button";
import { axiosInstance } from "../../../utils/baseAxios";

const Reviews = () => {

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axiosInstance.get('/review').then((res) => {
      setReviews(res.data)
    })

  }, [])
  return (
    <div className="border rounded p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Reviews</h1>
        <div className="flex items-center gap-x-2">
          <span className="header1 text-xl">4.5</span>
          <Button title={`${reviews?.length}+ reviews`} className="w-fit py-2 px-4 text-xs rounded-3xl" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        {reviews.map((review: any, index) => (
          <div key={index} className="flex gap-x-2 items-center">
            <div className="p-2 flex flex-col gap-y-1">
              <div className="flex items-center gap-x-2">
                <img src={person} alt="" className="w-8 h-8 rounded-full" />
                <h2 className="font-bold text-sm leading-[.8rem]">
                  {review.patient?.name}
                </h2>
              </div>

              <p className="text-sm text-grey-100">{review.content}</p>
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
