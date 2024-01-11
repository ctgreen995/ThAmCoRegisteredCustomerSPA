import React from "react";
import CreateOrder from "./CreateOrder";
import { useSelector } from "react-redux";

const CreateOrderContainer = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const customer = useSelector((state) => state.customer.customer);
  const basket = useSelector((state) => state.basket.basket);

  const createNewOrder = async (order) => {
    try {
      const response = await fetch(`${apiUrl}/orders/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to create order", response.statusText);
      }
      return await response.json();
      console.log(order);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CreateOrder
      createNewOrder={createNewOrder}
      customerDetails={customer}
      basket={basket}
    />
  );
};

export default CreateOrderContainer;
