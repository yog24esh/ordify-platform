package com.ordify.inventory.mapper;

import com.ordify.inventory.dto.InventoryCreateRequest;
import com.ordify.inventory.dto.InventoryResponse;
import com.ordify.inventory.entity.Inventory;

public class InventoryMapper {

    // Private constructor to prevent instantiation
    private InventoryMapper() {
    }

    /**
     * Convert CreateRequest DTO to Inventory entity
     */
    public static Inventory toEntity(InventoryCreateRequest request) {

        Inventory inventory = new Inventory();
        inventory.setStoreId(request.getStoreId());
        inventory.setProductId(request.getProductId());
        inventory.setQuantity(request.getQuantity());

        // isAvailable will be decided in service (business rule)
        return inventory;
    }

    /**
     * Convert Inventory entity to Response DTO
     */
    public static InventoryResponse toResponse(Inventory inventory) {

        InventoryResponse response = new InventoryResponse();
        response.setInventoryId(inventory.getInventoryId());
        response.setStoreId(inventory.getStoreId());
        response.setProductId(inventory.getProductId());
        response.setQuantity(inventory.getQuantity());
        response.setIsAvailable(inventory.getIsAvailable());

        return response;
    }
}

