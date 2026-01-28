package com.ordify.darkstore.service;

import java.util.List;

import com.ordify.admin.dto.response.StoreResponse;
import com.ordify.authenticator.entity.User;
import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;

public interface DarkStoreService {

    DarkStoreResponse createDarkStore(DarkStoreCreateRequest request);

    DarkStoreResponse updateDarkStore(Long storeId, DarkStoreUpdateRequest request);

    DarkStoreResponse getDarkStoreById(Long storeId);

    List<DarkStoreResponse> getAllActiveStores();

    List<StoreResponse> getAllStores();

    void disableDarkStore(Long storeId);

    void enableDarkStore(Long storeId);

    public boolean hasAdmin(Long storeId);

    void assignAdmin(DarkStoreResponse storeResponse, User user);
}
