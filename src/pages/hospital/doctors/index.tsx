import React, { useEffect, useState } from "react";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";

// Components
import { Button } from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";

// Assets
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";


const HospitalDoctorsPage: React.FC = () => {
  const [doctors, setDoctors] = useState([]);
  const [queryDoctors, setQueryDoctors] = useState(doctors);
  const handleSearch = (query: string) => {
    const filteredPatients = doctors.filter((patient: any) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );
    setQueryDoctors(filteredPatients);
  };
  useEffect(() => {
    axiosInstance
      .get("/doctor")
      .then((res) => {
        const doctors = res.data.map((doctor: any) => {
          return {
            id: doctor.id,
            name: doctor.user.name,
            age: doctor.age || Math.floor(Math.random() * (65 - 27 + 1)) + 27,
            email: doctor.user?.email,
            phone: doctor.phone,
            specialty: doctor.specialty,
            patientCount:
              doctor.patientCount ||
              Math.floor(Math.random() * (50 - 3 + 1)) + 3,
          };
        });
        setDoctors(doctors);
        setQueryDoctors(doctors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-fit ">
          <SearchInput placeholder="Search doctors" onSearch={handleSearch} />
        </div>
        <Button className="w-fit px-4" title="Add Doctor" />
      </div>

      <table className="w-full table-auto border-collapse border shadow-lg mt-10">
        <thead>
          <tr className="">
            <th className="text-left border px-8 py-4">Name</th>
            <th className="border px-8 py-4 text-center">Age</th>
            <th className="border px-8 py-4 text-center">Email</th>
            <th className="border px-8 py-4 text-center">Phone</th>
            <th className="border px-8 py-4 text-center">Specialty</th>
            <th className="border px-8 py-4 text-center">No of Patients</th>
            <th className="border px-8 py-4 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {queryDoctors.map((doctor: any) => (
            <tr key={doctor.id} className="">
              <td className="border px-8 py-4 whitespace-nowrap ">
                {doctor.name}
              </td>
              <td className="border px-8 py-4 text-center">{doctor.age}</td>
              <td className="border px-8 py-4 text-center">{doctor.email}</td>
              <td className="border px-8 py-4 text-center">
                {doctor.phone || "-"}
              </td>
              <td className="border px-8 py-4 text-center">
                {doctor.specialty || "-"}
              </td>
              <td className="border px-8 py-4 text-center">
                {doctor.patientCount || "-"}
              </td>
              <td className="border px-4 py-4 text-center">
                <div className="p-2 bg-slate-100 rounded flex items-center justify-center">
                  <EditIcon className="cursor-pointer" />
                </div>
              </td>
              <td className="border px-4 py-4 text-center">
                <DeleteIcon className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HospitalDoctorsPage;