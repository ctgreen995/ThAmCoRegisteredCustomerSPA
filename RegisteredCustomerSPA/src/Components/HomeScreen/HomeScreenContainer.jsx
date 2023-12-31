import React, { useEffect } from "react";
import HomeScreen from "./HomeScreen";
import { useAuth0 } from "@auth0/auth0-react";

const HomeScreenContainer = () => {
  const { isauthenticated, isloading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isauthenticated && !isloading) {
      getAccessTokenSilently();
    }
  }, [getAccessTokenSilently, isauthenticated, isloading]);

  return <HomeScreen />;
};
export default HomeScreenContainer;
