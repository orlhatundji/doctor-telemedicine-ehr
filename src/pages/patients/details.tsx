import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { axiosInstance } from "../../utils/baseAxios";
import AssignDoctor from "../hospital/patients/components/AssignDoctor";

const PatientDetails = () => {
  const navigate = useNavigate();
  const patient = useLocation().state;
  const [step, setStep] = useState(0);
  const [showAssignDoctor, setShowAssignDoctor] = useState(false);
  const [showAddTreatment, setShowAddTreatment] = useState(false);
  const role = localStorage.getItem("role");
  const params = useParams();
  const id = params.id;
  const [userDetails, setUserDetails] = useState({ patient: {} });

  useEffect(() => {
    axiosInstance
      .get(`/${patient ? "patient" : "doctor"}/unique?id=${id}`)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id, patient]);

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
          <div className="absolute right-0 flex gap-x-10">
            <Button
              title="Assign a Doctor"
              className="w-fit px-8 py-2"
              color="secondary"
              onClick={() =>
                setShowAssignDoctor((prev) => {
                  return !prev;
                })
              }
            />
            <Button
              title="Edit"
              className="w-fit px-8 py-2"
              onClick={() =>
                navigate("edit", { state: { patient, userDetails } })
              }
            />
          </div>
        )}
      </div>
      <div
        className={twMerge("mt-4", role === ROLE.DOCTOR && "grid grid-cols-2")}
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

          {step === 0 && userDetails?.patient && (
            <MedicalCard userDetails={userDetails} />
          )}
          {step === 1 && <PersonalProfile user={patient} />}
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
      <AssignDoctor show={showAssignDoctor} setShow={setShowAssignDoctor} id={patient.patientId} />
    </div>
  );
};

export default PatientDetails;
