import React, { useEffect, useState } from "react";

// Components
import Patient from "./components/Patient";
import SearchInput from "../../components/SearchInput";
import { axiosInstance } from "../../utils/baseAxios";
import { getAge } from "../../utils/helpers";

const PatientsPage: React.FC = () => {

  const [patients, setPatients] = useState([]);
  const [queryPatients, setQueryPatients] = useState(patients);
  const handleSearch = ( query: string ) => {
    const filteredPatients = patients.filter((patient: any) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );
    setQueryPatients(filteredPatients);
  }
  useEffect(() => {
    axiosInstance.get("/patient").then((res) => {
      let patients = res.data.map((patient: any) => {
        return {
          id: patient.user.id,
          name: patient.user?.name,
          age: getAge(patient.user?.dateOfBirth),
          email: patient.user?.email,
          phone: patient.user?.phone,
        };
      });
      setPatients(patients);
      setQueryPatients(patients);
    }).catch((error) => {
      console.error(error);
    });
  } , []);
 
  return (
    <>
      <div className="w-fit">
        <SearchInput 
          placeholder="Search patients"
          onSearch={handleSearch}
        />
      </div>

      <div className="flex gap-6 flex-wrap mt-6">
        {queryPatients.map((patient:any) => (
          <Patient
            key={patient.id}
            {...patient}
            patient={patient}
            showViewMore
            className="border rounded-lg min-w-[328px]"
          />
        ))}
      </div>
    </>
  );
};

export default PatientsPage;
