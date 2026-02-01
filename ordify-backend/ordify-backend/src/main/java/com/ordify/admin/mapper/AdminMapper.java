package com.ordify.admin.mapper;

import java.util.List;
import java.util.stream.Collectors;

//import com.ordify.order.entity.Order;
//import com.ordify.store.entity.DarkStore;
import org.springframework.stereotype.Component;

import com.ordify.admin.dto.UserResponse;
import com.ordify.admin.dto.response.OrderSummaryResponse;
import com.ordify.admin.dto.response.StoreResponse;
import com.ordify.authenticator.entity.User;
import com.ordify.darkstore.entity.DarkStore;
import com.ordify.order.entity.Order;

/**
 * AdminMapper
 *
 * Maps entity objects to Admin module response DTOs.
 * Keeps controller/service clean by separating mapping logic.
 */
@Component
public class AdminMapper {

    // Maps DarkStore entity to StoreResponse DTO
    public StoreResponse toStoreResponse(DarkStore store) {
        return StoreResponse.builder()
                .storeId(store.getStoreId())
                .storeName(store.getStoreName())
                .latitude(store.getLatitude())
                .longitude(store.getLongitude())
                .deliveryRadiusKm(store.getDeliveryRadiusKm())
                .isActive(store.getIsActive())
                .createdAt(store.getCreatedAt())
                .build();
    }

//     Maps list of DarkStore entities to list of StoreResponse DTOs
    public List<StoreResponse> toStoreResponseList(List<DarkStore> stores) {
        return stores.stream()
                .map(this::toStoreResponse)
                .collect(Collectors.toList());
    }

    // Maps Order entity to OrderSummaryResponse DTO
    public OrderSummaryResponse toOrderSummaryResponse(Order order) {
        return OrderSummaryResponse.builder()
                .orderId(order.getOrderId())
                .userId(order.getUserId())
                .storeId(order.getStoreId())
                .orderStatus(order.getOrderStatus().toString())
                .totalAmount(order.getTotalAmount())
                .createdAt(order.getCreatedAt())
                .build();
    }

    // Maps list of Order entities to list of OrderSummaryResponse DTOs
    public List<OrderSummaryResponse> toOrderSummaryResponseList(List<Order> orders) {
        return orders.stream()
                .map(this::toOrderSummaryResponse)
                .collect(Collectors.toList());
    }
    
    public List<UserResponse> toUserResponses(List<User> users) {
        return users.stream()
                .map(this::toUserResponse)
                .collect(Collectors.toList());
    }

    private UserResponse toUserResponse(User user) {
        return UserResponse.builder()
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole().getRoleName())
                .isActive(user.getIsActive())
                .build();
    }
}


