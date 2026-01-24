package com.ordify.admin.dto.response;

import lombok.Builder;
import lombok.Getter;

/**
 * StorePerformanceResponse
 *
 * Response DTO for store performance analytics.
 */
@Getter
@Builder
public class StorePerformanceResponse {

    private Long storeId;
    private String storeName;

    private Long totalOrders;
    private Double totalRevenue;

    private Boolean isActive;
}
