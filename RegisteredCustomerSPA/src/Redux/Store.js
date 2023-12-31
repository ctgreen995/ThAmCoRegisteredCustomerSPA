import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./Slices/ThemeSlice";
import pageStateReducer from "./Slices/PageStateSlice";
import basketReducer from "./Slices/BasketSlice";
import customerReducer from "./Slices/CustomerSlice";

const store = configureStore({
  reducer: {
    themes: themesReducer,
    pageState: pageStateReducer,
    basket: basketReducer,
    customer: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
    }),
});

export default store;
