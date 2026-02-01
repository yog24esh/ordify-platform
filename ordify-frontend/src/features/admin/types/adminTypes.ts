// src/features/admin/types/adminTypes.ts

export interface DashboardStats {
  totalUsers: number;
  totalStores: number;
  activeStores: number;
  totalOrders: number;
  totalRevenue: number;
  activeDeliveryPartners: number;
}

export interface Store {
  storeId: number;
  storeName: string;
  latitude: number;
  longitude: number;
  deliveryRadiusKm: number;
  isActive: boolean;
  createdAt: string;
}

export interface User {
  userId: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}

export interface OrderSummary {
  orderId: number;
  userId: number;
  storeId: number;
  orderStatus: string;
  totalAmount: number;
  createdAt: string;
}
