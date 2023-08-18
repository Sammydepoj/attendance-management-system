import { useEffect, useState } from "react";
import useGetLocation from "../../../hooks/useGetLocation";
import { Button } from "antd";
import { BASE_URL } from "../../../constants/baseUrl";

const ClockInButton = () => {
  const { lat, long, getUserLocation } = useGetLocation();

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Clock In");
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
      if (clockIn.ok) {
        setButtonText("Clocked In");
      }
      setLoading(false);
      console.log(response);
      alert(response?.responseMessage);
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
        disabled={buttonText === "Clocked In"}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ClockInButton;
