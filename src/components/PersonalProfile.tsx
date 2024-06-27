import { twMerge } from "tailwind-merge";

// Components
import { Button } from "./Button";

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
    response: "Male"
  },
  {
    title: "Marital status",
    response: "Single"
  },
  {
    title: "Contact info",
    response: "Male"
  },
  {
    title: "Emergency contact info",
    response: "Male"
  },
  {
    title: "Occupation",
    response: "Educator"
  },
  {
    title: "Next of kin",
    response: "Miss Duro Akinsola"
  },
  {
    title: "Relationship with Next of Kin",
    response: "Sister"
  }
];
const PersonalProfile = () => {
  return (
    <div className="flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full ">
      {records.map((record, i) => (
        <div key={i} className="flex flex-col py-4">
          <div className="flex">
            <h3 className="font-semibold leading-[0rem]">{record.title}</h3>
            <Button
              type="button"
              className={twMerge(
                "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                "p-0"
              )}
              onClick={() => {}}
              title="Edit"
            />
          </div>
          <span className="text-grey-100 text-sm">{record.response}</span>
        </div>
      ))}
    </div>
  );
};

export default PersonalProfile;
