import axios, { AxiosError } from "axios";
import { createHttpClient } from "./base.lib";
import { ENV } from "@/config/env";

const configApi = axios.create({
  baseURL: ENV.API_SALES,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
}> = [];

const processQueue = (error: unknown) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(undefined);
    }
  });
  failedQueue = [];
};

configApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as typeof error.config & {
      _retry?: boolean;
    };

    const isAuthEndpoint = originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/refresh-token");

    if (error.response?.status !== 401 || originalRequest?._retry || isAuthEndpoint) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(() => configApi(originalRequest!))
        .catch((err) => Promise.reject(err));
    }

    originalRequest!._retry = true;
    isRefreshing = true;

    try {
      await configApi.get("/auth/refresh-token");
      processQueue(null);
      return configApi(originalRequest!);
    } catch (refreshError) {
      processQueue(refreshError);
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export const configApiClient = createHttpClient(configApi);

export default configApiClient;
