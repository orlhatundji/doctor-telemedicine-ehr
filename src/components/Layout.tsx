import { Suspense, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Loader from "./Loader";

// Pages
import AppointmentsPage from "../pages/appointments";
import OverviewPage from "../pages/overview";
import PatientsPage from "../pages/patients";
import PatientDetailsPage from "../pages/patients/details";
import ReviewsPage from "../pages/reviews";

const WithFixedSidebar = () => {
  const [pageTitle, setPageTitle] = useState<string>("Overview");
  return (
    <div className="flex h-screen">
      <Sidebar {...{ setPageTitle }} />

      <div className="flex-1 flex flex-col">
        <Topbar title={pageTitle} />
        <div className="flex-1 px-6 py-8">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route
                path="/patients"
                element={<PatientsPage />}
              />
              <Route
                path="/patients/:id"
                element={<PatientDetailsPage />}
              />
              <Route
                path="/reviews"
                element={<ReviewsPage />}
              />
              <Route
                path="/appointments"
                element={<AppointmentsPage />}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WithFixedSidebar;
