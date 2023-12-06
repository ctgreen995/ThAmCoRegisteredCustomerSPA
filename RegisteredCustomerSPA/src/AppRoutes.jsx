import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreenContainer from "./Components/HomeScreen/HomeScreenContainer";
import ProductsContainer from "./Components/Products/ProductsContainer";
import CustomerAccountSection from "./Components/CustomerAccount/CustomerAccountSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomeScreenContainer />} />
      <Route path="/products" exact element={<ProductsContainer />} />
      <Route path="/account/*" exact element={<CustomerAccountSection />} />
    </Routes>
  );
};

export default AppRoutes;
