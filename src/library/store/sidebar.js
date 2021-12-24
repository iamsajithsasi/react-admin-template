import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.value = true;
    },
    closeSideBar: (state) => {
      state.value = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
