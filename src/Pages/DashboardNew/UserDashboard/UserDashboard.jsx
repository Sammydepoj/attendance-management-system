import ClockOutButton from "../components/ClockOutButton";
import ClockInButton from "../components/ClockInButton";
import { Outlet } from "react-router";
import useGetUserInfo from "../../../hooks/useGetUserInfo";
import UserSidebar from "./UserSideBar";

const UserDashboard = () => {
  const { userInfo } = useGetUserInfo("getUserInfo", "GET");
  const time = new Date().getHours();
  return (
    <div className="max-w-full grid grid-cols-1 md:grid-cols-3">
      <div className=" bg-[--white] overflow-y-hidden h-screen md:h-auto">
        <UserSidebar />
      </div>

      <div className="flex flex-col ">
        <div className=" p-2 md:p-8 flex flex-col md:flex-row justify-between items-center  ">
          <div className="mb-4 md:mb-0">
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
  );
};

export default UserDashboard;
