import React, { useEffect, useState } from "react";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";

// Components
import { Button } from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";

// Assets
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

const HospitalPatientsPage: React.FC = () => {
  const [patients, setPatients] = useState([]);
  const [queryPatients, setQueryPatients] = useState(patients);
  const handleSearch = (query: string) => {
    const filteredPatients = patients.filter((patient: any) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );
    setQueryPatients(filteredPatients);
  };
  useEffect(() => {
    axiosInstance
      .get("/patient")
      .then((res) => {
        let patients = res.data.map((patient: any) => {
          return {
            id: patient.id,
            name: patient.user.name,
            age: patient.age || 30,
            email: patient.user?.email,
            phone: patient.phone,
            noOfVisits: patient.noOfVisits,
            recentVisit: patient.recentVisit,
            upComingVisit: patient.upComingVisit,
          };
        });
        setPatients(patients);
        setQueryPatients(patients);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-fit ">
          <SearchInput placeholder="Search patients" onSearch={handleSearch} />
        </div>
        <Button className="w-fit px-4" title="Add Patient" />
      </div>

      <table className="w-full table-auto border-collapse border shadow-lg mt-10">
        <thead>
          <tr className="">
            <th className="text-left border px-4 py-4">Name</th>
            <th className="border px-4 py-4 text-center">Age</th>
            <th className="border px-4 py-4 text-center">Email</th>
            <th className="border px-4 py-4 text-center">Phone</th>
            <th className="border px-4 py-4 text-center">No of <br /> Visits</th>
            <th className="border px-4 py-4 text-center">Recent <br /> Visit</th>
            <th className="border px-4 py-4 text-center">Upcoming <br /> Visit</th>
          </tr>
        </thead>
        <tbody>
          {queryPatients.map((patient: any) => (
            <tr key={patient.id} className="">
              <td className="border px-4 py-4 whitespace-nowrap ">
                {patient.name}
              </td>
              <td className="border px-4 py-4 text-center">{patient.age}</td>
              <td className="border px-4 py-4 text-center">{patient.email}</td>
              <td className="border px-4 py-4 text-center">{patient.phone || "-"}</td>
              <td className="border px-4 py-4 text-center">{patient.noOfVisits || "-"}</td>
              <td className="border px-4 py-4 text-center">
                {patient.recentVisit || "-"}
              </td>
              <td className="border px-4 py-4 text-center">
                {patient.upComingVisit || "-"}
              </td>
              <td className="border px-4 py-4 text-center">
                <div className="p-2 bg-secondary-300 rounded flex items-center justify-center">
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

export default HospitalPatientsPage;
