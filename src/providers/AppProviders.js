"use client";

import { useEffect } from "react";
import ReduxProvider from "@/redux/provider";
import { MotionProvider } from "@/components/motion";
import Toast from "@/components/ui/Toast";
import { attachStoreInterceptors, apiClient } from "@/services/api";
import { useAppStore } from "@/redux/hooks";
import { setCartItems } from "@/redux/slices/cartSlice";
import { setShopMode } from "@/redux/slices/shopModeSlice";
import {
  loadCartFromStorage,
  saveCartToStorage,
} from "@/services/storage/cartStorage";
import { loadShopModeFromStorage } from "@/services/storage/shopModeStorage";

function StoreInitializer({ children }) {
  const store = useAppStore();

  useEffect(() => {
    attachStoreInterceptors(apiClient, store);

    const cartItems = loadCartFromStorage();
    if (cartItems.length) {
      store.dispatch(setCartItems(cartItems));
    }

    const shopMode = loadShopModeFromStorage();
    if (shopMode.hasSelectedMode) {
      store.dispatch(setShopMode(shopMode.mode));
    }

    const unsubscribe = store.subscribe(() => {
      const { items } = store.getState().cart;
      saveCartToStorage(items);
    });

    return unsubscribe;
  }, [store]);

  return children;
}

export default function AppProviders({ children }) {
  return (
    <ReduxProvider>
      <StoreInitializer>
        <MotionProvider>
          {children}
          <Toast />
        </MotionProvider>
      </StoreInitializer>
    </ReduxProvider>
  );
}
