import { Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import SettingsPage from "../pages/settings";
import ZoomComponent from "./ZoomComponent";
import ChatPage from "../chat";
import HospitalPatientsPage from "../pages/hospital/patients";

// Utils
import { ROLE } from "../utils/constants";
import HospitalDoctorsPage from "../pages/hospital/doctors";
import EditPatient from "../pages/patients/edit";

const WithFixedSidebar = () => {
  const [pageTitle, setPageTitle] = useState<string>("Overview");
  const role = localStorage.getItem("role");
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar {...{ setPageTitle }} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar title={pageTitle} />
        <div className="flex-1 px-6 py-8">
          <Suspense fallback={<Loader />}>
            <Routes>
              {role === ROLE.DOCTOR && (
                <>
                  <Route path="/" element={<OverviewPage />} />
                  <Route path="/meeting" element={<ZoomComponent />} />

                  <Route path="/overview" element={<OverviewPage />} />
                  <Route path="/patients" element={<PatientsPage />} />
                  <Route path="/reviews" element={<ReviewsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/appointments" element={<AppointmentsPage />} />
                  <Route path="/messages" element={<ChatPage />} />
                  <Route path="*" element={<Navigate to={"/"} replace />} />
                </>
              )}
              {role === ROLE.HOSPITAL && (
                <>
                  <Route path="/patients" element={<HospitalPatientsPage />} />
                  <Route path="/doctors" element={<HospitalDoctorsPage />} />
                </>
              )}
              <Route
                path="/patients/:id"
                element={<PatientDetailsPage />}
              />
              <Route
                path="/patients/:id/edit"
                element={<EditPatient />}
              />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WithFixedSidebar;
