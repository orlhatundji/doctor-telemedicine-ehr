import { useLocation, useNavigate, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "../../../components/Button";
import PersonalProfile from "../../../components/PersonalProfile";
import Patient from "../../patients/components/Patient";
import { axiosInstance } from "../../../utils/baseAxios";
import { useEffect, useState } from "react";

const DoctorDetailsPage = () => {
  const navigate = useNavigate();
  const doctor = useLocation().state;
  const params = useParams();
  const id = params.id;
  const [userDetails, setUserDetails] = useState({ doctor: {}});

  useEffect(() => {
    axiosInstance
      .get(`/doctor/unique?id=${id}`)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id, doctor]);

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
          onClick={() => navigate("edit", { state: { doctor, userDetails } })}
        />
      </div>
      <div className={twMerge("h-full mt-4")}>
        <div className={twMerge("border rounded-lg")}>
          <Patient {...doctor } className="" size="md" />
          <PersonalProfile user={doctor} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
