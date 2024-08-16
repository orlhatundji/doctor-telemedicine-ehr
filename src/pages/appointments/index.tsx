import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Custom Hooks
import useScreenSize from "../../hooks/useScreenSize";
// import { CallContext } from "../../contexts/callContext";

// Assets
import person from "../../assets/images/person.svg";
import video_icon from "../../assets/images/video_icon.png";
import { axiosInstance } from "../../utils/baseAxios";
import { add30Minutes } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const localizer = dayjsLocalizer(dayjs);

const AppointmentsPage: React.FC = () => {
  const navigate = useNavigate();

  const { height } = useScreenSize();
  // const { startCall } = React.useContext(CallContext);
  const handleCalendarClick = (event: any) => {
    // startCall();
    navigate(`/meeting`);
    // alert(`Event scheduled for ${event.start} to ${event.end}`);
  };
  const [appointments, setAppointments] = React.useState([]);

  useEffect(() => {
    axiosInstance.get("/appointment").then((res) => {
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

  const [currentView, setCurrentView] = React.useState("agenda");
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        defaultView="agenda"
        style={{ height: height - 150 }}
      
        onSelectEvent={handleCalendarClick}
        onSelectSlot={() => {}}
        className="bg-[#FAFAFA] cursor-pointer"
        onView={(e) => setCurrentView(e)}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: "#FA58051A",
              color: "#111111",
            },
          };
        }}
        components={{
          event: ({ event }: any) => (
            <div
              className={twMerge(
                currentView === "agenda" ? " bg-primary/10" : ""
              )}
            >
              <div className="p-2 w-full text-tertiary-100">
                {event.person && (
                  <>
                    <div className="flex items-center gap-x-2">
                      <img
                        src={person}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <span
                        className={twMerge(
                          "text-sm font-semibold truncate whitespace-break-spaces text-primary",
                          currentView === "agenda"
                            ? "text-primary"
                            : "text-tertiary-100"
                        )}
                      >
                        {event.person.name}
                      </span>
                      {(currentView === "day" || currentView === "month") && (
                        <img
                          src={video_icon}
                          alt=""
                          className="w-5 h-5 cursor-pointer"
                        />
                      )}
                    </div>
                    {currentView === "agenda" && (
                      <p className="mt-0.5 text-sm whitespace-break-spaces">
                        {event.agenda}
                      </p>
                    )}
                    {currentView === "agenda" && (
                      <div className="flex items-center gap-x-2 mt-2">
                        <span className="text-xs text-primary">
                          {dayjs(event.start).format("h:mm A")} -{" "}
                          {dayjs(event.end).format("h:mm A")}
                        </span>
                        <img
                          src={video_icon}
                          alt=""
                          className="w-6 h-6 cursor-pointer"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default AppointmentsPage;
