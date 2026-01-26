package com.ordify.inventory.exception;

public class InventoryAlreadyExistsException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public InventoryAlreadyExistsException(Long storeId, Long productId) {
        super("Inventory already exists for storeId: "
                + storeId + " and productId: " + productId);
    }
}

