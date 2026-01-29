package com.ordify.admin.dto.response;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

/**
 * OrderSummaryResponse
 *
 * Lightweight response DTO for system-wide order listing in Admin module.
 */
@Getter
@Builder
public class OrderSummaryRes {

    private Long orderId;
    private Long userId;
    private Long storeId;
    private String orderStatus;
    private Double totalAmount;
    private LocalDateTime createdAt;
}
