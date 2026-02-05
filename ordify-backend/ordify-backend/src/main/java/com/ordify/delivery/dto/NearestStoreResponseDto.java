package com.ordify.delivery.dto;

public class NearestStoreResponseDto {

    private Long storeId;
    private double distanceKm;
    private long etaMinutes;

    public NearestStoreResponseDto(Long storeId, double distanceKm, long etaMinutes) {
        this.storeId = storeId;
        this.distanceKm = distanceKm;
        this.etaMinutes = etaMinutes;
    }

    public Long getStoreId() {
        return storeId;
    }

    public double getDistanceKm() {
        return distanceKm;
    }

    public long getEtaMinutes() {
        return etaMinutes;
    }
}
