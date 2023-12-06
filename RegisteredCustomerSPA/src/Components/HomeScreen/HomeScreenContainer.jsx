import React, { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen";
import { useAuth0 } from "@auth0/auth0-react";

const HomeScreenContainer = () => {
  const [data, setData] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `weatherforecast/getWeatherForecast`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      setData(responseData)
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return <HomeScreen data={data} fetch={fetchData} />;
};
export default HomeScreenContainer;
