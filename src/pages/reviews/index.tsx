import React, { useEffect, useState } from "react";

// Components
import Review from "./components/Review";
import { axiosInstance } from "../../utils/baseAxios";

const ReviewsPage: React.FC = () => {

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axiosInstance.get('/review').then((res) => {
      console.log("review", res)
      setReviews(res.data)
    })

  }, [])

  return (
    <>
      <h3 className="font-semibold">
        Here are all the reviews from your previous patients
      </h3>

      <div className="flex gap-6 flex-wrap mt-4">
        {reviews.map((review: any) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </>
  );
};

export default ReviewsPage;
