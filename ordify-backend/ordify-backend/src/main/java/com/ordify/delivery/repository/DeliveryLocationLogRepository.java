package com.ordify.delivery.repository;

import com.ordify.delivery.entity.DeliveryLocationLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryLocationLogRepository
        extends JpaRepository<DeliveryLocationLog, Long> {

    // Optional: fetch tracking history for a partner
    List<DeliveryLocationLog> findByDeliveryPartnerId(Long deliveryPartnerId);
}
