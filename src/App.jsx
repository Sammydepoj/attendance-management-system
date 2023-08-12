/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Sigin from "./Pages/Signin/Sigin";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import StudentDetails from "./Pages/Dashboard/components/StudentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup-test" element={<SignUpp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/details" element={<StudentDetails/>}></Route>
    </Routes>
  );
}

export default App;
