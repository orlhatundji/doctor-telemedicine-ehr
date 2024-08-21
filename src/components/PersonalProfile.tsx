// Components
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { keyToHeader, removeNull } from "../utils/helpers";

const UserDetails = ({ user }: { user: any }) => {
  const { height } = useScreenSize();
  const cardHeight = `${height - 400}px`;
  const [records, setRecords] = useState<any[]>([]);
  useEffect(() => {
    if(!user) return
    const userArray = Object.entries(removeNull(user)).map(([key, value]) => ({
      title: key,
      response: value,
    }));
    setRecords(removeNull(userArray));
  }, [user]);

  return (
    <div
      className="p-4 grid grid-cols-2 gap-y-6 divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
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
