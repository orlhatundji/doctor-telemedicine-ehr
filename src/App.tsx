import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import InstallButton from "./components/InstallButton";
import Loader from "./components/Loader";
import WithFixedSidebar from "./components/Layout";

// Pages
import Auth from "./pages/auth";

// Contexts
import { useAuth } from "./contexts/authContext";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router basename="/">
      <InstallButton />
      <Suspense fallback={<Loader />}>
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/doctor-telemedicine-ehr/auth" element={<Auth />} />
              <Route
                path="*"
                element={
                  <Navigate to={"/doctor-telemedicine-ehr/auth"} replace />
                }
              />

            </>
          ) : (
            <>
              <Route
                path="/doctor-telemedicine-ehr/*"
                index
                element={<WithFixedSidebar />}
              />

              <Route
                path="*"
                element={<Navigate to={"/doctor-telemedicine-ehr/"} replace />}
              />
            </>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
