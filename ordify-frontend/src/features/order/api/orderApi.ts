import http from "../../../services/http";
import type { OrderRequest, OrderResponse } from "../types/order.types";

const API_URL = "/api/orders";

export const createOrder = async (data: OrderRequest) => {
  const res = await http.post<OrderResponse>(`${API_URL}/create`, data);
  return res.data;
};

export const getOrderById = async (id: number) => {
  const res = await http.get<OrderResponse>(`${API_URL}/${id}`);
  return res.data;
};

export const updateOrderStatus = async (id: number, status: string) => {
  const res = await http.patch<OrderResponse>(
    `${API_URL}/${id}/status`,
    null,
    { params: { status } }
  );
  return res.data;
};

export const cancelOrder = async (id: number) => {
  await http.delete(`${API_URL}/${id}`);
};
