export interface OrderItemRequest {
  productId: number;
  quantity: number;
  price?: number;
}

export interface OrderRequest {
  userId: number;
  storeId: number;
  deliveryLatitude: number;
  deliveryLongitude: number;
  items: OrderItemRequest[];
}

export type OrderStatus =
  | "CREATED"
  | "ACCEPTED"
  | "PACKED"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderItemResponse {
  productId: number;
  quantity: number;
  price: number;
}

export interface OrderResponse {
  orderId: number;
  storeId: number;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  items: OrderItemResponse[];
}
