package com.ordify.delivery.dto;

public class DistanceResponseDto {

    private double distanceKm;
    private long etaMinutes;

    public DistanceResponseDto(double distanceKm, long etaMinutes) {
        this.distanceKm = distanceKm;
        this.etaMinutes = etaMinutes;
    }

    public double getDistanceKm() {
        return distanceKm;
    }

    public long getEtaMinutes() {
        return etaMinutes;
    }
}
