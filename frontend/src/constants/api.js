export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    me: "/auth/me",
  },
  products: {
    list: "/products",
    detail: (slug) => `/products/${slug}`,
    search: "/products",
  },
  cart: {
    base: "/cart",
  },
  orders: {
    list: "/orders/my-orders",
    create: "/orders",
  },
  wishlist: {
    base: "/wishlist",
  },
  wholesale: {
    inventory: "/wholesale/inventory",
    orders: "/wholesale/orders",
    batch: "/wholesale/batch-request",
    market: "/wholesale/market-insights",
  },
  newsletter: {
    subscribe: "/newsletter/subscribe",
  },
};
