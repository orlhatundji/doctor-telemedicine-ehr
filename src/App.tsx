import { Suspense, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CallContext } from "./contexts/callContext";

// Components
import InstallButton from "./components/InstallButton";
import Loader from "./components/Loader";
import WithFixedSidebar from "./components/Layout";
import VideoCall from "./components/VideoFeed";

// Pages
import Auth from "./pages/auth";

// Contexts
import { useAuth } from "./contexts/authContext";

function App() {
  const { isCallActive } = useContext(CallContext);
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <Router>
      <InstallButton />
      {isCallActive && <VideoCall />}
      <Suspense fallback={<Loader />}>
        <Routes>
          {!isAuthenticated ? (
            <>
            <Route path="/doctor-telemedicine-ehr/auth" element={<Auth />} />
            <Route
                path="*"
                element={<Navigate to={"/doctor-telemedicine-ehr/auth"} replace />}
              />
              </> 
          ) : (
            <>
              <Route path="/doctor-telemedicine-ehr">
                <Route
                  path="/doctor-telemedicine-ehr/*"
                  index
                  element={<WithFixedSidebar />}
                />
              </Route>
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
