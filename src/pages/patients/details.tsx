import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Utils
import { ROLE } from "../../utils/constants";

// Components
import { Button } from "../../components/Button";
import Patient from "./components/Patient";
import { ProgressB } from "../../components/Progress";
import MedicalCard from "../../components/MedicalCard";
import TreatmentPlan from "./components/TreatmentPlan";
import PersonalProfile from "../../components/PersonalProfile";
import LaboratoryTests from "./components/LaboratoryTests";

const PatientDetails = () => {
  const navigate = useNavigate();
  const patient = useLocation().state;
 
  const [step, setStep] = useState(0);
  const [showAddTreatment, setShowAddTreatment] = useState(false);
  const role = localStorage.getItem("role");

  return (
    <div>
      <div className="flex items-center relative">
        <div className="flex gap-x-2 text-grey-100 text-sm">
          <span
            className="hover:underline cursor-pointer underline-offset-8"
            onClick={() => navigate(-1)}
          >
            Patients
          </span>
          /<span className="">Patient details</span>
        </div>
        {role === ROLE.HOSPITAL && (
          <Button title="Edit" className="absolute right-0 w-fit px-8 py-2"
          onClick={() => navigate("edit")}
          />
        )}
      </div>
      <div
        className={twMerge("grid mt-4", role === ROLE.DOCTOR && "grid-cols-2")}
      >
        <div
          className={twMerge(
            "border rounded-lg",
            role === ROLE.DOCTOR && "max-w-[472px]"
          )}
        >
          <Patient {...patient} className="" size="md" />

          <ProgressB
            options={["Medical card", "Personal profile"]}
            centered
            {...{ step, setStep }}
          />

          {step === 0 && <MedicalCard />}
          {step === 1 && <PersonalProfile {...{ patient }} />}
        </div>
        {role === ROLE.DOCTOR && (
          <div className="flex flex-col gap-y-6">
            <TreatmentPlan
              showAddTreatment={showAddTreatment}
              setShowAddTreatment={setShowAddTreatment}
            />
            <LaboratoryTests />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetails;
