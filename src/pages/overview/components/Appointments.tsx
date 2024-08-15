import React, { useEffect } from "react";

// Assets
import { ReactComponent as NoteIcon } from "../../../assets/icons/note.svg";
import person from "../../../assets/images/person.svg";
import { axiosInstance } from "../../../utils/baseAxios";
import { add30Minutes } from "../../../utils/helpers";
import dayjs from "dayjs";

const Appointments = () => {
  // const appointments = [
  //   {
  //     id: 1,
  //     date: "2021-01-01",
  //     time: "10:00",
  //     patient: {
  //       id: 1,
  //       name: "John Doe",
  //     },
  //   },
  //   {
  //     id: 2,
  //     date: "2021-01-01",
  //     time: "11:00",
  //     patient: {
  //       id: 2,
  //       name: "Jane Doe",
  //     },
  //   },
  //   {
  //     id: 3,
  //     date: "2021-01-01",
  //     time: "12:00",
  //     patient: {
  //       id: 3,
  //       name: "Alice Doe",
  //     },
  //   },
  //   {
  //     id: 4,
  //     date: "2021-01-01",
  //     time: "12:00",
  //     patient: {
  //       id: 4,
  //       name: "Alice Doe",
  //     },
  //   },
  // ];

  const [appointments, setAppointments] = React.useState([]);

  useEffect(() => {
    axiosInstance.get("/appointment").then((res) => {
      console.log('appointments', res.data)
      let apptms = res.data.map((appointment: any) => {
        const date = new Date(appointment.date);
        return {
          id: appointment.id,
          title: appointment.title,
          person: appointment.patient,
          agenda: appointment.description,
          start: date,
          end: add30Minutes(date),
        };
      });
      setAppointments(apptms);
    }).catch((error) => {
      console.error(error);
    });
  } , []);

  const getTime = (appointment: any) => {
    const sd = new Date(appointment.start);
    const ed = new Date(appointment.end);
    return `${dayjs(sd).format('h:mm')} - ${dayjs(ed).format('h:mm A')}`;
  }

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-y-3">
        {appointments.slice(0,5).map((appointment: any) => (
          <div
            key={appointment.id}
            className="flex gap-x-2 justify-between border rounded-lg p-4"
          >
            <div className="flex items-center gap-x-2">
              <img src={person} alt="" className="w-8 h-8 rounded-full" />
              <div className="">
                <h2 className="font-bold text-sm leading-[.8rem]">
                  {appointment.person?.name}
                </h2>
                <span className="text-xs text-grey-100">30 years</span>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <NoteIcon />
              <div className="bg-primary rounded-lg flex items-center justify-center text-white py-2 px-3 text-xs w-24 whitespace-nowrap">
                {getTime(appointment)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
