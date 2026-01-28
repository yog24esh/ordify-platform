package com.ordify.delivery.service;

import org.springframework.stereotype.Service;

@Service
public class LocationCalculationService {

    private static final double EARTH_RADIUS_KM = 6371.0;
    private static final double AVG_SPEED_KMH = 30.0;

    // Haversine formula
    public double calculateDistanceKm(double lat1, double lon1,
                                      double lat2, double lon2) {

        double rLat1 = Math.toRadians(lat1);
        double rLon1 = Math.toRadians(lon1);
        double rLat2 = Math.toRadians(lat2);
        double rLon2 = Math.toRadians(lon2);

        double dLat = rLat2 - rLat1;
        double dLon = rLon2 - rLon1;

        double h = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(rLat1) * Math.cos(rLat2)
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
        return EARTH_RADIUS_KM * c;
    }

    public long estimateEtaMinutes(double distanceKm) {
        double hours = distanceKm / AVG_SPEED_KMH;
        return Math.round(hours * 60);
    }
}
