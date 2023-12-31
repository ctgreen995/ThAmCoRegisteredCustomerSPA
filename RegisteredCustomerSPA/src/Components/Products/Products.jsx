import React from "react";
import { Card, Row } from "antd";
import { ProductsWrapper } from "./Products.style";
import BasketContainer from "../Basket/BasketContainer";

const Products = ({ products, addToBasket, basket, order, productError }) => {
  return (
    <ProductsWrapper>
      <Row>
        <h1>Products</h1>
      </Row>
      <BasketContainer />
      {productError && <h1>{productError}</h1>}
      <Row>
        {products.map((product) => (
          <Card
            hoverable
            style={{ width: 240, height: 600, padding: 10, margin: 10 }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Card.Meta title={product.name} description={`£${product.price}`} />
            <p>Stock: {product.stock}</p>
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
        <button style={{ width: "100px" }} onClick={() => order()}>
          Order
        </button>
      </Row>
    </ProductsWrapper>
  );
};

export default Products;
