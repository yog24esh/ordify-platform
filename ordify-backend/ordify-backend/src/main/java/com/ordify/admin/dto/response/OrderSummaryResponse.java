package com.ordify.admin.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.ordify.order.entity.Order;

import lombok.Builder;
import lombok.Getter;

/**
 * OrderSummaryResponse
 *
 * Lightweight response DTO for system-wide order listing in Admin module.
 */
@Getter
@Builder
public class OrderSummaryResponse {

    private Long orderId;
    private Long userId;
    private Long storeId;
//    private String status;
    private BigDecimal totalAmount;
    private String orderStatus;
    private LocalDateTime createdAt;

    public static OrderSummaryResponse fromEntity(Order order) {
        return OrderSummaryResponse.builder()
                .orderId(order.getOrderId())
                .userId(order.getUserId())
                .storeId(order.getStoreId())
                .orderStatus(order.getOrderStatus().name())
                .totalAmount(order.getTotalAmount())
                .createdAt(order.getCreatedAt())
                .build();
    }

}
