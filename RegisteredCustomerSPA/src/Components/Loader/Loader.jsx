import React from "react";
import loading from "../../images/loading.svg";
import { Loader } from "./Loader.style";

const Loading = () => (
  <Loader>
    <img src={loading} alt="Loading" />
  </Loader>
);

export default Loading;
