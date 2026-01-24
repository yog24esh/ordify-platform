package com.ordify.admin.dto.response;

//import com.ordify.store.entity.DarkStore;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

/**
 * StoreResponse
 *
 * Response DTO for listing dark stores in Admin module.
 */
@Getter
@Builder
public class StoreResponse {

    private Long storeId;
    private String storeName;
    private Double latitude;
    private Double longitude;
    private Double deliveryRadiusKm;
    private Boolean isActive;
    private LocalDateTime createdAt;

    // Helper mapper method (optional use from controller/service)
//    public static StoreResponse fromEntity(DarkStore store) {
//        return StoreResponse.builder()
//                .storeId(store.getStoreId())
//                .storeName(store.getStoreName())
//                .latitude(store.getLatitude())
//                .longitude(store.getLongitude())
//                .deliveryRadiusKm(store.getDeliveryRadiusKm())
//                .isActive(store.getIsActive())
//                .createdAt(store.getCreatedAt())
//                .build();
//    }
}
