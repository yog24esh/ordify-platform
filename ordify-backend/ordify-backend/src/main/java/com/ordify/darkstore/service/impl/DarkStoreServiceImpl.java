package com.ordify.darkstore.service.impl;

import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;
import com.ordify.darkstore.entity.DarkStore;
import com.ordify.darkstore.exception.DarkStoreAlreadyDisabledException;
import com.ordify.darkstore.exception.DarkStoreNotFoundException;
import com.ordify.darkstore.mapper.DarkStoreMapper;
import com.ordify.darkstore.repository.DarkStoreRepository;
import com.ordify.darkstore.service.DarkStoreService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    // ---------------- PRIVATE HELPER ----------------

    private DarkStore getStoreEntity(Long storeId) {
        return darkStoreRepository.findById(storeId)
                .orElseThrow(() -> new DarkStoreNotFoundException(storeId));
    }
}
