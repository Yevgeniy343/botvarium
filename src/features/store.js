import { configureStore } from "@reduxjs/toolkit";
import userSlise from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlise,
  },
});
