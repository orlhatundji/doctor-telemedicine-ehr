import React from "react";

// Components
import AppointmentNotification from "./AppointementNotification";
import Dropdown from "./Dropdown";

// Assets
import { ReactComponent as AppointmentIcon } from "../assets/icons/appointments_inactive.svg";
import { ReactComponent as ArrowUpRightIcon } from "../assets/icons/arrow_up_right.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";

const NotificationsPanel = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const [showAppointmentDetails, setShowAppointmentDetails] =
  React.useState(false);
  
  type Notification = {
    title: string;
    message?: string;
    time: string;
    type: string;
    mode?: string;
  };
  
  const notifications: Notification[] = [
    {
      title: "Mr Daniel wants to book an appointment",
      time: "2 minutes ago",
      type: "appointment",
      mode: "virtual",
    },
    {
      title: "Mr Daniel just sent you a message",
      message: "You have a new message from John Doe",
      time: "4 hours ago",
      type: "message",
    },
    {
      title: "Mr Daniel wants to book an appointment",
      message: "You have a new message from John Doe",
      time: "2 days ago",
      type: "appointment",
      mode: "in-person",
    },
  ];
  
  type IconType = {
    [key: string]: React.ReactNode;
  };
  
  const IconTypes: IconType = {
    appointment: <AppointmentIcon />,
    message: <ChatIcon />,
  };
  
  const [selectedNotification, setSelectedNotification] = React.useState<
    Notification | undefined
  >(undefined);

  const handleNotificationClick = (notification: Notification) => {
    if (notification.type === "appointment") {
      setSelectedNotification(notification);
      setShowAppointmentDetails(true);
    }
  };

  return (
    <div className="relative">
      <NotificationIcon
        className="icon-pointer"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10"
          onClick={() => {
            setShowAppointmentDetails(false);
            setIsOpen(false);
          }}
        />
      )}
      {isOpen && (
        <div className="fixed right-20 p-5 max-w-[347px] border rounded-lg bg-white shadow-lg z-10">
          <div className="flex items-center justify-between">
            <h2 className="header2">Notifications</h2>
            <Dropdown
              options={[{ label: "Last 7 days", value: "7" }]}
              selected={{ label: "Last 7 days", value: "7" }}
              setSelected={() => {}}
            />
          </div>
          {notifications.map((notification, index) => (
            <div
              className="flex gap-x-4 items-center border-b cursor-pointer"
              onClick={() => handleNotificationClick(notification)}
            >
              <div className="flex bg-primary/10 p-2 rounded-full">
                {IconTypes[notification.type]}
              </div>
              <div key={index} className="py-4 text-sm max-w-[224px]">
                <h1 className="header2 text-sm truncate text-ellipsis">
                  {notification.title}
                </h1>
                <p className="paragraph1 text-xs">{notification.message}</p>
                <p className="paragraph2 text-gray-400">{notification.time}</p>
              </div>
            </div>
          ))}
          <h2 className="header2 text-primary pt-7 font-bold flex gap-x-2 items-center justify-center">
            See more <ArrowUpRightIcon />
          </h2>
        </div>
      )}
      {selectedNotification && <AppointmentNotification
        showAppointmentDetails={showAppointmentDetails}
        setShowAppointmentDetails={setShowAppointmentDetails}
        appointmentDetails={selectedNotification}
      />}
    </div>
  );
};

export default NotificationsPanel;
