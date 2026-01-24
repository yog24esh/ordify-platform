package com.ordify.admin.dto.response;

import lombok.Builder;
import lombok.Getter;

/**
 * DashboardStatsResponse
 *
 * Response DTO for admin dashboard stats.
 */
@Getter
@Builder
public class DashboardStatsResponse {

    private long totalUsers;
    private long totalStores;
    private long activeStores;
    private long totalOrders;
    private double totalRevenue;
    private long activeDeliveryPartners;
}
