import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCartError(state, action) {
      state.error = action.payload;
    },
    setCartItems(state, action) {
      state.items = action.payload;
      state.error = null;
    },
    addCartItem(state, action) {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity ?? 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity ?? 1 });
      }
    },
    removeCartItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity(state, action) {
      const item = state.items.find((entry) => entry.id === action.payload.id);
      if (!item) return;
      item.quantity = Math.max(1, action.payload.quantity);
    },
    clearCart(state) {
      state.items = [];
      state.error = null;
    },
  },
});

export const {
  setCartLoading,
  setCartError,
  setCartItems,
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartSubtotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
