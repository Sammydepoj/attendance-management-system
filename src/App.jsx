/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Sigin from "./Pages/Signin/Sigin";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUpp from "./Pages/SignUpp/SignUpp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup-test" element={<SignUpp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
