/*
 * This order repo is for mock as it will be done in Order functionality
 * 
 * TO BE DELETED LATER
 * 
 * */


package com.ordify.delivery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordify.delivery.entity.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByOrderStatus(String status);
}
