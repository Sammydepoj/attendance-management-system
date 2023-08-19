import Sidebar from "./components/SideBar";
import ClockInButton from "./components/ClockInButton";
import { Outlet, useLocation } from "react-router-dom";
import ClockOutButton from "./components/ClockOutButton";
import { BASE_URL } from "../../constants/baseUrl";
import { useEffect, useCallback } from "react";
const Dashboard = () => {
  const { state } = useLocation();
  const time = new Date().getHours();
  const token = localStorage.getItem("token");

  const getUserInfo = useCallback(async () => {
    try {
      const request = await fetch(`${BASE_URL}getUserInfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <div className="grid grid-cols-[15rem_1fr] min-h-[100svh]">
      <div className=" bg-[--white] ">
        <Sidebar />
      </div>
      <div>
        <div>
          <div className=" flex justify-between p-8">
            <div>
              <p className=" text-black-600 font-bold">Hi {state?.firstName}</p>
              <h1 className=" text-xl font-bold text-[--green]">
                Welcome to SAIL!
              </h1>
            </div>
            <ClockInButton />
            <div>{time >= 14 ? <ClockOutButton /> : <ClockInButton />}</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
