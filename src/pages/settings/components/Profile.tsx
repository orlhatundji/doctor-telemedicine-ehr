import { useState } from "react";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "../../../components/Button";

// Assets
import  DoctorImage from "../../../assets/images/doctor.png";
import license from "../../../assets/images/license.png";
import useScreenSize from "../../../hooks/useScreenSize";

const records = [
  {
    title: "Name",
    response: "Dr. Kunle Adesegun",
  },
  {
    title: "Email",
    response: "kunleadesegun@gmail.com",
  },
  {
    title: "Phone Number",
    response: "08012345678",
  },
  {
    title: "Date of Birth",
    response: "12th December, 1980",
  },
  {
    title: "Address",
    response: "12, Olaoluwa Street, Ikeja, Lagos",
  },
  {
    title: "Language",
    response: "English",
  },
  {
    title: "Gender",
    response: "Male",
  },
];

const PersonalProfile = () => {
  const [, setShow] = useState(false);
  const { height } = useScreenSize();
  return (
    <div
      className={twMerge("overflow-auto scroll-m-32")}
      style={{ maxHeight: `${height - 200}px` }}
    >
      <div className="max-w-[668px]">
        {/* <DoctorImage className="mt-8" /> */}
        <img src={DoctorImage} alt="" className="mt-8" />
        <h3 className="header3 text-base mt-7 text-primary">Personal Info</h3>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-5">
          {records.map((record, i) => (
            <div key={i} className="flex flex-col py-4">
              <div className="flex">
                <h3 className="text-sm font-semibold leading-[0rem]">
                  {record.title}
                </h3>
                <Button
                  type="button"
                  className={twMerge(
                    "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                    "p-0"
                  )}
                  onClick={() => setShow(true)}
                  title="Edit"
                />
              </div>
              <span className="text-grey-100">{record.response}</span>
            </div>
          ))}
        </div>
        <h3 className="header3 text-base mt-7 text-primary">Work Experience</h3>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-2">
          <div className="flex flex-col py-4">
            <div className="flex">
              <h3 className="text-sm font-semibold leading-[0rem]">
                Field of Specialization
              </h3>
              <Button
                type="button"
                className={twMerge(
                  "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                  "p-0"
                )}
                onClick={() => {}}
                title="Edit"
              />
            </div>
            <span className="text-grey-100">Cardiologist</span>
          </div>
          <div className="flex flex-col py-4">
            <div className="flex">
              <h3 className="text-sm font-semibold leading-[0rem]">
                Years of practice
              </h3>
              <Button
                type="button"
                className={twMerge(
                  "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                  "p-0"
                )}
                onClick={() => {}}
                title="Edit"
              />
            </div>
            <span className="text-grey-100">5 years</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">License No</h3>
            <img src={license} alt="doctor's license" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
