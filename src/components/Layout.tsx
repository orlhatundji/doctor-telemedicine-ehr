import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const withFixedSidebar = (PageComponent: React.ComponentType, title: string) => {
  const WithFixedSidebar: React.FC = () => {
    return (
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Topbar title={title} />
        <PageComponent />
        </div>
      </div>
    );
  };

  return WithFixedSidebar;
};

export default withFixedSidebar;
