import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "../../../components/Button";
import PersonalProfile from "../../../components/PersonalProfile";
import Patient from "../../patients/components/Patient";

const DoctorDetailsPage = () => {
  const navigate = useNavigate();
  const doctor = useLocation().state;

  return (
    <div className="h-full">
      <div className="flex items-center relative">
        <div className="flex gap-x-2 text-grey-100 text-sm">
          <span
            className="hover:underline cursor-pointer underline-offset-8"
            onClick={() => navigate(-1)}
          >
            Doctors
          </span>
          /<span className="">Doctor details</span>
        </div>

        <Button
          title="Edit"
          className="absolute right-0 w-fit px-8 py-2"
          onClick={() => navigate("edit", { state: doctor })}
        />
      </div>
      <div className={twMerge("grid mt-4")}>
        <div className={twMerge("border rounded-lg")}>
          <Patient {...doctor } className="" size="md" />
          <PersonalProfile user={doctor} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
