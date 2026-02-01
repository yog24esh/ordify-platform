import http from "../../../services/http";
import type { Product } from "../types/product";

export const fetchProducts = () => {
  return http.get<Product[]>("/api/products");
};
