import React from "react";

// Components
import Patient from "./components/Patient";

const PatientsPage: React.FC = () => {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      email: "jdoe@gmail.com",
      phone: "1234567890",
      noOfVisits: 5,
      recentVisit: "1 July 2024",
      upComingVisit: "1 July 2024"
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "jandoe1999@gmail.com",
      phone: "1234567890",
      noOfVisits: 5,
      recentVisit: "1 July 2024",
      upComingVisit: "1 July 2024"
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "jandoe1999@gmail.com",
      phone: "1234567890",
      noOfVisits: 5,
      recentVisit: "1 July 2024",
      upComingVisit: "1 July 2024"
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "jandoe1999@gmail.com",
      phone: "1234567890",
      noOfVisits: 5,
      recentVisit: "1 July 2024",
      upComingVisit: "1 July 2024"
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "jandoe1999@gmail.com",
      phone: "1234567890",
      noOfVisits: 5,
      recentVisit: "1 July 2024",
      upComingVisit: "1 July 2024"
    },

  ]
  return (
    <div className="flex gap-6 flex-wrap">
      {patients.map((patient) => (
        <Patient key={patient.id} {...patient} />
      ))}
    </div>
  );
};

export default PatientsPage
