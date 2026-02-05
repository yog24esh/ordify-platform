package com.ordify.delivery.service;

import java.util.List;

import com.ordify.common.enums.DeliveryStatus;
import com.ordify.delivery.dto.AcceptOrderRequestDto;
import com.ordify.delivery.dto.LocationUpdateDto;
import com.ordify.delivery.dto.NearbyOrderResponseDto;

public interface DeliveryService {

    void goOnline(Long deliveryPartnerId);

    void goOffline(Long deliveryPartnerId);

    List<NearbyOrderResponseDto> getNearbyOrders(Long deliveryPartnerId);

    void acceptOrder(AcceptOrderRequestDto request);

    void updateLocation(LocationUpdateDto dto);

    void updateDeliveryStatus(Long orderId, DeliveryStatus status);
}
