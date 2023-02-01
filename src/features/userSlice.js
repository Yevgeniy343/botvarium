import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activeLinkHandler: (state, { payload }) => {
      state.activeLink = payload;
    },
  },
});

export const { activeLinkHandler } = userSlice.actions;
export default userSlice.reducer;
