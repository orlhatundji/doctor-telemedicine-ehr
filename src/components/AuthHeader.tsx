import React from "react";

// Assets
import HospitalIcon from "./HospitalIcon";
import { twMerge } from "tailwind-merge";

type AuthHeaderProps = {
  type?: "white" | "primary";
};

const AuthHeader: React.FC<AuthHeaderProps> = ({ type }) => {
  return (
    <div
      className={twMerge(
        "h-20 flex items-center justify-center gap-x-2 w-full",
        type === "white" ? "bg-white" : "bg-primary"
      )}
    >
      <HospitalIcon color={type === "white" ? "#FA5805" : "#fff"} />
      <h1
        className={twMerge(
          "header1 font-sans font-black",
          type === "white" ? "text-primary" : "text-white"
        )}
      >
        Welcome to Hospital
      </h1>
    </div>
  );
};

export default AuthHeader;
