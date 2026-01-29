package com.ordify.order.mapper;

import org.springframework.stereotype.Component;

import com.ordify.order.dto.summary.OrderSummaryResponse;
import com.ordify.order.entity.Order;

@Component
public class OrderMapper {

    public OrderSummaryResponse toOrderSummaryResponse(Order order) {
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
