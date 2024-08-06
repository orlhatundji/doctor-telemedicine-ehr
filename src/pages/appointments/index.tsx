import React from "react";
import { twMerge } from "tailwind-merge";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Custom Hooks
import useScreenSize from "../../hooks/useScreenSize";
import { CallContext } from "../../contexts/callContext";

// Assets
import person from "../../assets/images/person.svg";
import video_icon from "../../assets/images/video_icon.png";

const localizer = dayjsLocalizer(dayjs);

const AppointmentsPage: React.FC = () => {
  // Sample event list
  const myEventsList = [
    {
      id: 1,
      title: "Meeting",
      person: { name: "Gbenga Akintubi" },
      agenda:
        "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
      start: new Date(2024, 6, 1, 10, 0), // July 1, 2024, 10:00 AM
      end: new Date(2024, 6, 1, 12, 0), // July 1, 2024, 12:00 PM
    },
    {
      id: 2,
      title: "Check-up",
      person: { name: "Ayelabola Ololade" },
      agenda:
        "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
      start: new Date(2024, 6, 3, 14, 0), // July 3, 2024, 2:00 PM
      end: new Date(2024, 6, 3, 17, 0), // July 3, 2024, 5:00 PM
    },
    {
      id: 3,
      title: "Consultation",
      person: { name: "Dayo Dansule" },
      agenda:
        "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
      start: new Date(2024, 6, 5, 7, 30), // July 5, 2024, 7:30 AM
      end: new Date(2024, 6, 5, 10, 30), // July 5, 2022, 10:30 AM
    },
    {
      id: 14,
      title: "Today's Consultation",
      person: { name: "Ezeani Chiamaka" },
      agenda:
        "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 14,
      title: "Consultation with Kunle",
      person: { name: "Akinode Memunat" },
      agenda:
        "Lorem ipsum dolor sit amet consectetur. Placerat quis non sed erat. Elementum nisi sapien enim at faucibus facilisi nisl pulvinar. Sed penatibus nisi ultrices phasellus lacus. Commodo quis a est rhoncus viverra nibh in imperdiet tristique. Netus non duis iaculis in fringilla nec ut in a.",
      start: new Date(new Date().setHours(new Date().getHours() + 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 5)),
    },
  ];

  const { height } = useScreenSize();
  const { startCall, isCallActive } = React.useContext(CallContext);
  const handleCalendarClick = (event: any) => {
    startCall();
    alert(`You clicked on ${event.title} scheduled for ${event.start}`);
  };
  const [currentView, setCurrentView] = React.useState("agenda");
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
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
