import { twMerge } from "tailwind-merge";

// Components
import { Button } from "./Button";
import useScreenSize from "../hooks/useScreenSize";

const records = [
  {
    title: "Name",
    response: "Michael Akinsola",
  },
  {
    title: "Age",
    response: "25",
  },
  {
    title: "Gender",
    response: "Male",
  },
  {
    title: "Marital status",
    response: "Single",
  },
  {
    title: "Contact info",
    response: "Male",
  },
  {
    title: "Emergency contact info",
    response: "Male",
  },
  {
    title: "Occupation",
    response: "Educator",
  },
  {
    title: "Next of kin",
    response: "Miss Duro Akinsola",
  },
  {
    title: "Relationship with Next of Kin",
    response: "Sister",
  },
];

const PatientDetails = () => {
  const { height } = useScreenSize();
  const cardHeight = `${height - 450}px`;
  return (
    <div
      className="p-4 flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
      style={{ maxHeight: cardHeight }}
    >
      {records.map((record, i) => (
        <div key={i} className="flex flex-col py-2">
          <div className="flex">
            <h3 className="font-semibold">{record.title}</h3>
          </div>
          <span className="text-grey-100 text-sm">{record.response}</span>
        </div>
      ))}
    </div>
  );
};

export default PatientDetails;
