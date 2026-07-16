import axios from "axios";
import { API_BASE_URL, API_TIMEOUT } from "@/services/constants";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function createApiClient(overrides = {}) {
  return axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...overrides,
  });
}
