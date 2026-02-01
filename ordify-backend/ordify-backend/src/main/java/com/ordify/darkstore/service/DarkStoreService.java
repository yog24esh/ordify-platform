package com.ordify.darkstore.service;

import java.util.List;

import com.ordify.authenticator.entity.User;
import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;
import com.ordify.darkstore.entity.DarkStore;

public interface DarkStoreService {

    DarkStoreResponse createDarkStore(DarkStoreCreateRequest request);

    DarkStoreResponse updateDarkStore(Long storeId, DarkStoreUpdateRequest request);

    DarkStoreResponse getDarkStoreById(Long storeId);

    List<DarkStoreResponse> getAllActiveStores();

    void disableDarkStore(Long storeId);

    List<DarkStore> getAllStores();

    boolean hasAdmin(Long storeId);

    void assignAdmin(DarkStore store, User user);

    DarkStore getStoreEntityById(Long storeId);

	DarkStore save(DarkStore store);

	Long countAllStores();

	Long countActiveStores();
}
