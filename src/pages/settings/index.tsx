import React, { useEffect } from "react";
import { ProgressB } from "../../components/Progress";

// Components
import LoginAndSecurity from "./components/SecurityAndLogin";
import { axiosInstance } from "../../utils/baseAxios";
import PersonalProfile from "./components/Profile";
import dayjs from "dayjs";

const Setting = () => {
  const [step, setStep] = React.useState(0);
  const [userDetails, setUserDetails] = React.useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (!id) return;
    axiosInstance
      .get(`/doctor/unique?id=${id}`)
      .then((res) => {
        const doctorId = res.data.doctor.id;
        res.data.id = doctorId;
        res.data.dateOfBirth = dayjs(res.data.dateOfBirth).format("dddd, MMMM D, YYYY");
        delete res.data.doctor;
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);
  return (
    <div className="h-full overflow-hidden">
      <ProgressB
        options={["Profile", "Change password"]}
        centered
        {...{ step, setStep }}
      />
      {step === 0 && (
        <>
          <PersonalProfile user={userDetails} />
        </>
      )}
      {step === 1 && <LoginAndSecurity />}
    </div>
  );
};

export default Setting;
