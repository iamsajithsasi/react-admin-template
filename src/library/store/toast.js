import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    severity: "",
    summary: "",
    detail: "",
    life: 3000,
  },
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastMessage: (state, action) => {
      state.value = {
        ...state.value,
        severity: action.payload.severity || "info",
        summary: action.payload.summary || "",
        detail: action.payload.detail || "",
      };
    },
  },
});

export const { toastMessage } = toastSlice.actions;

export default toastSlice.reducer;
