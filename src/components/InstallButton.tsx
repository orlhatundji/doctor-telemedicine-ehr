import React from "react";
import usePWARunningMode from "../hooks/usePWARunningMode";

const AppStatus: React.FC = () => {
  const { isStandalone, isInstalled, isAndroid, isIOS } = usePWARunningMode();

  return !isStandalone && !isInstalled ? (
    <div className="z-[100] fixed inset-0 px-6 bg-white  flex flex-col items-center justify-center">
      <h1 className="header1">Add To Home Screen</h1>
      <p className="text-center">
        To install the app, you need to add it <br />
        to your home screen
      </p>
      {isIOS && (
        <p className="text-center mt-2">
          In your Safari browser menu, tap the Share icon and choose Add To Home
          Screen in the options. Then open the Patient app on your home screen.
        </p>
      )}
      {isAndroid && (
        <p className="text-center mt-2">
          In your Chrome browser menu, tap the More button and choose install
          App in the options. Then open the Patient app on your home screen.
        </p>
      )} 
    </div>
  ) : null;
};

export default AppStatus;
