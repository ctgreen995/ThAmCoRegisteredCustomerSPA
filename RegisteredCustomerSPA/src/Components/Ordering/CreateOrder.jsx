import React from "react";
import { CreateOrderWrapper } from "./CreateOrder.style";
import BasketContainer from "../Basket/BasketContainer";
import { Row } from "antd";

const CreateOrder = ({ createNewOrder, customerDetails, basket }) => {
  return (
    <CreateOrderWrapper>
      <h1>Create Order</h1>
      <BasketContainer />
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <h3>Customer Details</h3>
        <p>Name: {customerDetails.name}</p>
        <p>Address: {customerDetails.address}</p>
        <p>Town: {customerDetails.town}</p>
        <p>County: {customerDetails.county}</p>
        <p>Postcode: {customerDetails.postCode}</p>
        <p>Phone: {customerDetails.phone}</p>
        <p>Email: {customerDetails.email}</p>
      </Row>
      <button onClick={() => createNewOrder({ customerDetails, basket })}>
        Confirm Order
      </button>
    </CreateOrderWrapper>
  );
};

export default CreateOrder;
