import React from "react";
import { Row } from "antd";

const Basket = ({ basketItems, total }) => {
  if (!basketItems) return <></>;
  return (
    <Basket>
      <h2>Basket</h2>
      <Row gutter={[3, 3]} style={{ display: "flex", gap: 20 }}>
        {basketItems.map((product) => (
          <div>
            <h3>
              {product.name} x{product.quantity}
            </h3>
            <p>£{product.totalPrice.toFixed(2)}</p>
            <button onClick={() => removeFromBasket(product)}>Remove</button>
          </div>
        ))}
      </Row>
      <div>Total: £{total.toFixed(2)}</div>
      <button onClick={() => emptyBasket()}>Empty Basket</button>
    </Basket>
  );
};

export default Basket;
