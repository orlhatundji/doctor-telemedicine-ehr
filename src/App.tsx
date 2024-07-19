import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Loader from "./components/Loader";
import InstallButton from "./components/InstallButton";

// Pages
import Auth from "./pages/auth";
import WithFixedSidebar from "./components/Layout";
import VideoCall from "./components/VideoCall";
import { CallContextProvider } from "./contexts/callContext";

function App() {
  return (
    <CallContextProvider isCallActive startCall={() => {}} endCall={() => {}}>
    <Router>
      <InstallButton />
      <VideoCall  />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/doctor-telemedicine-ehr/auth" element={<Auth />} />
          <Route path="/doctor-telemedicine-ehr">
            <Route path="/doctor-telemedicine-ehr/*" index element={<WithFixedSidebar />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/doctor-telemedicine-ehr/" replace />}
          />
        </Routes>
      </Suspense>
    </Router>
    </CallContextProvider>
  );
}

export default App;
