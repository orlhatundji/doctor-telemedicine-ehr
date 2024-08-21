// Components
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { removeNull } from "../utils/helpers";

const PatientDetails = ({ patient }: { patient: any }) => {
  const { height } = useScreenSize();
  const cardHeight = `${height - 450}px`;
  const [records, setRecords] = useState<any[]>([]);
  useEffect(() => {
    const patientArray = Object.entries(removeNull(patient)).map(([key, value]) => ({
      title: key,
      response: value,
    }));
    setRecords(removeNull(patientArray));
  }, [patient]);

  return (
    <div
      className="p-4 flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
      style={{ maxHeight: cardHeight }}
    >
      {records.map((record: any, i: number) => (
        <div key={i} className="flex flex-col py-2">
          <div className="flex">
            <h3 className="font-semibold capitalize">{record.title}</h3>
          </div>
          <span className="text-grey-100 text-sm capitalize">{record.response}</span>
        </div>
      ))}
    </div>
  );
};

export default PatientDetails;
