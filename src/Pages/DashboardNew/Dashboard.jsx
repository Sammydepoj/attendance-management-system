import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";
const Dashboard = () => {
  const { userInfo: userDetails } = useGetUserInfo("getUserInfo");

  return (
    <div className=" grid grid-cols-[6.5rem_1fr] min-h-[100svh] md:grid-cols-[15rem_1fr] ">
      <div className=" bg-[--white] h-[100vh]">
        <Sidebar />
      </div>

      <div className="">
        <div className=" p-8 flex flex-wrap gap-4 justify-between items-center  ">
          <div>
            <p className=" text-black-600 font-bold">
              Hi {userDetails?.firstName + " " + userDetails?.lastName}
            </p>
            <h1 className=" text-xl font-bold text-[--green]">
              Welcome to SAIL!
            </h1>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
