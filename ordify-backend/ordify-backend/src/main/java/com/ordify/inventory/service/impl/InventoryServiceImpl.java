package com.ordify.inventory.service.impl;

import com.ordify.inventory.dto.InventoryCreateRequest;
import com.ordify.inventory.dto.InventoryResponse;
import com.ordify.inventory.dto.InventoryUpdateRequest;
import com.ordify.inventory.entity.Inventory;
import com.ordify.inventory.exception.InventoryAlreadyExistsException;
import com.ordify.inventory.exception.InventoryNotFoundException;
import com.ordify.inventory.mapper.InventoryMapper;
import com.ordify.inventory.repository.InventoryRepository;
import com.ordify.inventory.service.InventoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryServiceImpl(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    // ---------------- ADD INVENTORY ----------------

    @Override
    public InventoryResponse addInventory(InventoryCreateRequest request) {

        inventoryRepository.findByStoreIdAndProductId(
                request.getStoreId(), request.getProductId()
        ).ifPresent(inv -> {
            throw new InventoryAlreadyExistsException(
                    request.getStoreId(), request.getProductId()
            );
        });

        Inventory inventory = InventoryMapper.toEntity(request);

        // Business rule: quantity decides availability
        inventory.setIsAvailable(request.getQuantity() > 0);

        Inventory saved = inventoryRepository.save(inventory);
        return InventoryMapper.toResponse(saved);
    }

    // ---------------- UPDATE INVENTORY ----------------

    @Override
    public InventoryResponse updateInventory(Long inventoryId, InventoryUpdateRequest request) {

        Inventory inventory = getInventoryEntity(inventoryId);

        inventory.setQuantity(request.getQuantity());

        // Business rule: auto toggle availability
        if (request.getQuantity() == 0) {
            inventory.setIsAvailable(false);
        } else {
            inventory.setIsAvailable(request.getIsAvailable());
        }

        Inventory updated = inventoryRepository.save(inventory);
        return InventoryMapper.toResponse(updated);
    }

    // ---------------- GET BY ID ----------------

    @Override
    public InventoryResponse getInventoryById(Long inventoryId) {
        Inventory inventory = getInventoryEntity(inventoryId);
        return InventoryMapper.toResponse(inventory);
    }

    // ---------------- GET BY STORE ----------------

    @Override
    public List<InventoryResponse> getInventoryByStore(Long storeId) {
        return inventoryRepository.findByStoreId(storeId)
                .stream()
                .map(InventoryMapper::toResponse)
                .collect(Collectors.toList());
    }

    // ---------------- GET AVAILABLE INVENTORY ----------------

    @Override
    public List<InventoryResponse> getAvailableInventoryByStore(Long storeId) {
        return inventoryRepository.findByStoreIdAndIsAvailableTrue(storeId)
                .stream()
                .map(InventoryMapper::toResponse)
                .collect(Collectors.toList());
    }

    // ---------------- PRIVATE HELPER ----------------

    private Inventory getInventoryEntity(Long inventoryId) {
        return inventoryRepository.findById(inventoryId)
                .orElseThrow(() -> new InventoryNotFoundException(inventoryId));
    }
}

