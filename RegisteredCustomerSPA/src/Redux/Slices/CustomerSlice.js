import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    authId: "",
    account: {},
    profile: {},
  },
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearCustomer: (state) => {
      state.customer = {};
      state.loading = false;
      state.error = null;
    },
    updateCustomer: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setCustomer, clearCustomer, updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
