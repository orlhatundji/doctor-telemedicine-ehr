import React from "react";

// Components
import Appointments from "./components/Appointments";
import CustomCalendar from "../../components/Calendar";
import MyPatients from "./components/MyPatients";
import Reviews from "./components/Reviews";

const OverviewPage: React.FC = () => {
  return (
    <div className="max-w-[928px] ">
      <div className="flex gap-x-4">
        <MyPatients />
        <Appointments />
      </div>
      <div className="flex gap-x-4 mt-4">
        <CustomCalendar />
        <Reviews />
      </div>
    </div>
  );
};

export default OverviewPage
