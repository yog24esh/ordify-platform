package com.ordify.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.order.entity.Order;
import com.ordify.order.entity.OrderStatus;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByOrderStatus(OrderStatus status);
}
