import { useEffect, useCallback, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

const useGetParticipantInfo = () => {
  const [participantsInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const getUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(`${BASE_URL}getAllParticipants`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      // console.log(response.data);
      setLoading(false);
      setUserInfo(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return { participantsInfo, loading };
};

export default useGetParticipantInfo;
