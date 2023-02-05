import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: [],
  activeDirection: [],
  menuToggle: false,
  isSubmenu: false,
  subMenuLocation: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openSubmenu: (state, { payload }) => {
      console.log(payload);
      state.subMenuLocation = payload;
      state.isSubmenu = true;
    },
    menuToggleHandler: (state) => {
      state.menuToggle = !state.menuToggle;
    },
    activeLinkDirection: (state, { payload }) => {
      state.activeLink = payload;
    },
    activeLinkHandler: (state, { payload }) => {
      state.activeLink = payload;
    },
  },
});

export const {
  activeLinkHandler,
  activeLinkDirection,
  menuToggleHandler,
  openSubmenu,
} = userSlice.actions;
export default userSlice.reducer;
