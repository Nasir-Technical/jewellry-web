export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

export const API_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT ?? 10000);

export const STORAGE_KEYS = {
  cart: "aurelia_cart",
  shopMode: "aurelia_shop_mode",
  authToken: "aurelia_auth_token",
};
