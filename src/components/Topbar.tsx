import React from "react";

// Components
import SearchInput from "./SearchInput";

// Assets
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg";
import { ReactComponent as PersonIcon } from "../assets/images/person.svg";

const Topbar = ({ title }: { title: string }) => {
  return (
    <div className="h-20 border-b flex items-center justify-between px-6">
      <h1 className="header1">{title}</h1>
      <div className="flex items-center gap-x-4">
        <SearchInput />
        <NotificationIcon className="" />
        <PersonIcon />
      </div>
    </div>
  );
};

export default Topbar;
