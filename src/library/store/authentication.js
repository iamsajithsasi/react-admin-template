import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isLogged: false,
    loginData: null
  },
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = {
        isLogged: action.payload.isLogged,
        loginData: action.payload.data,
      };
    },
  },
});

export const { updateUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
