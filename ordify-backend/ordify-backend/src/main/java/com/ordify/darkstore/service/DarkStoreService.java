package com.ordify.darkstore.service;

import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;

import java.util.List;

public interface DarkStoreService {

    DarkStoreResponse createDarkStore(DarkStoreCreateRequest request);

    DarkStoreResponse updateDarkStore(Long storeId, DarkStoreUpdateRequest request);

    DarkStoreResponse getDarkStoreById(Long storeId);

    List<DarkStoreResponse> getAllActiveStores();

    void disableDarkStore(Long storeId);
}
