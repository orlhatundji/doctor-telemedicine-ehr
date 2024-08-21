import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { getAge } from "../../../utils/helpers";
import { axiosInstance } from "../../../utils/baseAxios";

// Components
import { Button } from "../../../components/Button";
import SearchInput from "../../../components/SearchInput";
import DeletePrompt from "../patients/components/DeletePrompt";
import NewDoctorForm from "./components/NewPatientForm";

// Assets
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";

const HospitalDoctorsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
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
          const user = doctor.user;
          return {
            specialty: doctor.specialty,
            patientCount: doctor._count.assignedPatients,
            id: user.id,
            name: user.name,
            age: getAge(user.dateOfBirth) || "-",
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
        <Button
          className="w-fit px-4"
          title={showAddDoctorModal ? "Cancel" : "Add Doctor"}
          onClick={() => setShowAddDoctorModal((prev) => !prev)}
        />
      </div>


      <div className="w-full max-w-full max-h-full overflow-auto pb-10 pr-5">
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
              <td
                className="border px-8 py-4 whitespace-nowrap cursor-pointer"
                onClick={() => navigate(`${doctor.id}`, { state: doctor })}
              >
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
              <td className="border px-4 py-4 text-center relative">
                <DeletePrompt id={doctor.id} isDoctor />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <NewDoctorForm
        show={showAddDoctorModal}
        setShow={setShowAddDoctorModal}
      />
      </div>
    </>
  );
};

export default HospitalDoctorsPage;
