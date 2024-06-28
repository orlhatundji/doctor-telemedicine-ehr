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
import OverviewPage from "./pages/overview";

function App() {

  return (
    
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/doctor-telemedicine-ehr/" element={<Auth />} />
          <Route path="/doctor-telemedicine-ehr/overview" element={<OverviewPage />} />
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
