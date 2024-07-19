import React from "react";

// Components
import { Button } from "./Button";

// Assets
import person from "../assets/images/person.svg";

type AppointmentNotificationProps = {
  showAppointmentDetails: boolean;
  setShowAppointmentDetails: React.Dispatch<React.SetStateAction<boolean>>;
  appointmentDetails: {
    title: string;
    message?: string;
    time: string;
    type: string;
    mode?: string;
  };
};

const AppointmentNotification: React.FC<AppointmentNotificationProps> = ({
  showAppointmentDetails,
  setShowAppointmentDetails,
  appointmentDetails,
}) => {
  const handleAction = () => {
    setShowAppointmentDetails(false);
  }
  return showAppointmentDetails ? (
    <div className="absolute top-20 right-0 p-5 border bg-white shadow-xl rounded z-50 min-w-[377px]">
      <h2 className="header2">Incoming Appointment</h2>
      <div className="border rounded-lg p-3 mt-4">
        <div className="flex justify-between">
        <div className="flex items-center">
          <img src={person} alt="patient" className="bg-grey-200 rounded-lg" />
          <div className="ml-3">
            <h2 className="header2 font-bold text-sm leading-[.5rem]">
              Mr Daniel Idris
            </h2>
            <span className="text-grey-100 text-xs">2 minutes ago</span>
          </div>
        </div>
        {
          
          <div>
          <h6 className="text-xs text-grey-200">Location</h6>
          <p className="text-[.8125rem]">
            {appointmentDetails.mode === "virtual" ? "Virtual" : "In-person"}
          </p>
        </div>}
        </div>
        <hr className="mt-4" />
        <div className="p-2">
          <h2 className="header2 text-xs text-grey-200">Patient's Issue</h2>
          <p className="text-[.8125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada, justo nec lacinia varius, ligula odio aliquet elit, nec
            luctus nisl nunc sit amet
          </p>
          <div className="flex justify-between mt-5">
            <div>
              <h6 className="text-xs text-grey-200">Session duration</h6>
              <p className="text-[.8125rem]">30 minutes</p>
            </div>
            <div>
              <h6 className="text-xs text-grey-200">Date</h6>
              <p className="text-[.8125rem]">30 July 2024</p>
            </div>
            <div>
              <h6 className="text-xs text-grey-200">Time</h6>
              <p className="text-[.8125rem]">13:20</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 mt-6">
        <Button
          title="Accept"
          className="py-2"
          onClick={() => handleAction()}
        />
        <Button
          title="Decline"
          className="py-2"
          color="secondary"
          onClick={() => handleAction()}
        />
      </div>
    </div>
  ) : null;
};

export default AppointmentNotification;
