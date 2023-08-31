import { useEffect, useState } from "react";
import useGetLocation from "../../../hooks/useGetLocation";
import { Button } from "antd";
import { BASE_URL } from "../../../constants/baseUrl";
import toast from "react-hot-toast";
import useGetUserInfo from "../../../hooks/useGetUserInfo";
const ClockInButton = () => {
  const { lat, long, getUserLocation } = useGetLocation();
  const { userInfo } = useGetUserInfo("getUserInfo");

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const clockInHandler = async () => {
    // console.log(lat, long);
    setLoading(true);
    try {
      const clockIn = await fetch(`${BASE_URL}clockin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          location: `${lat}, ${long}`,
        }),
      });
      const response = await clockIn.json();
      const time = new Date().getHours();
      if (!clockIn.ok) {
        toast.error(response?.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      if (clockIn.ok && time <= 14) {
        localStorage.setItem("clockInStatus", response.data.clockInStatus);
        toast.success(response?.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        loading={loading}
        type="primary"
        className=" bg-blue-400 p-4 rounded-md text-slate-200 font-bold flex items-center"
        onClick={clockInHandler}
        disabled={userInfo?.clockInStatus}
      >
        {userInfo?.clockInStatus ? "Clocked In" : "Clock In"}
      </Button>
    </div>
  );
};

export default ClockInButton;
