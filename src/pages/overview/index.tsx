import React from "react";
import withFixedSidebar from "../../components/Layout";
import MyPatients from "./components/MyPatients";
import Appointments from "./components/Appointments";
import Reviews from "./components/Reviews";
import CustomCalendar from "../../components/Calendar";

const OverviewPage: React.FC = () => {
  return (
    <div className=" max-w-[928px] ">
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

export default withFixedSidebar(OverviewPage, "Overview");
