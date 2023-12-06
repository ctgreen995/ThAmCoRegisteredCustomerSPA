import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.basket.push(action.payload);
    },
    removeProduct: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      if (index >= 0) {
        state.basket.splice(index, 1);
      }
    },
    removeAllProducts: (state) => {
      state.basket = [];
    },
  },
});

export const { addProduct, removeProduct, removeAllProducts } =
  basketSlice.actions;

export default basketSlice.reducer;
