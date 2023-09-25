import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { useState } from "react";
import Aadhaar from "./Pages/Aadhaar/Aadhaar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Application from "./Pages/Application/Application";
import Grievance from "./Pages/Grievance/Grievance";
import Scheme from "./Pages/Scheme/Scheme";

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/signup" />}
          />
          <Route
            path="/signup"
            element={
              <Signup setIsSignedUp={setIsSignedUp} />
            }
          />
          <Route
            path="signup/aadhaar"
            element={
              isSignedUp ? (
                <Aadhaar />
              ) : (
                <Navigate to="/signup" />
              )
            }
          />
          {/* TODO: Setup similar route protection for otp */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route path="/apply" element={<Application />} />
          <Route
            path="/grievance"
            element={<Grievance />}
          />
          <Route path="/schemes" element={<Scheme />} />
        </Routes>
      </Router>
    </>
  );
}
