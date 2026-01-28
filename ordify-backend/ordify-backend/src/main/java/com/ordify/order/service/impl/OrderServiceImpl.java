package com.ordify.order.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ordify.order.dto.OrderRequestDto;
import com.ordify.order.dto.OrderResponseDto;
import com.ordify.order.dto.summary.OrderSummaryResponse;
import com.ordify.order.entity.Order;
import com.ordify.order.entity.OrderItem;
import com.ordify.order.entity.OrderStatus;
import com.ordify.order.mapper.OrderMapper;
import com.ordify.order.repository.OrderRepository;
import com.ordify.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public OrderServiceImpl(OrderRepository orderRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
    }

    @Override
    public OrderResponseDto createOrder(OrderRequestDto request) {

        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setStoreId(request.getStoreId());
        order.setDeliveryLatitude(request.getDeliveryLatitude());
        order.setDeliveryLongitude(request.getDeliveryLongitude());

        var items = request.getItems().stream().map(i -> {
            OrderItem item = new OrderItem();
            item.setProductId(i.productId);
            item.setQuantity(i.quantity);
            item.setPrice(i.price != null ? i.price : BigDecimal.ZERO);
            item.setOrder(order);
            return item;
        }).collect(Collectors.toList());

        order.setItems(items);

        BigDecimal total = items.stream()
                .map(i -> i.getPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        order.setTotalAmount(total);

        return mapToResponse(orderRepository.save(order));
    }

    @Override
    public OrderResponseDto updateStatus(Long orderId, String status) {

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        OrderStatus newStatus = OrderStatus.valueOf(status);

        validateTransition(order.getOrderStatus(), newStatus);

        order.setOrderStatus(newStatus);
        return mapToResponse(orderRepository.save(order));
    }

    @Override
    public void cancelOrder(Long orderId) {

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        if (order.getOrderStatus() != OrderStatus.CREATED &&
            order.getOrderStatus() != OrderStatus.ACCEPTED) {
            throw new IllegalStateException("Order cannot be cancelled");
        }

        order.setOrderStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }

    private void validateTransition(OrderStatus current, OrderStatus next) {

        if ((current == OrderStatus.CREATED && next == OrderStatus.ACCEPTED) || (current == OrderStatus.ACCEPTED && next == OrderStatus.PACKED)) {
			return;
		}
        if (current == OrderStatus.PACKED && next == OrderStatus.OUT_FOR_DELIVERY) {
			return;
		}
        if (current == OrderStatus.OUT_FOR_DELIVERY && next == OrderStatus.DELIVERED) {
			return;
		}

        throw new IllegalStateException("Invalid order status transition");
    }

    private OrderResponseDto mapToResponse(Order order) {

        OrderResponseDto res = new OrderResponseDto();
        res.orderId = order.getOrderId();
        res.storeId = order.getStoreId();
        res.totalAmount = order.getTotalAmount();
        res.status = order.getOrderStatus();
        res.createdAt = order.getCreatedAt();

        res.items = order.getItems().stream().map(i -> {
            OrderResponseDto.Item item = new OrderResponseDto.Item();
            item.productId = i.getProductId();
            item.quantity = i.getQuantity();
            item.price = i.getPrice();
            return item;
        }).collect(Collectors.toList());

        return res;
    }
    
    // Fetches all orders across all stores
    @Override
    public List<OrderSummaryResponse> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::toOrderSummaryResponse)
                .toList();
    }
}