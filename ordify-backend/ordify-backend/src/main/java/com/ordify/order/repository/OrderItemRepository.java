package com.ordify.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.order.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
