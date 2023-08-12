import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/SideBar/Sidebar"
import StudentDetails from "./components/StudentDetails";
const Dashboard = () => {
  return (
    <div className="">
     <Navbar />
     <div className="grid grid-cols-[20rem_1fr]">
     <Sidebar />
     <StudentDetails/>
     </div>
    </div>
  );
};

export default Dashboard;
