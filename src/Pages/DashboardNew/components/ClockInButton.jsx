import { useEffect, useState } from 'react';
import useGetLocation from '../../../hooks/useGetLocation';

const ClockInButton = () => {
  const { lat, long, getUserLocation } = useGetLocation();

  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");
  const clockInHandler = async () => {
    console.log(lat, long);
    setLoading(true);
    try {
      const clockIn = await fetch(
        "https://ams-backend-yjri.onrender.com/clockin",
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
        if (response?.responseMessage === "User Already Clocked In") {
          setLoading(true);
        }
      console.log(response);
      alert(response?.responseMessage);
    } catch (error) {
      console.log(error);
    }
  };
    
  return (
    <div>
      <button className=" bg-blue-600 p-4 rounded-md text-slate-200 font-bold"
      onClick={clockInHandler}
      disabled={loading}
      >
        Clock In
      </button>
    </div>
  );
}

export default ClockInButton