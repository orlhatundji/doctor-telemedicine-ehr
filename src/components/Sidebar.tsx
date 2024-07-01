import React from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Constants
import { base_url } from "../utils/constants";

// Assets
import { ReactComponent as DashboardActiveIcon } from "../assets/icons/dashboard_active.svg";
import { ReactComponent as DashboardInActiveIcon } from "../assets/icons/dashboard_inactive.svg";
import { ReactComponent as PatientsActiveIcon } from "../assets/icons/patients_active.svg";
import { ReactComponent as PatientsInActiveIcon } from "../assets/icons/patients_inactive.svg";
import { ReactComponent as SettingsActiveIcon } from "../assets/icons/settings_active.svg";
import { ReactComponent as SettingsInActiveIcon } from "../assets/icons/settings_inactive.svg";
import { ReactComponent as AppointmentsActiveIcon } from "../assets/icons/appointments_active.svg";
import { ReactComponent as AppointmentsInActiveIcon } from "../assets/icons/appointments_inactive.svg";
import { ReactComponent as ReviewsActiveIcon } from "../assets/icons/reviews_active.svg";
import { ReactComponent as ReviewsInActiveIcon } from "../assets/icons/reviews_inactive.svg";
import { ReactComponent as PlatformLogo } from "../assets/icons/platform_logo.svg";

type Route = {
  id: number;
  name: string;
  icon?: JSX.Element;
  icons: {
    active: JSX.Element;
    inactive: JSX.Element;
  };
  to: string;
};

const routes: Route[] = [
  {
    id: 0,
    name: "Overview",
    icon: <DashboardActiveIcon />,
    icons: {
      active: <DashboardActiveIcon />,
      inactive: <DashboardInActiveIcon />,
    },
    to: "/overview",
  },
  {
    id: 1,
    name: "Patients",
    icons: {
      active: <PatientsActiveIcon />,
      inactive: <PatientsInActiveIcon />,
    },
    to: "/patients",
  },
  {
    id: 2,
    name: "Appointments",
    icons: {
      active: <AppointmentsActiveIcon />,
      inactive: <AppointmentsInActiveIcon />,
    },
    to: "/appointments",
  },
  {
    id: 3,
    name: "Reviews",
    icons: {
      active: <ReviewsActiveIcon />,
      inactive: <ReviewsInActiveIcon />,
    },
    to: "/reviews",
  },
  {
    id: 4,
    name: "Settings",
    icons: {
      active: <SettingsActiveIcon />,
      inactive: <SettingsInActiveIcon />,
    },
    to: "/settings",
  },
];
const Sidebar = ({
  setPageTitle,
}: {
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = React.useState(routes[0].name);
  const [activeRouteId, setActiveRouteId] = React.useState(routes[0].id);
  const activeRouteHandler = (route: Route, id: number) => {
    setActiveRoute(route.name);
    setActiveRouteId(id);
    setPageTitle(route.name);
    navigate(`/${base_url}${route.to}`);
  };

  return (
    <div className="w-[320px] h-full border-r">
      <div className="h-20 flex items-center pl-11">
        <PlatformLogo className="ml-6" />
      </div>
      <div className="relative flex flex-col gap-y-2 p-6 h-[385px]">
        <div
          className={twMerge(
            "absolute transition-transform duration-300 bg-primary rounded-e-lg ",
            "w-full max-w-[275px]"
          )}
          style={{
            height: "77px",
            marginTop: `${activeRouteId * 7}px`,
            transform: `translateY(${77 * activeRouteId}px)`,
          }}
        />
        {routes.map((route, index) => (
          <div
            key={index}
            className={twMerge(
              "group flex items-center gap-x-4 py-6 pl-11  rounded-e-lg",
              "z-10 cursor-pointer"
            )}
            onClick={() => activeRouteHandler(route, route.id)}
          >
            {activeRoute === route.name
              ? route.icons.active
              : route.icons.inactive}
            <span
              className={twMerge(
                "group-hover:font-bold font-medium text-lg",
                activeRoute === route.name
                  ? "text-white font-bold"
                  : "text-tertiary-100"
              )}
            >
              {route.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
