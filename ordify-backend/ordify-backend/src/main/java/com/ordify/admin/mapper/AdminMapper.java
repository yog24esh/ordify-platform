package com.ordify.admin.mapper;

//import com.ordify.order.entity.Order;
//import com.ordify.store.entity.DarkStore;
import org.springframework.stereotype.Component;

/**
 * AdminMapper
 *
 * Maps entity objects to Admin module response DTOs.
 * Keeps controller/service clean by separating mapping logic.
 */
@Component
public class AdminMapper {

    // Maps DarkStore entity to StoreResponse DTO
//    public StoreResponse toStoreResponse(DarkStore store) {
//        return StoreResponse.builder()
//                .storeId(store.getStoreId())
//                .storeName(store.getStoreName())
//                .latitude(store.getLatitude())
//                .longitude(store.getLongitude())
//                .deliveryRadiusKm(store.getDeliveryRadiusKm())
//                .isActive(store.getIsActive())
//                .createdAt(store.getCreatedAt())
//                .build();
//    }

    // Maps list of DarkStore entities to list of StoreResponse DTOs
//    public List<StoreResponse> toStoreResponseList(List<DarkStore> stores) {
//        return stores.stream()
//                .map(this::toStoreResponse)
//                .collect(Collectors.toList());
//    }

    // Maps Order entity to OrderSummaryResponse DTO
//    public OrderSummaryResponse toOrderSummaryResponse(Order order) {
//        return OrderSummaryResponse.builder()
//                .orderId(order.getOrderId())
//                .userId(order.getUser().getUserId())
//                .storeId(order.getStore().getStoreId())
//                .orderStatus(order.getOrderStatus().toString())
//                .totalAmount(order.getTotalAmount())
//                .createdAt(order.getCreatedAt())
//                .build();
//    }

    // Maps list of Order entities to list of OrderSummaryResponse DTOs
//    public List<OrderSummaryResponse> toOrderSummaryResponseList(List<Order> orders) {
//        return orders.stream()
//                .map(this::toOrderSummaryResponse)
//                .collect(Collectors.toList());
//    }
}
