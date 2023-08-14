import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import StudentDetails from "./components/StudentDetails";
const Dashboard = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  console.log(
    navigator.geolocation.getCurrentPosition(success, error, options)
  );
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-[20rem_1fr] ">
        <Sidebar />
        <StudentDetails />
      </div>
    </div>
  );
};

export default Dashboard;
