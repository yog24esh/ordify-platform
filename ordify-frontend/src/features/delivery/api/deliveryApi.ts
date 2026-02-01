import  http  from "../../../services/http";
import type { DeliveryStatus } from "../types/delivery";

export const deliveryApi = {
  goOnline: (id: number) =>
    http.put(`/delivery/online/${id}`),

  getNearbyOrders: (id: number) =>
    http.get(`/delivery/orders/nearby/${id}`),

  acceptOrder: (dto: { orderId: number; deliveryPartnerId: number }) =>
    http.post(`/delivery/accept`, dto),

  updateLocation: (dto: {
    deliveryPartnerId: number;
    latitude: number;
    longitude: number;
  }) =>
    http.put(`/delivery/location`, dto),

  updateStatus: (orderId: number, status: DeliveryStatus) =>
    http.put(`/delivery/status/${orderId}`, null, {
      params: { status },
    }),
};
