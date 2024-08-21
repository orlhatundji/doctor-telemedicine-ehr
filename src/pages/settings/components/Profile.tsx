import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

// Components

// Assets
import DoctorImage from "../../../assets/images/doctor.png";
import license from "../../../assets/images/license.png";
import useScreenSize from "../../../hooks/useScreenSize";
import { keyToHeader, removeNull } from "../../../utils/helpers";

const PersonalProfile = ({ user }: { user: any }) => {
  const { height } = useScreenSize();
  const [records, setRecords] = useState<any[]>([]);
  useEffect(() => {
    if (!user) return;
    const userArray = Object.entries(removeNull(user)).map(([key, value]) => ({
      title: key,
      response: value,
    }));
    setRecords(removeNull(userArray));
  }, [user]);
  return (
    <div
      className={twMerge("overflow-auto scroll-m-32")}
      style={{ maxHeight: `${height - 200}px` }}
    >
      <div className="max-w-[668px]">
        {/* <DoctorImage className="mt-8" /> */}
        <img
          src={DoctorImage}
          alt=""
          className="mt-8 max-w-[96px] max-h-[96px] rounded-full"
        />
        <h3 className="header3 text-base mt-7 text-primary">Personal Info</h3>
        <div className="p-4 grid grid-cols-2 gap-y-4 divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full">
          {records.map((record: any, i: number) => (
            <div key={i} className="flex flex-col py-2">
              <div className="flex">
                <h3 className="font-semibold capitalize">
                  {keyToHeader(record.title)}
                </h3>
              </div>
              <span className="text-grey-100 text-sm capitalize">
                {record.response}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="header3 text-base mt-7 text-primary">Professional Info</h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-2">
        <div className="flex flex-col py-4">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Field of Specialization</h3>

            <span className="text-grey-100">{user?.doctor?.specialty}</span>
          </div>
          <div className="flex flex-col py-4">
            <div className="flex">
              <h3 className="text-sm font-semibold">Years of practice</h3>
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
