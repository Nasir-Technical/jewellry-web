import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  shipping: null,
  billing: null,
  paymentMethod: null,
  orderDraft: null,
  isSubmitting: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutStep(state, action) {
      state.step = action.payload;
    },
    setShippingAddress(state, action) {
      state.shipping = action.payload;
    },
    setBillingAddress(state, action) {
      state.billing = action.payload;
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
    setOrderDraft(state, action) {
      state.orderDraft = action.payload;
    },
    setCheckoutSubmitting(state, action) {
      state.isSubmitting = action.payload;
    },
    setCheckoutError(state, action) {
      state.error = action.payload;
    },
    resetCheckout(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setCheckoutStep,
  setShippingAddress,
  setBillingAddress,
  setPaymentMethod,
  setOrderDraft,
  setCheckoutSubmitting,
  setCheckoutError,
  resetCheckout,
} = checkoutSlice.actions;

export const selectCheckoutStep = (state) => state.checkout.step;
export const selectCheckoutDraft = (state) => state.checkout.orderDraft;

export default checkoutSlice.reducer;
