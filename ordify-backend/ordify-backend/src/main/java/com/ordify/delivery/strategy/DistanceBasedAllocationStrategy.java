

package com.ordify.delivery.strategy;

import com.ordify.delivery.entity.DeliveryPartner;
import com.ordify.order.entity.Order;
import com.ordify.order.repository.OrderRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class DistanceBasedAllocationStrategy implements OrderAllocationStrategy {

    private final OrderRepository orderRepository;

    public DistanceBasedAllocationStrategy(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Order> findOrdersForPartner(DeliveryPartner partner) {

        return orderRepository.findNearbyOrders(
                partner.getCurrentLatitude(),
                partner.getCurrentLongitude(),
                5
        );
    }
}
