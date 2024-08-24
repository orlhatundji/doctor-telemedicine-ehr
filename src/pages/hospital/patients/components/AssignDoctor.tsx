import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { axiosInstance } from "../../../../utils/baseAxios";

// Components
import Modal from "../../../../components/Modal";
import { Button } from "../../../../components/Button";

type AssignDoctorProps = {
  id: string | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const AssignDoctor: React.FC<AssignDoctorProps> = ({ id, show, setShow }) => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [queryDoctors, setQueryDoctors] = useState(doctors);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      setShow(false);
      return;
    }
    axiosInstance
      .get("/doctor")
      .then((res) => {
        const doctors = res.data.map((doctor: any) => {
          const user = doctor.user;
          return {
            specialty: doctor.specialty,
            name: user.name,
            doctorId: doctor.id,
          };
        });
        setDoctors(doctors);
        setQueryDoctors(doctors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, setShow]);

  const handleAssign = async (doctorId: number) => {
    if (!id) return;
    setLoading(true);
    await axiosInstance
      .post(`/hospital/assign-doctor`, { patientId: +id, doctorId })
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
    setShow(false);
  };

  return (
    <Modal show={show} setShow={setShow} title="Assign Doctor">
      <table className="w-full table-auto border-collapse border shadow-lg mt-10">
        <thead>
          <tr className="">
            <th className="text-left border px-8 py-4">Name</th>
            <th className="border px-8 py-4 text-center">Specialty</th>
          </tr>
        </thead>
        <tbody>
          {queryDoctors.map((doctor: any) => (
            <tr key={doctor.id} className="">
              <td
                className="border px-8 py-4 whitespace-nowrap cursor-pointer"
                onClick={() => navigate(`${doctor.id}`, { state: doctor })}
              >
                {doctor.name}
              </td>
              <td className="border px-8 py-4 text-center">
                {doctor.specialty || "-"}
              </td>
              <td className="border px-8 py-4 text-center">
                <Button
                  title="Assign"
                  className="w-fit px-2 py-1"
                  loading={loading}
                  titleStyle="text-sm"
                  onClick={() => handleAssign(+doctor.doctorId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};

export default AssignDoctor;
