import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreenContainer from "./Components/HomeScreen/HomeScreenContainer";
import ProductsContainer from "./Components/Products/ProductsContainer";
import CustomerManagementContainer from "./Components/CustomerManagement/CustomerManagementContainer";
import CreateOrderContainer from "./Components/Ordering/CreateOrderContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomeScreenContainer />} />
      <Route path="/viewProducts" element={<ProductsContainer />} />
      <Route
        path="/accountManagement"
        element={<CustomerManagementContainer />}
      />
      <Route path="/newOrder" element={<CreateOrderContainer />} />
    </Routes>
  );
};

export default AppRoutes;
