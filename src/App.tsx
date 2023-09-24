import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";
import Aadhaar from "./Pages/Aadhaar";

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={<Signup setIsSignedUp={setIsSignedUp} />}
          />
          <Route
            path="signup/aadhaar"
            element={isSignedUp ? <Aadhaar /> : <Navigate to="/signup" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
