import Sidebar from "./components/SideBar";
import ClockInButton from "./components/ClockInButton";
import { Outlet, useLocation } from "react-router-dom";
import ClockOutButton from "./components/ClockOutButton";
const Dashboard = () => {
  const { state } = useLocation();
  const time = new Date().getHours();
  return (
    <div className="max-w-full grid grid-cols-[6.5rem_1fr] min-h-[100svh] md:grid-cols-[15rem_1fr]">
      <div className=" bg-[--white] overflow-y-hidden h-[100vh]">
        <Sidebar />
      </div>

      <div className=" w-fit">
        <div className=" p-8 flex flex-wrap gap-4  md:justify-between items-center  ">
          <div>
            <p className=" text-black-600 font-bold">Hi {state?.firstName}</p>
            <h1 className=" text-xl font-bold text-[--green]">
              Welcome to SAIL!
            </h1>
          </div>
          <div>{time >= 14 ? <ClockOutButton /> : <ClockInButton />}</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
