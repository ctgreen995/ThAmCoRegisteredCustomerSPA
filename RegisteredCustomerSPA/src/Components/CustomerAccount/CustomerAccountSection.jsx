import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerAccountContainer from "./CustomerAccountContainer";
import CustomerOrdersContainer from "../Ordering/CustomerOrdersContainer";
import SavedBasketContainer from "./SavedBasket/SavedBasketContainer";
import CustomerProfileContainer from "./Profile/CustomerProfileContainer";

const CustomerAccountSection = () => {
  return (
    <Routes>
      <Route index element={<CustomerAccountContainer />} />
      <Route path="orders" element={<CustomerOrdersContainer />} />
      <Route path="basket" element={<SavedBasketContainer />} />
      <Route path="profile" element={<CustomerProfileContainer />} />
    </Routes>
  );
};

export default CustomerAccountSection;
