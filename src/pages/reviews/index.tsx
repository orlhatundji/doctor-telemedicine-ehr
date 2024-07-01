import React from "react";

// Components
import Review from "./components/Review";

const ReviewsPage: React.FC = () => {

  const reviews = [
    {
      id: 1,
      name: "John Ndukka",
      rating: 4,
      review: "Great doctor, very friendly and professional",
    },
    {
      id: 2,
      name: "Bakare Stephen",
      rating: 2,
      review: "Lousy doctor, very unfriendly and unprofessional. I would not recommend him to anyone",
    },
    {
      id: 3,
      name: "Babawale Blessing",
      rating: 3.5,
      review: "Great doctor, very friendly and professional",
    },
    {
      id: 4,
      name: "Etuk Christiana",
      rating: 4.75,
      review: "Great doctor, very friendly and professional",
    },
    {
      id: 3,
      name: "Iyede Oghenekaro",
      rating: 5,
      review: "Great doctor, very friendly and professional",
    },
  ];

  return (
    <>
      <h3 className="font-semibold">
        Here are all the reviews from your previous patients
      </h3>

      <div className="flex gap-6 flex-wrap mt-4">
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </>
  );
};

export default ReviewsPage;
