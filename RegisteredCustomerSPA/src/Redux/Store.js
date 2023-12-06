import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./Slices/ThemeSlice";
import pageStateReducer from "./Slices/pageStateSlice";
import basketReducer from "./Slices/BasketSlice";
import productsReducer from "./Slices/ProductsSlice";

const store = configureStore({
  reducer: {
    themes: themesReducer,
    pageState: pageStateReducer,
    basket: basketReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});

export default store;
