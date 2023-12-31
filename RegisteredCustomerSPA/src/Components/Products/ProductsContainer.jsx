import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  removeAllProducts,
} from "../../Redux/Slices/BasketSlice";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const addToBasket = (product) => {
    dispatch(addProduct(...products, product));
  };

  const removeFromBasket = (product) => {
    dispatch(
      removeProduct(products.filter((item) => item.key !== product.key))
    );
  };

  const emptyBasket = () => {
    dispatch(removeAllProducts([]));
  };

  const order = () => {
    console.log("Order");
    navigate("/newOrder");
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("products/getProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch products", response.statusText);
      }
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <Products
      products={products}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      emptyBasket={emptyBasket}
      order={order}
    />
  );
};

export default ProductsContainer;
