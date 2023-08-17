import { useState } from "react";

const useGetLocation = () => {
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const getUserLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      setLong(crd.longitude);
      setLat(crd.latitude);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    console.log(
      navigator.geolocation.getCurrentPosition(success, error, options)
    );
    // return longLat;
  };
  return { lat, long, getUserLocation };
};

export default useGetLocation;
