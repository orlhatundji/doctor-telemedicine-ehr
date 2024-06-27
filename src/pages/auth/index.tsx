import React from "react";

// Components
import PersonalDetails from "./personal-details";
import Login from "./login";
import WorkDetails from "./work-details";

// Assets
import { ReactComponent as WelcomePerson } from "../../assets/images/welcome-person.svg";
import { ProgressC } from "../../components/Progress";

const Auth = () => {
  const [step, setStep] = React.useState(-1);
  return (
    <div className=" bg-white p-6 flex h-screen">
      <WelcomePerson className="h-full flex-1" />
      <div className="relative h-full flex-1 flex flex-col items-center justify-center">
        {step === -1 && <Login {...{ setStep }} />}
        {step === 0 && <PersonalDetails {...{ setStep }} />}
        {step === 1 && <WorkDetails {...{ setStep }} />}
        {step > -1 && (
          <div className="absolute bottom-6 flex justify-center ">
            <ProgressC step={step} setStep={setStep} options={["1", "2"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
