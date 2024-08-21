import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Utils
import { axiosInstance } from "../../utils/baseAxios";

// Components
import { Button } from "../../components/Button";
import BackButton from "../../components/BackArrow";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import MedicalProfileForm from "./components/MedicalProfileForm";

const EditPatient = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState<"profile" | "history">("profile");
  const [patient, setPatient] = useState({});
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    axiosInstance
      .get(`/patient/unique?id=${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);
  return (
    <div className="h-[80vh]">
      <div className="flex items-center relative">
        <div className="flex gap-x-2 text-grey-100 text-sm">
          <span
            className="hover:underline cursor-pointer underline-offset-8"
            onClick={() => navigate(-1)}
          >
            Patients
          </span>
          /<span className="">Patient details</span>/
          <span className="">Edit</span>
        </div>
        <Button title="Save" className="absolute right-14 w-fit px-8 py-2" />
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

          <Button
            title="Medical History"
            color={editMode === "history" ? "primary" : "secondary"}
            className="w-fit px-8"
            onClick={() => setEditMode("history")}
          />
        </div>
        {editMode === "history" && <MedicalHistoryForm {...{ patient, id }} />}
        {editMode === "profile" && <MedicalProfileForm {...{ patient, id }} />}
      </div>
    </div>
  );
};

export default EditPatient;
