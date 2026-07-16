import { createSlice } from "@reduxjs/toolkit";

export const SHOP_MODES = {
  RETAIL: "retail",
  WHOLESALE: "wholesale",
};

const initialState = {
  mode: SHOP_MODES.RETAIL,
  hasSelectedMode: false,
};

const shopModeSlice = createSlice({
  name: "shopMode",
  initialState,
  reducers: {
    setShopMode(state, action) {
      state.mode = action.payload;
      state.hasSelectedMode = true;
    },
    resetShopMode(state) {
      state.mode = SHOP_MODES.RETAIL;
      state.hasSelectedMode = false;
    },
  },
});

export const { setShopMode, resetShopMode } = shopModeSlice.actions;

export const selectShopMode = (state) => state.shopMode.mode;
export const selectHasSelectedShopMode = (state) => state.shopMode.hasSelectedMode;
export const selectIsWholesaleMode = (state) => state.shopMode.mode === SHOP_MODES.WHOLESALE;

export default shopModeSlice.reducer;
