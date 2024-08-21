import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Utils
import { axiosInstance } from "../../utils/baseAxios";

// Components
import { Button } from "../../components/Button";
import BackButton from "../../components/BackArrow";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import MedicalProfileForm from "./components/MedicalProfileForm";

const EditUser = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState<"profile" | "history">("profile");
  const [userDetails, setUserDetails] = useState({});
  const params = useParams();
  const { patient, doctor } = useLocation().state;
  const id = params.id;
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
            color={editMode === "profile" ? "primary" : "secondary"}
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
        </div>
        {editMode === "history" && (
          <MedicalHistoryForm patient={userDetails} {...{ id }} />
        )}
        {editMode === "profile" && (
          <MedicalProfileForm patient={userDetails} {...{ id }} />
        )}
      </div>
    </div>
  );
};

export default EditUser;
