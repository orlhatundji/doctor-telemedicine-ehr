import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Loader from "./components/Loader";

// Pages
import Auth from "./pages/auth";
import WithFixedSidebar from "./components/Layout";

function App() {
  return (
    <Router>
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
  );
}

export default App;
