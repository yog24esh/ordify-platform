import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/admin",
});

// Attach session dynamically on every request
axiosInstance.interceptors.request.use((config) => {
  const sessionId = localStorage.getItem("SESSION_ID");
  if (sessionId) {
    config.headers["X-SESSION-ID"] = sessionId;
  }
  return config;
});

export const getDashboard = () => axiosInstance.get("/dashboard");

export const getAllStores = () => axiosInstance.get("/stores");

export const disableStore = (storeId: number) =>
  axiosInstance.put(`/store/${storeId}/disable`);

export const enableStore = (storeId: number) =>
  axiosInstance.put(`/store/${storeId}/enable`);

export const assignStoreAdmin = (storeId: number, userId: number) =>
  axiosInstance.post(`/store/${storeId}/assign-admin`, { userId });

export const disableUser = (userId: number) =>
  axiosInstance.put(`/user/${userId}/disable`);

export const enableUser = (userId: number) =>
  axiosInstance.put(`/user/${userId}/enable`);

export const getAllOrders = () => axiosInstance.get("/orders");
