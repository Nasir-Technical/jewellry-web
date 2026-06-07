import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import uiReducer from "./slices/uiSlice";
import shopModeReducer from "./slices/shopModeSlice";
import authReducer from "./slices/authSlice";
import checkoutReducer from "./slices/checkoutSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: cartReducer,
      wishlist: wishlistReducer,
      ui: uiReducer,
      shopMode: shopModeReducer,
      auth: authReducer,
      checkout: checkoutReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
