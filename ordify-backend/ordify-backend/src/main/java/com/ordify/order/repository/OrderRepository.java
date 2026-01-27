package com.ordify.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.order.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
