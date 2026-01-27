package com.ordify.order.service;

import com.ordify.order.dto.OrderRequestDto;
import com.ordify.order.dto.OrderResponseDto;

public interface OrderService {
    OrderResponseDto createOrder(OrderRequestDto request);
    OrderResponseDto updateStatus(Long orderId, String status);
    void cancelOrder(Long orderId);
}
