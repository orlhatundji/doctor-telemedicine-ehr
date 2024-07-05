import React from "react";
import usePWARunningMode from "../hooks/usePWARunningMode";

const AppStatus: React.FC = () => {
  const { isStandalone, isInstalled } = usePWARunningMode();

  return !isStandalone && !isInstalled ? (
    <div className="z-[100] fixed inset-0 px-6 bg-white  flex flex-col items-center justify-center">
      <h1 className="header1">Install App</h1>
      <p className="text-center text-lg">
        To install the app, look for the install button in the browser menu.
      </p>
       
    </div>
  ) : null;
};

export default AppStatus;
