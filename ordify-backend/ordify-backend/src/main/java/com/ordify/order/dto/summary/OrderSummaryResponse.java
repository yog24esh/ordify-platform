package com.ordify.order.dto.summary;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OrderSummaryResponse {

    private Long orderId;
    private Long userId;
    private Long storeId;
    private String orderStatus;
    private BigDecimal totalAmount;
    private LocalDateTime createdAt;
}