import http from "../../../services/http";
import type { Inventory } from "../types/inventory";

export const addInventory = (payload: {
  storeId: number;
  productId: number;
  quantity: number;
}) => {
  return http.post<Inventory>("/api/inventory", payload);
};
export const fetchInventoryByStore = (storeId: number) => {
  return http.get<Inventory[]>(`/api/inventory/store/${storeId}`);
};
