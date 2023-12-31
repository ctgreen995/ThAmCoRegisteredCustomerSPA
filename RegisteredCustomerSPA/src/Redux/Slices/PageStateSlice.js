import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const localPage = localStorage.getItem("pageState");
  if (localPage) {
    return JSON.parse(localPage);
  }
  return { openPage: "home", openSubPage: "", options: [] };
};

const openPageSlice = createSlice({
  name: "pageState",
  initialState: getInitialState(),
  reducers: {
    updatePageState: (state, action) => {
      let updatedState = { ...state };

      if ("openPage" in action.payload && "options" in action.payload) {
        updatedState = { ...state, ...action.payload };
      } else if ("openPage" in action.payload) {
        updatedState = {
          ...state,
          openPage: action.payload.openPage,
          options: [],
        };
      } else if ("openSubPage" in action.payload) {
        updatedState = { ...state, openSubPage: action.payload.openSubPage };
      }

      Object.assign(state, updatedState);
      localStorage.setItem("pageState", JSON.stringify(updatedState));
    },
  },
});

export const { updatePageState } = openPageSlice.actions;

export default openPageSlice.reducer;
