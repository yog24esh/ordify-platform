package com.ordify.order.service;

import java.util.List;

import com.ordify.order.dto.OrderRequestDto;
import com.ordify.order.dto.OrderResponseDto;
import com.ordify.order.dto.summary.OrderSummaryResponse;

public interface OrderService {
    OrderResponseDto createOrder(OrderRequestDto request);
    OrderResponseDto updateStatus(Long orderId, String status);
    void cancelOrder(Long orderId);
    
    List<OrderSummaryResponse> getAllOrders();
}
