import { useState } from "react";
import { Button } from "antd";
import { BASE_URL } from "../../../constants/baseUrl";

// eslint-disable-next-line react/prop-types
const ClockOutButton = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const clockOutHandler = async () => {
    setLoading(true);
    try {
      const clockIn = await fetch(`${BASE_URL}clockout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify({
        //   location: `${lat}, ${long}`,
        // }),
      });
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
