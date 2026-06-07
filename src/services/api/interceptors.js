import { clearCredentials } from "@/redux/slices/authSlice";

export function setupRequestInterceptor(client, getToken) {
  return client.interceptors.request.use(
    (config) => {
      const token = typeof getToken === "function" ? getToken() : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
}

export function setupResponseInterceptor(client, { onUnauthorized } = {}) {
  return client.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error?.response?.status;

      if (status === 401 && typeof onUnauthorized === "function") {
        onUnauthorized();
      }

      return Promise.reject(normalizeApiError(error));
    }
  );
}

export function attachStoreInterceptors(client, store) {
  setupRequestInterceptor(client, () => store.getState().auth.token);

  setupResponseInterceptor(client, {
    onUnauthorized: () => {
      store.dispatch(clearCredentials());
    },
  });
}

export function normalizeApiError(error) {
  if (error?.response?.data) {
    return {
      status: error.response.status,
      message: error.response.data.message ?? "Request failed",
      data: error.response.data,
      original: error,
    };
  }

  return {
    status: null,
    message: error?.message ?? "Network error",
    data: null,
    original: error,
  };
}
