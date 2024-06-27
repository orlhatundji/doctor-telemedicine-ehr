import React from "react";
import { twMerge } from "tailwind-merge";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

type ProgressProps = {
  step: number;
  setStep: (step: number) => void;
  options: string[];
  centered?: boolean;
};

const Progress: React.FC<ProgressProps> = ({
  step,
  setStep,
  options,
  centered,
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full min-h-[52px] grid h-full bg-white",
        "h-11 rounded10 translate-x-0 mt-8"
      )}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className={twMerge(
          "absolute transition-transform duration-500 h-full bg-primary rounded10"
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translate(${100 * step}%)`,
        }}
      />
      {options.map((option, i) => (
        <div
          key={option}
          onClick={() => setStep(i)}
          className={twMerge(
            "h-full flex items-center gap-x-2 px-4 py-3",
            "cursor-pointer rounded10 transition-all duration-1000",
            step === i ? "bg-primary/50" : "bg-white"
          )}
        >
          <span
            className={twMerge(
              "z-10",
              step === i ? "text-white" : "",
              "header2",
              centered ? " mx-auto" : ""
            )}
          >
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ProgressA: React.FC<ProgressProps> = ({
  step,
  setStep,
  options,
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full min-h-[52px] grid h-full bg-white",
        "h-11 translate-x-0 mt-8"
      )}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className={twMerge(
          "absolute transition-transform duration-500 h-full border-b-2 border-tertiary-100"
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translate(${100 * step}%)`,
        }}
      />
      {options.map((option, i) => (
        <div
          key={option}
          onClick={() => setStep(i)}
          className={twMerge(
            "h-full flex items-center gap-x-2 px-4 py-3",
            "cursor-pointer transition-all duration-1000"
          )}
        >
          <span
            className={twMerge(
              "z-10",
              step === i ? "" : "text-grey-200",
              "header2 text-base"
            )}
          >
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ProgressB: React.FC<ProgressProps> = ({
  step: activeTab,
  setStep: setActiveTab,
  options,
}) => {

  const onTabClick = (e: any, index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        mode="scrollSelectedToCenterFromView"
        tabsContainerClassName=""
      >
        {options.map((item, index) => (
          <Tab
            key={item}
            className="p-0"
            style={{
              color: activeTab === index ? "#FA5805" : "#ACACAC",
              background: "transparent",
              borderRadius: "0",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: activeTab === index ? "solid 2px #FA5805" : "none",
              padding: ".5rem .5REM",
              boxShadow: "none",
              fontWeight: "600",
            }}
          >
            {item}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};


export const ProgressC: React.FC<ProgressProps> = ({
  step,
  setStep,
  options,
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full grid gap-x-2",
        " translate-x-0"
      )}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className={twMerge(
          "absolute transition-transform duration-500 h-2"
        )}
        style={{
          width: `${100 / options.length}%`,
          transform: `translate(${100 * step}%)`,
        }}
      />
      {options.map((option, i) => (
        <div
          key={option}
          onClick={() => setStep(i)}
          className={twMerge(
            "h-2 flex items-center gap-x-2 w-14 rounded",
            "cursor-pointer transition-all duration-1000",
            step === i ? "bg-primary/70" : "bg-slate-200"
          )}
        />
      ))}
    </div>
  );
};


export default Progress;
