package com.ordify.order.dto;

import java.util.List;
import java.math.BigDecimal;

public class OrderRequestDto {

    private Long userId;
    private Long storeId;
    private Double deliveryLatitude;
    private Double deliveryLongitude;

    private List<OrderItemDto> items;

    public static class OrderItemDto {
        public Long productId;
        public Integer quantity;
        public BigDecimal price;
    }

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getStoreId() {
		return storeId;
	}

	public void setStoreId(Long storeId) {
		this.storeId = storeId;
	}

	public Double getDeliveryLatitude() {
		return deliveryLatitude;
	}

	public void setDeliveryLatitude(Double deliveryLatitude) {
		this.deliveryLatitude = deliveryLatitude;
	}

	public Double getDeliveryLongitude() {
		return deliveryLongitude;
	}

	public void setDeliveryLongitude(Double deliveryLongitude) {
		this.deliveryLongitude = deliveryLongitude;
	}

	public List<OrderItemDto> getItems() {
		return items;
	}

	public void setItems(List<OrderItemDto> items) {
		this.items = items;
	}

    // getters & setters
}