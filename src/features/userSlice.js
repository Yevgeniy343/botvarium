import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: [],
  activeDirection: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activeLinkDirection: (state, { payload }) => {
      state.activeLink = payload;
    },
    activeLinkHandler: (state, { payload }) => {
      state.activeLink = payload;
    },
  },
});

export const { activeLinkHandler, activeLinkDirection } = userSlice.actions;
export default userSlice.reducer;
