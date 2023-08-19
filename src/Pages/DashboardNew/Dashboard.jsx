import Sidebar from "./components/SideBar";
import ClockInButton from "./components/ClockInButton";
import { Outlet } from "react-router-dom";
import ClockOutButton from "./components/ClockOutButton";
import useGetUserInfo from "../../hooks/useGetUserInfo";
const Dashboard = () => {
  const time = new Date().getHours();
  const { userInfo } = useGetUserInfo("getUserInfo", "GET");

  return (
    <div className="grid grid-cols-[15rem_1fr] min-h-[100svh]">
      <div className=" bg-[--white] ">
        <Sidebar />
      </div>
      <div>
        <div>
          <div className=" flex justify-between p-8">
            <div>
              <p className=" text-black-600 font-bold">
                Hi {userInfo?.firstName + " " + userInfo?.lastName}
              </p>
              <h1 className=" text-xl font-bold text-[--green]">
                Welcome to SAIL!
              </h1>
            </div>
            <div>{time >= 14 ? <ClockOutButton /> : <ClockInButton />}</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
