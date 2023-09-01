import { useEffect, useCallback, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

const useGetUserInfo = (endpoint) => {
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const getUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      // console.log(response.data);
      setUserInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [endpoint, token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return { userInfo, loading };
};

export default useGetUserInfo;
