import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistLoading(state, action) {
      state.isLoading = action.payload;
    },
    setWishlistError(state, action) {
      state.error = action.payload;
    },
    setWishlistItems(state, action) {
      state.items = action.payload;
      state.error = null;
    },
    toggleWishlistItem(state, action) {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    clearWishlist(state) {
      state.items = [];
      state.error = null;
    },
  },
});

export const {
  setWishlistLoading,
  setWishlistError,
  setWishlistItems,
  toggleWishlistItem,
  clearWishlist,
} = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectIsInWishlist = (id) => (state) =>
  state.wishlist.items.some((item) => item.id === id);

export default wishlistSlice.reducer;
