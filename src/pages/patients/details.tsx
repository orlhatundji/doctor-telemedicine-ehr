import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Patient from "./components/Patient";
import { ProgressB } from "../../components/Progress";
import MedicalCard from "../../components/MedicalCard";
import PersonalProfile from "../../components/PersonalProfile";
import TreatmentPlan from "./components/TreatmentPlan";
import LaboratoryTests from "./components/LaboratoryTests";

const PatientDetails = () => {
  const navigate = useNavigate();
  const patient = {
    id: 2,
    name: "Onibon Yetunde",
    age: 21,
    email: "onibon2003@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  };
  const [step, setStep] = useState(0);
  const [showAddTreatment, setShowAddTreatment] = useState(false);

  return (
    <div>
      <div className="flex gap-x-2 text-grey-100 text-sm">
        <span
          className="hover:underline cursor-pointer underline-offset-8"
          onClick={() => navigate(-1)}
        >
          Patients
        </span>
        /<span className="">Patient details</span>
      </div>
      <div className="grid grid-cols-2  mt-4">
        <div className="border rounded-lg max-w-[472px]">
          <Patient {...patient} className="" size="md" />

          <ProgressB
            options={["Medical card", "Personal profile"]}
            centered
            {...{ step, setStep }}
          />

          {step === 0 && <MedicalCard />}
          {step === 1 && <PersonalProfile />}
        </div>
        <div className="flex flex-col gap-y-6">
          <TreatmentPlan 
            showAddTreatment={showAddTreatment}
            setShowAddTreatment={setShowAddTreatment}
           />  
          <LaboratoryTests />
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
