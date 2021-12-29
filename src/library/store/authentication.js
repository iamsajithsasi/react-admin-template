import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { postMethod } from "../api";

import { loginUrl } from "../constant";

const initialState = {
  value: {
    isLogged: false,
    loginData: null,
  },
};

export const authenticateUser = createAsyncThunk(
  "authentication/user",
  async (data, thunkAPI) => {
    const response = await postMethod(loginUrl, data);
    return response;
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.value = {
        isLogged: action.payload.isLogged,
        loginData: action.payload,
      };
    },
  },
  extraReducers: {
    [authenticateUser.fulfilled]: (state, action) => {
      state.isLogged = true;
      state.loginData = action.payload;
    },
    [authenticateUser.rejected]: (state, action) => {
      state.isLogged = false;
      state.loginData = null;
    },
    [authenticateUser.pending]: (state, action) => {
      state.isLogged = false;
      state.loginData = null;
    },
  },
});

export const { updateUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
