import { configureStore } from "@reduxjs/toolkit";

// reducers
import SideBarReducer from "./sidebar";
import ToastReducer from "./toast";
import AuthenticationReducer from "./authentication";

export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    toast: ToastReducer,
    authentication: AuthenticationReducer,
  },
});
