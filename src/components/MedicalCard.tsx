import { twMerge } from "tailwind-merge";

// Hooks
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";
import { keyToHeader, removeNull } from "../utils/helpers";

const MedicalCard = ({ userDetails }: { userDetails: any }) => {
  const { height } = useScreenSize();
  const cardHeight = `${height - 450}px`;
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    if (!userDetails && !userDetails.patient) return;
    const userArray = Object.entries(removeNull(userDetails.patient)).map(
      ([key, value]) => {
        if (typeof value === "string" || typeof value === "number") { 
          return {
            title: keyToHeader(key),
            response: value,
          };
        }
      }
    );
    setRecords(removeNull(userArray));
  }, [userDetails]);

  return (
    <div
      className="p-4 grid grid-cols-2 gap-y-6 divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
      style={{ maxHeight: cardHeight }}
    >
      {records?.map((record, i) => (
        <div key={i} className="flex flex-col gap-y-2 py-4">
          <div className="flex">
            <h3 className="font-semibold capitalize">{record.title}</h3>
          </div>
          <div
            className={twMerge(
              "flex divide-x-2 flex-wrap gap-x-2  max-w-[90%] pb-4 overflow-auto"
            )}
          >
            {typeof record.response === 'string' ? record.response?.split(',')?.map((item: string, i: number) => (
              
              <span key={i} className={twMerge("text-sm capitalize", i > 0 && "pl-2")}>
                {item}
              </span>
            )) : 
             <span className="text-sm capitalize">{record.response}</span> 
          }
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalCard;
