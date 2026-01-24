package com.ordify.admin.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

/**
 * OrderSummaryResponse
 *
 * Lightweight response DTO for system-wide order listing in Admin module.
 */
@Getter
@Builder
public class OrderSummaryResponse {

    private Long orderId;
    private Long userId;
    private Long storeId;
    private String orderStatus;
    private Double totalAmount;
    private LocalDateTime createdAt;
}
