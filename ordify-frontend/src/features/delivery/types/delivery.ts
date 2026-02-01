export type DeliveryStatus =
  | "ASSIGNED"
  | "PICKED_UP"
  | "ON_THE_WAY"
  | "DELIVERED";

export type NearbyOrderResponseDto = {
  orderId: number;
  storeId: number;
  storeLatitude: number;
  storeLongitude: number;
  deliveryLatitude: number;
  deliveryLongitude: number;
};
