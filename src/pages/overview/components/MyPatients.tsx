import React from "react";

// Components
import { Button } from "../../../components/Button";

// Assets
import { ReactComponent as PersonIcon } from "../../../assets/images/person.svg";
import { ReactComponent as PatientsOutlineIcon } from "../../../assets/icons/patients_outline.svg";

const MyPatients = () => {
  return (
    <div className="rounded bg-secondary-400 px-6 py-8 w-[465px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="-ml-2 border-2 border-white rounded-full"
            >
              <PersonIcon />
            </div>
          ))}
          <div className="grid place-items-center rounded-full w-10 h-10 bg-off-white-400 text-grey-600 -ml-2">
            +3
          </div>
        </div>
        <Button title="Add patient" className="w-fit px-4" />
      </div>

      <div className="grid grid-cols-3 gap-x-4">
        <div className="rounded-lg py-4 px-3 border border-stroke-400 mt-20">
          <div className="rounded-full p-3 bg-white w-fit"><PatientsOutlineIcon /></div>
          <div className="flex items-center gap-x-2 mt-6">
            <span className="header1 font-normal">15</span>
            <p className="leading-[.7rem] text-xs">Total <br /> patients</p>
          </div>
        </div>
        <div className="rounded-lg py-4 px-3 border border-stroke-400 mt-20">
          <div className="rounded-full p-3 bg-white w-fit"><PatientsOutlineIcon /></div>
          <div className="flex items-center gap-x-2 mt-6">
            <span className="header1 font-normal">15</span>
            <p className="leading-[.7rem] text-xs">Total <br /> patients</p>
          </div>
        </div>
        <div className="rounded-lg py-4 px-3 border border-stroke-400 mt-20">
          <div className="rounded-full p-3 bg-white w-fit"><PatientsOutlineIcon /></div>
          <div className="flex items-center gap-x-2 mt-6">
            <span className="header1 font-normal">15</span>
            <p className="leading-[.7rem] text-xs">Total <br /> patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPatients;
