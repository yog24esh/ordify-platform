import axios from "axios";
import type { Inventory } from "../types/inventory";

const API_URL = "http://localhost:8080/api/inventory";

export const fetchInventoryByStore = (storeId: number) => {
  return axios.get<Inventory[]>(`${API_URL}/store/${storeId}`);
};
