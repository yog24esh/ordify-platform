import axios from "axios";
import type { OrderRequest, OrderResponse } from "../types/order.types";

const API_URL = "/api/orders";

export const createOrder = async (data: OrderRequest) => {
  const res = await axios.post<OrderResponse>(API_URL, data);
  return res.data;
};

export const getOrderById = async (id: number) => {
  const res = await axios.get<OrderResponse>(`${API_URL}/${id}`);
  return res.data;
};

export const updateOrderStatus = async (id: number, status: string) => {
  const res = await axios.patch<OrderResponse>(
    `${API_URL}/${id}/status`,
    null,
    { params: { status } }
  );
  return res.data;
};

export const cancelOrder = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
