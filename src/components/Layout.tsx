import React from "react";
import Sidebar from "./Sidebar";

const withFixedSidebar = (PageComponent: React.ComponentType) => {
  const WithFixedSidebar: React.FC = () => {
    return (
      <div className="flex gap-x-6 h-screen">
        <Sidebar />

        <PageComponent />
      </div>
    );
  };

  return WithFixedSidebar;
};

export default withFixedSidebar;
