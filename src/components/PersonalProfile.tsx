// Components
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { removeNull } from "../utils/helpers";

const UserDetails = ({ user }: { user: any }) => {
  const { height } = useScreenSize();
  const cardHeight = `${height - 400}px`;
  const [records, setRecords] = useState<any[]>([]);
  useEffect(() => {
    const userArray = Object.entries(removeNull(user)).map(([key, value]) => ({
      title: key,
      response: value,
    }));
    setRecords(removeNull(userArray));
  }, [user]);

  const keyToHeader = (key: string) => {
    switch (key) {
      case "dateOfBirth":
        return "Date of birth";
      case "emergencyContact":
        return "Emergency contact";
      case "nextOfKin":
        return "Next of kin";
      case "nextOfKinRelationship":
        return "Next of kin relationship";
      case "maritalStatus":
        return "Marital status";
      case "patientCount":
        return "Patient count";
      default:
        return key;
    }
  }

  return (
    <div
      className="p-4 flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
      style={{ maxHeight: cardHeight }}
    >
      {records.map((record: any, i: number) => (
        <div key={i} className="flex flex-col py-2">
          <div className="flex">
            <h3 className="font-semibold capitalize">{keyToHeader(record.title)}</h3>
          </div>
          <span className="text-grey-100 text-sm capitalize">{record.response}</span>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
