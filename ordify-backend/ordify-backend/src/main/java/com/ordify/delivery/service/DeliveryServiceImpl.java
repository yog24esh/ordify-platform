package com.ordify.delivery.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ordify.common.enums.DeliveryStatus;
import com.ordify.darkstore.entity.DarkStore;
import com.ordify.darkstore.repository.DarkStoreRepository;
import com.ordify.delivery.dto.AcceptOrderRequestDto;
import com.ordify.delivery.dto.LocationUpdateDto;
import com.ordify.delivery.dto.NearbyOrderResponseDto;
import com.ordify.delivery.entity.DeliveryAssignment;
import com.ordify.delivery.entity.DeliveryLocationLog;
import com.ordify.delivery.entity.DeliveryPartner;

import com.ordify.delivery.repository.DeliveryAssignmentRepository;
import com.ordify.delivery.repository.DeliveryLocationLogRepository;
import com.ordify.delivery.repository.DeliveryPartnerRepository;
import com.ordify.order.entity.Order;
import com.ordify.order.entity.OrderStatus;
import com.ordify.order.repository.OrderRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryPartnerRepository partnerRepository;
    private final DeliveryAssignmentRepository assignmentRepository;
    private final OrderRepository orderRepository;
    private final DeliveryLocationLogRepository locationLogRepository;
    private final DarkStoreRepository darkStoreRepository;

    public DeliveryServiceImpl(
            DeliveryPartnerRepository partnerRepository,
            DeliveryAssignmentRepository assignmentRepository,
            OrderRepository orderRepository,
            DeliveryLocationLogRepository locationLogRepository,
            DarkStoreRepository darkStoreRepository) {
        this.partnerRepository = partnerRepository;
        this.assignmentRepository = assignmentRepository;
        this.orderRepository = orderRepository;
        this.locationLogRepository = locationLogRepository;
        this.darkStoreRepository = darkStoreRepository;
    }

    @Override
    public void goOnline(Long deliveryPartnerId) {
        DeliveryPartner partner = partnerRepository.findById(deliveryPartnerId)
                .orElseThrow(() -> new RuntimeException("Partner not found"));
        partner.setIsOnline(true);
        partnerRepository.save(partner);
    }

    @Override
    public void goOffline(Long deliveryPartnerId) {
        DeliveryPartner partner = partnerRepository.findById(deliveryPartnerId)
                .orElseThrow(() -> new RuntimeException("Partner not found"));
        partner.setIsOnline(false);
        partnerRepository.save(partner);
    }

    @Override
    public List<NearbyOrderResponseDto> getNearbyOrders(Long deliveryPartnerId) {
        // Simplified: fetch all PACKED orders
        List<Order> orders = orderRepository.findByOrderStatus(OrderStatus.PACKED);

        return orders.stream().map(order -> {
            NearbyOrderResponseDto dto = new NearbyOrderResponseDto();
            dto.setOrderId(order.getOrderId());
            dto.setStoreId(order.getStoreId());
            dto.setDeliveryLatitude(order.getDeliveryLatitude());
            dto.setDeliveryLongitude(order.getDeliveryLongitude());
            DarkStore store = darkStoreRepository
                    .findById(order.getStoreId())
                    .orElseThrow(() -> new RuntimeException("Store not found"));
            dto.setStoreLatitude(store.getLatitude());
            dto.setStoreLongitude(store.getLongitude());
            dto.setOrderStatus(order.getOrderStatus());
            
            return dto;
        }).toList();
    }

    @Override
    @Transactional
    public void acceptOrder(AcceptOrderRequestDto request) {
        DeliveryAssignment assignment = new DeliveryAssignment();
        assignment.setOrderId(request.getOrderId());
        assignment.setDeliveryPartnerId(request.getDeliveryPartnerId());
        assignment.setStatus(DeliveryStatus.ASSIGNED);
        assignment.setAssignedAt(LocalDateTime.now());

        assignmentRepository.save(assignment);

        Order order = orderRepository.findById(request.getOrderId())
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setDeliveryPartnerId(request.getDeliveryPartnerId());
        order.setOrderStatus(OrderStatus.valueOf("OUT_FOR_DELIVERY"));
        orderRepository.save(order);
    }

    @Override
    public void updateLocation(LocationUpdateDto dto) {
        DeliveryLocationLog log = new DeliveryLocationLog();
        log.setDeliveryPartnerId(dto.getDeliveryPartnerId());
        log.setLatitude(dto.getLatitude());
        log.setLongitude(dto.getLongitude());
        log.setLoggedAt(LocalDateTime.now());

        locationLogRepository.save(log);
    }

    @Override
    public void updateDeliveryStatus(Long orderId, DeliveryStatus status) {
        DeliveryAssignment assignment = assignmentRepository.findByOrderId(orderId)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        assignment.setStatus(status);
        assignmentRepository.save(assignment);

        if (status == DeliveryStatus.DELIVERED) {
            Order order = orderRepository.findById(orderId)
                    .orElseThrow(() -> new RuntimeException("Order not found"));
            order.setOrderStatus(OrderStatus.valueOf("DELIVERED"));
            orderRepository.save(order);
        }
    }
}

