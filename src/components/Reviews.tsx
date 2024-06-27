import React from "react";

// Assets
import person from "../assets/images/person.png";
import DateView from "./DateView";

type ReviewProps = {
  name: string;
  review: string;
  date: string;
  occupation?: string;
};

const Review: React.FC<ReviewProps> = ({
  name,
  date,
  review,
  occupation
}) => {
  const [stringEnd, setStringEnd] = React.useState(200);
  return (
    <div className="flex gap-4">
      <div>
        <span className="header2">
          <DateView date={date} />
        </span>
        <p className="text-grey-300 text-sm leading-[1.15rem] mt-1">
          {review.slice(0, stringEnd)} {stringEnd < review.length ? "..." : ""}{" "}
          {stringEnd < review.length && (
            <span
              className="font-bold whitespace-nowrap"
              onClick={() => setStringEnd(review.length)}
            >
              Show More
            </span>
          )}
        </p>
        <div className="flex mt-2 gap-x-3">
          <img src={person} alt="" className="w-11 h-11 rounded10" />
          <div className="flex flex-col justify-center">
            <h2 className="header2 text-sm">{name}</h2>
            <span className="text-xs text-grey-400">{occupation}</span>
          </div>
          <div className="ml-auto self-end text-sm font-semibold">Patient</div>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Dele Aina",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          maiores recusandae laudantium necessitatibus voluptatem atque delectus
          culpa quasi quo nemo architecto inventore rem, pariatur nisi omnis
          labore a iusto undenemo architecto inventore rem, pariatur nisi omnis`,
    date: "2021-09-10",
    occupation: "Engineer",
  },
  {
    name: "Rev Okoro",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          maiores recusandae laudantium necessitatibus voluptatem atque delectus
          culpa quasi quo nemo architecto inventore rem, pariatur nisi omnis
          labore a iusto unde`,
    date: "2021-09-10",
    occupation: "Clergy",
  },
  {
    name: "Simon Olatunji",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          maiores recusandae laudantium necessitatibus voluptatem atque delectus
          culpa quasi quo nemo architecto inventore rem, pariatur nisi omnis
          labore a iusto unde`,
    date: "2021-09-10",
    occupation: "Software Developer",
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col gap-y-10 pb-10">
      {reviews.map((review) => (
        <Review key={review.name} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
