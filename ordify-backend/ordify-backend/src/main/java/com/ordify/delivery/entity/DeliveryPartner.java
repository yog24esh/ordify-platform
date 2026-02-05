package com.ordify.delivery.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "delivery_partner")
public class DeliveryPartner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long deliveryPartnerId;

    @Column(nullable = false, unique = true)
    private Long userId;

    private Boolean isOnline;

    private Double currentLatitude;
    private Double currentLongitude;
    
    // getters and setters
	public Long getDeliveryPartnerId() {
		return deliveryPartnerId;
	}
	public void setDeliveryPartnerId(Long deliveryPartnerId) {
		this.deliveryPartnerId = deliveryPartnerId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Boolean getIsOnline() {
		return isOnline;
	}
	public void setIsOnline(Boolean isOnline) {
		this.isOnline = isOnline;
	}
	public Double getCurrentLatitude() {
		return currentLatitude;
	}
	public void setCurrentLatitude(Double currentLatitude) {
		this.currentLatitude = currentLatitude;
	}
	public Double getCurrentLongitude() {
		return currentLongitude;
	}
	public void setCurrentLongitude(Double currentLongitude) {
		this.currentLongitude = currentLongitude;
	}

  
    
}
