package com.ordify.delivery.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordify.delivery.entity.DeliveryAssignment;

@Repository
public interface DeliveryAssignmentRepository extends JpaRepository<DeliveryAssignment, Long> {

    Optional<DeliveryAssignment> findByOrderId(Long orderId);

    List<DeliveryAssignment> findByDeliveryPartnerId(Long deliveryPartnerId);
}
