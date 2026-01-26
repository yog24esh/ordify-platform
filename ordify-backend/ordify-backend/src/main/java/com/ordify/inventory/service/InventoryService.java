package com.ordify.inventory.service;

import com.ordify.inventory.dto.InventoryCreateRequest;
import com.ordify.inventory.dto.InventoryResponse;
import com.ordify.inventory.dto.InventoryUpdateRequest;

import java.util.List;

public interface InventoryService {

    InventoryResponse addInventory(InventoryCreateRequest request);

    InventoryResponse updateInventory(Long inventoryId, InventoryUpdateRequest request);

    InventoryResponse getInventoryById(Long inventoryId);

    List<InventoryResponse> getInventoryByStore(Long storeId);

    List<InventoryResponse> getAvailableInventoryByStore(Long storeId);
}

