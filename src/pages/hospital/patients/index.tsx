import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";
import { getAge } from "../../../utils/helpers";

// Components
import { Button } from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";
import DeletePrompt from "./components/DeletePrompt";
import NewPatientForm from "./components/NewPatientForm";

// Assets
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const HospitalPatientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
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
          const user = patient.user;
          return {
            id: user.id,
            name: user.name,
            age: getAge(user.dateOfBirth),
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            occupation: user.occupation,
            emergencyContact: user.emergencyContact,
            nextOfKin: user.nextOfKin,
            nextOfKinRelationship: user.nextOfKinRelationship,
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
        <Button
          className="w-fit px-4"
          title={showAddPatientModal ? "Cancel" : "Add Patient"}
          onClick={() => setShowAddPatientModal((prev) => !prev)}
        />
      </div>
      <div className="w-full max-w-full max-h-full overflow-auto pb-10 pr-5">
        <table className="w-full table-auto border-collapse border shadow-lg mt-10 ">
          <thead>
            <tr className="">
              <th className="text-left border px-4 py-4">Name</th>
              <th className="border px-4 py-4 text-center">Age</th>
              <th className="border px-4 py-4 text-center">Email</th>
              <th className="border px-4 py-4 text-center">Phone</th>
              <th className="border px-4 py-4 text-center">Gender</th>
              <th className="border px-4 py-4 text-center">Marital Status</th>
              <th className="border px-4 py-4 text-center">Occupation</th>
              <th className="border px-4 py-4 text-center">
                Emergency Contact
              </th>
              <th className="border px-4 py-4 text-center">Next of Kin</th>
              <th className="border px-4 py-4 text-center">Rel. with NOK</th>
            </tr>
          </thead>
          <tbody>
            {queryPatients.map((patient: any) => (
              <tr key={patient.id} className="">
                <td
                  className="border px-4 py-4 whitespace-nowrap cursor-pointer"
                  onClick={() => navigate(`${patient.id}`, { state: patient })}
                >
                  {patient.name}
                </td>
                <td className="border px-4 py-4 text-center">{patient.age}</td>
                <td className="border px-4 py-4 text-center">
                  {patient.email}
                </td>
                <td className="border px-4 py-4 text-center">
                  {patient.phone || "-"}
                </td>
                <td className="border px-4 py-4 text-center capitalize">
                  {patient.gender}
                </td>
                <td className="border px-4 py-4 text-center">
                  {patient.maritalStatus}
                </td>
                <td className="border px-4 py-4 text-center capitalize">
                  {patient.occupation || "-"}
                </td>
                <td className="border px-4 py-4 text-center">
                  {patient.emergencyContact || "-"}
                </td>
                <td className="border px-4 py-4 text-center capitalize">
                  {patient.nextOfKin || "-"}
                </td>
                <td className="border px-4 py-4 text-center capitalize">
                  {patient.nextOfKinRelationship || "-"}
                </td>
                <td className="border px-4 py-4 text-center">
                  <div className="p-2 bg-secondary-300 rounded flex items-center justify-center">
                    <EditIcon
                      className="cursor-pointer"
                      onClick={() => navigate(`${patient.id}/edit`)}
                    />
                  </div>
                </td>
                <td className="border px-4 py-4 text-center relative">
                  <DeletePrompt id={patient.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewPatientForm
        show={showAddPatientModal}
        setShow={setShowAddPatientModal}
      />
    </>
  );
};

export default HospitalPatientsPage;
