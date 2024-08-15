import React, { useEffect, useState } from "react";

// Components
import Patient from "./components/Patient";
import SearchInput from "../../components/SearchInput";
import { axiosInstance } from "../../utils/baseAxios";

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "jdoe@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  },
  {
    id: 6,
    name: "Kehinde Bridges",
    age: 25,
    email: "jandoe1999@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  },
  {
    id: 7,
    name: "Onibon Yetunde",
    age: 21,
    email: "jandoe1999@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  },
  {
    id: 8,
    name: "Ejeweke Favour",
    age: 55,
    email: "jandoe1999@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  },
  {
    id: 9,
    name: "Sade Adu",
    age: 25,
    email: "jandoe1999@gmail.com",
    phone: "1234567890",
    noOfVisits: 5,
    recentVisit: "1 July 2024",
    upComingVisit: "1 July 2024",
  }]

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
          id: patient.id,
          name: patient.name,
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
            showViewMore
            className="border rounded-lg min-w-[328px]"
          />
        ))}
      </div>
    </>
  );
};

export default PatientsPage;
