import React from "react";
import { useSelector } from "react-redux";
import Basket from "./Basket";

const BasketContainer = () => {
  const basket = useSelector((state) => state.basket.basket);

  const groupedBasketItems = basket.reduce((acc, product) => {
    const found = acc.find((item) => item.key === product.key);
    if (found) {
      found.quantity += 1;
      found.totalPrice += product.price;
    } else {
      acc.push({ ...product, quantity: 1, totalPrice: product.price });
    }
    return acc;
  }, []);

  const basketTotal = basket.reduce(
    (total, product) => total + product.price,
    0
  );
  return <Basket basketItems={groupedBasketItems} total={basketTotal} />;
};

export default BasketContainer;
