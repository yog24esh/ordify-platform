package com.ordify.darkstore.mapper;

import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;
import com.ordify.darkstore.entity.DarkStore;

public class DarkStoreMapper {

    private DarkStoreMapper() {
        // utility class
    }

    public static DarkStore toEntity(DarkStoreCreateRequest request) {
        DarkStore store = new DarkStore();
        store.setStoreName(request.getStoreName());
        store.setLatitude(request.getLatitude());
        store.setLongitude(request.getLongitude());
        store.setDeliveryRadiusKm(request.getDeliveryRadiusKm());
        return store;
    }

    public static void updateEntity(DarkStore store, DarkStoreUpdateRequest request) {
        store.setStoreName(request.getStoreName());
        store.setLatitude(request.getLatitude());
        store.setLongitude(request.getLongitude());
        store.setDeliveryRadiusKm(request.getDeliveryRadiusKm());
    }

    public static DarkStoreResponse toResponse(DarkStore store) {
        DarkStoreResponse response = new DarkStoreResponse();
        response.setStoreId(store.getStoreId());
        response.setStoreName(store.getStoreName());
        response.setLatitude(store.getLatitude());
        response.setLongitude(store.getLongitude());
        response.setDeliveryRadiusKm(store.getDeliveryRadiusKm());
        response.setIsActive(store.getIsActive());
        response.setCreatedAt(store.getCreatedAt());
        return response;
    }
}

