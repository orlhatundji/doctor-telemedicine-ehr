import React from "react";

// Assets
import { ReactComponent as NoteIcon } from "../../../assets/icons/note.svg";
import person from "../../../assets/images/person.svg";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      date: "2021-01-01",
      time: "10:00",
      patient: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 2,
      date: "2021-01-01",
      time: "11:00",
      patient: {
        id: 2,
        name: "Jane Doe",
      },
    },
    {
      id: 3,
      date: "2021-01-01",
      time: "12:00",
      patient: {
        id: 3,
        name: "Alice Doe",
      },
    },
    {
      id: 4,
      date: "2021-01-01",
      time: "12:00",
      patient: {
        id: 4,
        name: "Alice Doe",
      },
    },
  ];
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-y-3">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex gap-x-2 justify-between border rounded-lg p-4"
          >
            <div className="flex items-center gap-x-2">
              <img src={person} alt="" className="w-8 h-8 rounded-full" />
              <div className="">
                <h2 className="font-bold text-sm leading-[.8rem]">
                  {appointment.patient.name}
                </h2>
                <span className="text-xs text-grey-100">30 years</span>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <NoteIcon />
              <div className="bg-primary rounded-lg flex items-center justify-center text-white py-2 px-3 text-xs">
                10:00 - 10:30am
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
