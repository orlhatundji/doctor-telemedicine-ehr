import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Hooks
import useScreenSize from "./hooks/useScreenSize";

// Components
import Loader from "./components/Loader";

// Pages
import Auth from "./pages/auth";

function App() {

  return (
    
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/doctor-telemedicine-ehr/" element={<Auth />} />
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
