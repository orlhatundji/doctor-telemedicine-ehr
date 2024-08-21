import { useState } from "react";
import { twMerge } from "tailwind-merge";

// Utils
import { axiosInstance } from "../../../../utils/baseAxios";

// Components
import { Button } from "../../../../components/Button";

// Assets
import { ReactComponent as DeleteIcon } from "../../../../assets/icons/delete.svg";

const DeletePrompt = ({ id, isDoctor = false }: { id: string, isDoctor?: boolean }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    setLoading(true);
    axiosInstance
      .delete(`/${isDoctor ? 'doctor': 'patient'}/${id}`)
      .then((res) => {
        setShow(false)
      })
      .catch((error) => {
        console.error(error);
      });
      setLoading(false)
  };
  return (
    <div>
      <DeleteIcon
        className="cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      />
      {show && (
        <div className="absolute bg-secondary-300 rounded bottom-10 px-5 right-0 p-3 shadow-lg">
          <p className="text-sm">Confirm</p>
          <div className="flex gap-2 mt-2">
            <Button title="Yes" className={twMerge("py-1 px-2")} loading={loading} onClick={handleDelete} />
            <Button
              title="No"
              color="secondary"
              className="py-1 px-2"
              onClick={() => setShow(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletePrompt;
