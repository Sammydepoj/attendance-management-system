import Sidebar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";
const Dashboard = () => {
  const { userInfo } = useGetUserInfo("getUserInfo");

  return (
    <div className="max-w-full grid grid-cols-[6.5rem_1fr] min-h-[100svh] md:grid-cols-[15rem_1fr]">
      <div className=" bg-[--white] overflow-y-hidden h-[100vh] relative">
        <Sidebar />
      </div>

      <div className="">
        <div className=" p-8 flex flex-wrap gap-4 justify-between items-center  ">
          <div>
            <p className=" text-black-600 font-bold">
              Hi {userInfo?.firstName + " " + userInfo?.lastName}
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
