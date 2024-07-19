import React from "react";
import { twMerge } from "tailwind-merge";

// Contexts
import { CallContext } from "../contexts/callContext";

// Assets
import callbg from "../assets/images/callbg.png";
import doctor from "../assets/images/doctor.png";
import { ReactComponent as VideoIcon } from "../assets/icons/video_lg.svg";
import { ReactComponent as MicIcon } from "../assets/icons/mic.svg";
import { ReactComponent as SpeakerIcon } from "../assets/icons/speaker.svg";
import { ReactComponent as EndCallIcon } from "../assets/icons/endcall.svg";

const VideoCall = () => {
  const { isCallActive, startCall, endCall } = React.useContext(CallContext);
  return (
    <div
      className={twMerge(
        "fixed inset-0 p-40 bg-white/90 z-50 transition-all duration-300",
        "flex items-center justify-center text-white transition-all duration-1000",
        isCallActive ? "translate-x-0" : "translate-x-[2000px]"
      )}
    >
      <div className="video-frame relative flex flex-col overflow-hidden min-w-[871px] min-h-[511px] rounded-2xl">
        <img src={doctor} alt="" className="absolute right-11 top-11 w-36" />
        <img
          src={callbg}
          alt=""
          className="absolute -z-10 w-full h-full object-cover"
        />
        <div className="p-11 flex-1">
          <div className="z-50">
            <h1 className="header1 text-4xl">Michael Akinsola</h1>
            <p className="">Educator</p>
            <p className="mt-5 italic border-t border-b w-fit">Connecting...</p>
          </div>
        </div>
        <div className="flex p-11 justify-center gap-x-8">
          <VideoIcon className="icon-pointer" />
          <MicIcon className="icon-pointer" />
          <SpeakerIcon className="icon-pointer" />
          <EndCallIcon onClick={() => endCall()} className="icon-pointer" />
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
