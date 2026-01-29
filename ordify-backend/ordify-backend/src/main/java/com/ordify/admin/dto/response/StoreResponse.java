package com.ordify.admin.dto.response;

import java.time.LocalDateTime;

import com.ordify.darkstore.entity.DarkStore;

import lombok.AllArgsConstructor;
//import com.ordify.store.entity.DarkStore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * StoreResponse
 *
 * Response DTO for listing dark stores in Admin module.
 */
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StoreResponse {

    private Long storeId;
    private String storeName;
    private Double latitude;
    private Double longitude;
    private Double deliveryRadiusKm;
    private Boolean isActive;
    private LocalDateTime createdAt;

    // Helper mapper method (optional use from controller/service)
    public static StoreResponse fromEntity(DarkStore store) {
        return StoreResponse.builder()
                .storeId(store.getStoreId())
                .storeName(store.getStoreName())
                .latitude(store.getLatitude())
                .longitude(store.getLongitude())
                .deliveryRadiusKm(store.getDeliveryRadiusKm())
                .isActive(store.getIsActive())
                .createdAt(store.getCreatedAt())
                .build();
    }


}
