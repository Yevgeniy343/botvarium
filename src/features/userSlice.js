import { createSlice } from "@reduxjs/toolkit";
import sublinks from "../Data/sub-links";

const initialState = {
  activeLink: [],
  activeDirection: [],
  menuToggle: false,
  isSubmenu: false,
  subMenuLocation: [],
  currentPage: "",
  currentLinks: [],
  treeData: [],
  search: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    searchHandler: (state, { payload }) => {
      state.search = payload;
    },
    treeDataHandler: (state, { payload }) => {
      state.treeData = payload;
    },
    currentPageHandler: (state, { payload }) => {
      // console.log(payload);
    },
    closeSubmenu: (state) => {
      state.isSubmenu = false;
    },
    openSubmenu: (state, { payload }) => {
      state.subMenuLocation = payload;
      state.isSubmenu = true;
      const page = sublinks.find(
        (link) => link.page === state.subMenuLocation.page
      );
      state.currentPage = page.page;
      state.currentLinks = page.links;
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
  currentPageHandler,
  closeSubmenu,
  treeDataHandler,
  searchHandler,
} = userSlice.actions;
export default userSlice.reducer;
