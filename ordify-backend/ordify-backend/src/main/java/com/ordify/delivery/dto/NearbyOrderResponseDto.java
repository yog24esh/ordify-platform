package com.ordify.delivery.dto;

import com.ordify.order.entity.OrderStatus;

public class NearbyOrderResponseDto {
    private Long orderId;
    private Long storeId;
    private Double storeLatitude;
    private Double storeLongitude;
    private Double deliveryLatitude;
    private Double deliveryLongitude;
    
    
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
	private OrderStatus orderStatus;
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public Long getStoreId() {
		return storeId;
	}
	public void setStoreId(Long storeId) {
		this.storeId = storeId;
	}
	public Double getStoreLatitude() {
		return storeLatitude;
	}
	public void setStoreLatitude(Double storeLatitude) {
		this.storeLatitude = storeLatitude;
	}
	public Double getStoreLongitude() {
		return storeLongitude;
	}
	public void setStoreLongitude(Double storeLongitude) {
		this.storeLongitude = storeLongitude;
	}
	public OrderStatus getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}
    
    
    
}

