package com.ordify.darkstore.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ordify.admin.common.exception.ResourceNotFoundException;
import com.ordify.admin.dto.response.StoreResponse;
import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;
import com.ordify.darkstore.entity.DarkStore;
import com.ordify.darkstore.exception.DarkStoreAlreadyDisabledException;
import com.ordify.darkstore.exception.DarkStoreNotFoundException;
import com.ordify.darkstore.mapper.DarkStoreMapper;
import com.ordify.darkstore.repository.DarkStoreRepository;
import com.ordify.darkstore.service.DarkStoreService;

@Service
public class DarkStoreServiceImpl implements DarkStoreService {

    private final DarkStoreRepository darkStoreRepository;

    public DarkStoreServiceImpl(DarkStoreRepository darkStoreRepository) {
        this.darkStoreRepository = darkStoreRepository;
    }

    // ---------------- CREATE ----------------

    @Override
    public DarkStoreResponse createDarkStore(DarkStoreCreateRequest request) {
        DarkStore store = DarkStoreMapper.toEntity(request);
        DarkStore saved = darkStoreRepository.save(store);
        return DarkStoreMapper.toResponse(saved);
    }

    // ---------------- UPDATE ----------------

    @Override
    public DarkStoreResponse updateDarkStore(Long storeId, DarkStoreUpdateRequest request) {
        DarkStore store = getStoreEntity(storeId);
        DarkStoreMapper.updateEntity(store, request);
        DarkStore updated = darkStoreRepository.save(store);
        return DarkStoreMapper.toResponse(updated);
    }

    // ---------------- GET BY ID ----------------

    @Override
    public DarkStoreResponse getDarkStoreById(Long storeId) {
        DarkStore store = getStoreEntity(storeId);
        return DarkStoreMapper.toResponse(store);
    }

    // ---------------- GET ACTIVE STORES ----------------

    @Override
    public List<DarkStoreResponse> getAllActiveStores() {
        return darkStoreRepository.findByIsActiveTrue()
                .stream()
                .map(DarkStoreMapper::toResponse)
                .collect(Collectors.toList());
    }

    // ---------- GET ALL STORES (ACTIVE & DISABLED) ----------
    @Override
    public List<StoreResponse> getAllStores() {

        List<DarkStore> stores = darkStoreRepository.findAll();

        return stores.stream()
                .map(StoreResponse::fromEntity)
                .collect(Collectors.toList());
    }

    // ---------------- DISABLE STORE ----------------

    @Override
    public void disableDarkStore(Long storeId) {

        DarkStore store = getStoreEntity(storeId);

        if (!store.getIsActive()) {
            throw new DarkStoreAlreadyDisabledException(storeId);
        }

        store.setIsActive(false);
        darkStoreRepository.save(store);
    }
    
    // ---------------- ENABLE STORE ----------------
    @Override
    public void enableDarkStore(Long storeId) {
    	DarkStore store = darkStoreRepository.findById(storeId)
                .orElseThrow(() -> new ResourceNotFoundException("Store not found"));

		store.setIsActive(true);
		darkStoreRepository.save(store);
    }

    // ---------------- PRIVATE HELPER ----------------

    private DarkStore getStoreEntity(Long storeId) {
        return darkStoreRepository.findById(storeId)
                .orElseThrow(() -> new DarkStoreNotFoundException(storeId));
    }
}
