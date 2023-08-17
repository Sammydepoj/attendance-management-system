import { useEffect, useState } from "react";
import useGetLocation from "../../../hooks/useGetLocation";
import { Button } from "antd";

const ClockOutButton = () => {
  const { lat, long, getUserLocation } = useGetLocation();

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const clockOutHandler = async () => {
    // console.log(lat, long);
    setLoading(true);
    try {
      const clockIn = await fetch(
        "https://ams-backend-yjri.onrender.com/clockout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            location: `${lat}, ${long}`,
          }),
        }
      );
      const response = await clockIn.json();
      // if (response?.responseMessage === "User Already Clocked In") {
      //   setLoading(false);
      // }
      alert(response?.responseMessage);
      console.log(response);
      setLoading(false);
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
        onClick={clockOutHandler}
      >
        Clock Out
      </Button>
    </div>
  );
};

export default ClockOutButton;
