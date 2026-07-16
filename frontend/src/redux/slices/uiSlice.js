import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
  searchOpen: false,
  shopModalOpen: false,
  isPageLoading: false,
  toast: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen(state, action) {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setSearchOpen(state, action) {
      state.searchOpen = action.payload;
    },
    toggleSearch(state) {
      state.searchOpen = !state.searchOpen;
    },
    setShopModalOpen(state, action) {
      state.shopModalOpen = action.payload;
    },
    setPageLoading(state, action) {
      state.isPageLoading = action.payload;
    },
    showToast(state, action) {
      state.toast = action.payload;
    },
    clearToast(state) {
      state.toast = null;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setSearchOpen,
  toggleSearch,
  setShopModalOpen,
  setPageLoading,
  showToast,
  clearToast,
} = uiSlice.actions;

export const selectMobileMenuOpen = (state) => state.ui.mobileMenuOpen;
export const selectSearchOpen = (state) => state.ui.searchOpen;
export const selectShopModalOpen = (state) => state.ui.shopModalOpen;
export const selectToast = (state) => state.ui.toast;

export default uiSlice.reducer;
