import http from "../../../services/http";
import type { Product } from "../types/product";

export const fetchProducts = () =>
  http.get<Product[]>("/api/products");

export const fetchProductById = (id: number) =>
  http.get<Product>(`/api/products/${id}`);

export const createProduct = (payload: {
  name: string;
  description: string;
  category: string;
  price: number;
}) =>
  http.post("/api/products", payload);

export const updateProduct = (
  id: number,
  payload: {
    name: string;
    description: string;
    category: string;
    price: number;
  }
) =>
  http.put(`/api/products/${id}`, payload);

export const disableProduct = (id: number) =>
  http.put(`/api/products/${id}/disable`);
