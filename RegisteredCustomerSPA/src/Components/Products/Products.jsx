import React from "react";
import { Card, Row } from "antd";
import { Basket, ProductsWrapper } from "./Products.style";
// import { mockProducts } from "../../Models/MockProducts";

const Products = ({
  products,
  addToBasket,
  basket,
  removeFromBasket,
  basketTotal,
  emptyBasket,
  groupedBasketItems,
  order,
  productError,
}) => {
  return (
    <ProductsWrapper>
      <Row>
        <h1>Products</h1>
      </Row>
      <Basket>
        <h2>Basket</h2>
        <Row gutter={[3, 3]} style={{ display: "flex", gap: 20 }}>
          {groupedBasketItems.map((product) => (
            <div>
              <h3>
                {product.name} x{product.quantity}
              </h3>
              <p>£{product.totalPrice.toFixed(2)}</p>
              <button onClick={() => removeFromBasket(product)}>Remove</button>
            </div>
          ))}
        </Row>
        <div>Total: £{basketTotal.toFixed(2)}</div>
        <button onClick={() => emptyBasket()}>Empty Basket</button>
      </Basket>
      {productError && <h1>{productError}</h1>}
      <Row>
        {products.map((product) => (
          <Card
            hoverable
            style={{ width: 240, height: 600, padding: 10, margin: 10 }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Card.Meta title={product.name} description={`£${product.price}`} />
            <p>{product.description}</p>
            <button
              style={{ width: "100px" }}
              onClick={() =>
                basket.length < 10
                  ? addToBasket(product)
                  : alert("Basket is full")
              }
            >
              Add to Cart
            </button>
          </Card>
        ))}
      </Row>
      <Row>
        <button style={{ width: "100px" }} onClick={() => order}>
          Order
        </button>
      </Row>
    </ProductsWrapper>
  );
};

export default Products;
