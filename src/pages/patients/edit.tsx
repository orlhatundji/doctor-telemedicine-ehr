import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Components
import { Button } from "../../components/Button";
import BackButton from "../../components/BackArrow";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import MedicalProfileForm from "./components/MedicalProfileForm";
import MedicalProfessionalForm from "./components/MedicalProfessionalForm";

const EditUser = () => {
  const navigate = useNavigate();
  const { patient, doctor, userDetails } = useLocation().state || {};
  const [editMode, setEditMode] = useState<
    "profile" | "history" | "professional"
  >("profile");
  const params = useParams();
  const id = params.id;

  return (
    <div className="h-[80vh]">
      <div className="flex items-center relative">
        <div className="flex gap-x-2 text-grey-100 text-sm">
          <span
            className="hover:underline cursor-pointer underline-offset-8"
            onClick={() => navigate(-1)}
          >
            {patient ? "Patients" : "Doctors"}
          </span>
          /<span className="">{patient ? "Patient" : "Doctor"} details</span>/
          <span className="">Edit</span>
        </div>
      </div>
      <div className="mt-4 h-full">
        <BackButton />
        <div className="flex justify-between mt-8 pr-14">
          <Button
            title="Profile"
            color={editMode !== "profile" ? "secondary" : "primary"}
            className="w-fit px-8"
            onClick={() => setEditMode("profile")}
          />

          {patient && (
            <Button
              title="Medical History"
              color={editMode === "history" ? "primary" : "secondary"}
              className="w-fit px-8"
              onClick={() => setEditMode("history")}
            />
          )}
          {doctor && (
            <Button
              title="Professional Record"
              color={editMode === "professional" ? "primary" : "secondary"}
              className="w-fit px-8"
              onClick={() => setEditMode("professional")}
            />
          )}
        </div>
        {editMode === "history" && (
          <MedicalHistoryForm patient={userDetails} {...{ id }} />
        )}
        {editMode === "profile" && (
          <MedicalProfileForm patient={userDetails} {...{ id }} />
        )}
        {editMode === "professional" && (
          <MedicalProfessionalForm doctor={userDetails} {...{ id }} />
        )}
      </div>
    </div>
  );
};

export default EditUser;
