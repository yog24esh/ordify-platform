package com.ordify.order.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.math.BigDecimal;

import com.ordify.order.entity.OrderStatus;

public class OrderResponseDto {

    public Long orderId;
    public Long storeId;
    public Long deliveryPartnerId;
    public OrderStatus orderStatus;
    public BigDecimal totalAmount;
    public LocalDateTime createdAt;
    public List<Item> items;
	public Object status;

    public static class Item {
        public Long productId;
        public Integer quantity;
        public BigDecimal price;
    }
}