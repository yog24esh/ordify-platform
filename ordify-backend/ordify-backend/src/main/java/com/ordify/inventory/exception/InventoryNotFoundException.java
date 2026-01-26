package com.ordify.inventory.exception;

public class InventoryNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public InventoryNotFoundException(Long inventoryId) {
        super("Inventory not found with id: " + inventoryId);
    }
}

