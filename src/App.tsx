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
              <Route path="/auth" element={<Auth />} />
              <Route
                path="*"
                element={
                  <Navigate to={"/auth"} replace />
                }
              />

            </>
          ) : (
            <>
              <Route
                path="/*"
                index
                element={<WithFixedSidebar />}
              />

              {/* <Route
                path="*"
                element={<Navigate to={"/"} replace />}
              /> */}
            </>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
