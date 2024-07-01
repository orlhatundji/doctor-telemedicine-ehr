import React from "react";

// Assets
import person from "../../../assets/images/person.svg";
import { Button } from "../../../components/Button";

type PatientProps = {
  name: string;
  age: number;
  upComingVisit: string;
  recentVisit: string;
  email: string;
  phone: string;
  noOfVisits: number;
};

const Patient: React.FC<PatientProps> = ({
  name,
  age,
  upComingVisit,
  recentVisit,
  email,
  phone,
  noOfVisits,
}) => {
  return (
    <div className="border rounded-lg py-6 px-4 min-w-[328px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img src={person} alt="" className="w-8 h-8 rounded-full" />
          <div className="">
            <h2 className="font-bold text-sm leading-[.8rem]">{name}</h2>
            <span className="text-xs text-grey-100">
              30 years | {noOfVisits} visits
            </span>
          </div>
        </div>
        <Button title="View More" className="w-fit py-2 px-3 text-[.625rem]" />
      </div>
      <div className="flex items-center gap-x-8 mt-8">
        <div className="flex flex-col gap-y-0">
          <span className="font-bold text-sm ">Upcoming Visit</span>
          <span className="text-sm text-grey-100">{upComingVisit}</span>
        </div>
        <div className="flex flex-col gap-y-0">
          <span className="font-bold text-sm ">Recent Visit</span>
          <span className="text-sm text-grey-100">{recentVisit}</span>
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-6">
        <div className="flex flex-col gap-y-0">
          <span className="font-bold text-sm ">Email</span>
          <span className="text-sm text-grey-100">{email}</span>
        </div>
        <div className="flex flex-col gap-y-0">
          <span className="font-bold text-sm ">Phone number</span>
          <span className="text-sm text-grey-100">{phone}</span>
        </div>
      </div>
    </div>
  );
};

export default Patient;
