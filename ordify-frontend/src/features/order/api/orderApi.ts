import axios from "axios";

export interface CreateOrderPayload {
  productId: number;
  quantity: number;
}

export const createOrder = (data: CreateOrderPayload) => {
  return axios.post("/api/orders", data);
};

export const updateOrderStatus = (id: number, status: string) => {
  return axios.patch(`/api/orders/${id}/status`, null, {
    params: { status },
  });
};

export const cancelOrder = (id: number) => {
  return axios.delete(`/api/orders/${id}`);
};
