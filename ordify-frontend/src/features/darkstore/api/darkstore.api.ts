import http from "@/services/http";
import type { DarkStore } from "../types/darkstore";

export const fetchDarkStores = () =>
  http.get<DarkStore[]>("/api/darkstores");

export const fetchDarkStoreById = (storeId: number) =>
  http.get<DarkStore>(`/api/darkstores/${storeId}`);

export const createDarkStore = (payload: {
  storeName: string;
  latitude: number;
  longitude: number;
  deliveryRadiusKm: number;
}) =>
  http.post<DarkStore>("/api/darkstores", payload);

export const updateDarkStore = (
  storeId: number,
  payload: {
    storeName: string;
    latitude: number;
    longitude: number;
    deliveryRadiusKm: number;
  }
) =>
  http.put<DarkStore>(`/api/darkstores/${storeId}`, payload);

export const disableDarkStore = (storeId: number) =>
  http.put(`/api/darkstores/${storeId}/disable`);
