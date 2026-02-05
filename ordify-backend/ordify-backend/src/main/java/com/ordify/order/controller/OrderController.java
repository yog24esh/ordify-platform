package com.ordify.order.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ordify.order.dto.OrderRequestDto;
import com.ordify.order.dto.OrderResponseDto;
import com.ordify.order.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public OrderResponseDto create(@RequestBody OrderRequestDto request) {
        return orderService.createOrder(request);
    }

    @PatchMapping("/{id}/status")
    public OrderResponseDto updateStatus(@PathVariable Long id,
                                         @RequestParam String status) {
        return orderService.updateStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public void cancel(@PathVariable Long id) {
        orderService.cancelOrder(id);
    }
}
