package com.ordify.darkstore.exception;

public class DarkStoreNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

    public DarkStoreNotFoundException(Long storeId) {
        super("Dark Store not found with id: " + storeId);
    }
}

