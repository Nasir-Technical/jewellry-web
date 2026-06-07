import { STORAGE_KEYS } from "@/services/constants";
import { SHOP_MODES } from "@/redux/slices/shopModeSlice";

export function loadShopModeFromStorage() {
  if (typeof window === "undefined") {
    return { mode: SHOP_MODES.RETAIL, hasSelectedMode: false };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.shopMode);
    if (!raw) return { mode: SHOP_MODES.RETAIL, hasSelectedMode: false };
    return JSON.parse(raw);
  } catch {
    return { mode: SHOP_MODES.RETAIL, hasSelectedMode: false };
  }
}

export function saveShopModeToStorage(payload) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEYS.shopMode, JSON.stringify(payload));
  } catch {
    // Ignore quota / privacy errors
  }
}

export function clearShopModeStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEYS.shopMode);
}
