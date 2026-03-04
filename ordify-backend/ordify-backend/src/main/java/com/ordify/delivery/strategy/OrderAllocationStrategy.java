package com.ordify.delivery.strategy;

import com.ordify.delivery.entity.DeliveryPartner;
import com.ordify.order.entity.Order;

import java.util.List;

public interface OrderAllocationStrategy {

    List<Order> findOrdersForPartner(DeliveryPartner partner);
}