import React, { useEffect } from "react";
import Products from "./Products";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  removeAllProducts,
} from "../../Redux/Slices/BasketSlice";
import { fetchProducts } from "../../Redux/Slices/ProductsSlice";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const productError = useSelector((state) => state.products.error);
  const products = useSelector((state) => state.products.products);

  const addToBasket = (product) => {
    dispatch(addProduct(product));
  };

  const removeFromBasket = (product) => {
    dispatch(removeProduct(product));
  };

  const emptyBasket = () => {
    dispatch(removeAllProducts());
  };

  const order = () => {
    Navigate("/ordering");
  };

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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Products
      products={products}
      addToBasket={addToBasket}
      basket={basket}
      removeFromBasket={removeFromBasket}
      basketTotal={basketTotal}
      emptyBasket={emptyBasket}
      groupedBasketItems={groupedBasketItems}
      order={order}
      productError={productError}
    />
  );
};

export default ProductsContainer;
