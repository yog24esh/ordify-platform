import http from "../../../services/http";
import type { DarkStore } from "../types/darkstore";

export const fetchDarkStores = () =>
  http.get<DarkStore[]>("/api/darkstores");

export const fetchDarkStoreById = (storeId: number) =>
  http.get<DarkStore>(`/api/darkstores/${storeId}`);

export const updateDarkStore = (
  storeId: number,
  payload: {
    storeName: string;
    latitude: number;
    longitude: number;
    deliveryRadiusKm: number;
  }
) => http.put(`/api/darkstores/${storeId}`, payload);
