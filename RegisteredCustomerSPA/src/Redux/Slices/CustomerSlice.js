import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    authId: "",
    account: {},
    profile: {},
  },
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    clearCustomer: (state) => {
      state.customer = {};
    },
  },
});

export const { setCustomer, clearCustomer, updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
