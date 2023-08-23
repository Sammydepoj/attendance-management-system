import { useState } from "react";
import { Button } from "antd";
import { BASE_URL } from "../../../constants/baseUrl";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const ClockOutButton = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const clockOutHandler = async () => {
    setLoading(true);
    try {
      const clockOut = await fetch(`${BASE_URL}clockout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await clockOut.json();
      const time = new Date().getHours();
      if (!clockOut.ok) {
        toast.error(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      if (clockOut.ok && time >= 14) {
        localStorage.removeItem("clockInStatus");
        toast.success(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
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
