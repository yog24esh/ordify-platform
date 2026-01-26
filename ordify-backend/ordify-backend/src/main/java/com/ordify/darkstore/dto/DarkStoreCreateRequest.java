package com.ordify.darkstore.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class DarkStoreCreateRequest {

    @NotBlank(message = "Store name is required")
    private String storeName;

    @NotNull(message = "Latitude is required")
    private Double latitude;

    @NotNull(message = "Longitude is required")
    private Double longitude;

    @NotNull(message = "Delivery radius is required")
    @Min(value = 1, message = "Delivery radius must be at least 1 km")
    private Double deliveryRadiusKm;

    public DarkStoreCreateRequest() {
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public @NotNull(message = "Delivery radius is required") @DecimalMin(value = "1.0", inclusive = true, message = "Delivery radius must be at least 1 km") Double getDeliveryRadiusKm() {
        return deliveryRadiusKm;
    }

    public void setDeliveryRadiusKm(@NotNull(message = "Delivery radius is required") @DecimalMin(value = "1.0", inclusive = true, message = "Delivery radius must be at least 1 km") Double deliveryRadiusKm) {
        this.deliveryRadiusKm = deliveryRadiusKm;
    }
}
