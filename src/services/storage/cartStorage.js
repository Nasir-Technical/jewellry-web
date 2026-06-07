import { STORAGE_KEYS } from "@/services/constants";

export function loadCartFromStorage() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.cart);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCartToStorage(items) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
  } catch {
    // Ignore quota / privacy errors
  }
}

export function clearCartStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEYS.cart);
}
