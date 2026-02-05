package com.ordify.delivery.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ordify.common.enums.DeliveryStatus;
import com.ordify.delivery.dto.AcceptOrderRequestDto;
import com.ordify.delivery.dto.LocationUpdateDto;
import com.ordify.delivery.dto.NearbyOrderResponseDto;
import com.ordify.delivery.service.DeliveryService;

@RestController
@RequestMapping("/delivery")
public class DeliveryController {

    private final DeliveryService deliveryService;

    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PutMapping("/online/{partnerId}")
    public ResponseEntity<?> goOnline(@PathVariable Long partnerId) {
        deliveryService.goOnline(partnerId);
        return ResponseEntity.ok("Partner is online");
    }

    @PutMapping("/offline/{partnerId}")
    public ResponseEntity<?> goOffline(@PathVariable Long partnerId) {
        deliveryService.goOffline(partnerId);
        return ResponseEntity.ok("Partner is offline");
    }

    @GetMapping("/orders/nearby/{partnerId}")
    public ResponseEntity<List<NearbyOrderResponseDto>> getNearbyOrders(
            @PathVariable Long partnerId) {
        return ResponseEntity.ok(deliveryService.getNearbyOrders(partnerId));
    }

    @PostMapping("/accept")
    public ResponseEntity<?> acceptOrder(@RequestBody AcceptOrderRequestDto request) {
        deliveryService.acceptOrder(request);
        return ResponseEntity.ok("Order accepted");
    }

    @PutMapping("/location")
    public ResponseEntity<?> updateLocation(@RequestBody LocationUpdateDto dto) {
        deliveryService.updateLocation(dto);
        return ResponseEntity.ok("Location updated");
    }

    @PutMapping("/status/{orderId}")
    public ResponseEntity<?> updateStatus(
            @PathVariable Long orderId,
            @RequestParam DeliveryStatus status) {
        deliveryService.updateDeliveryStatus(orderId, status);
        return ResponseEntity.ok("Status updated");
    }
}
