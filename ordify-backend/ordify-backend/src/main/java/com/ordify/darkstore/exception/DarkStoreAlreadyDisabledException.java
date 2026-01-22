package com.ordify.darkstore.exception;

public class DarkStoreAlreadyDisabledException extends RuntimeException {

	private static final long serialVersionUID = 1L;
    public DarkStoreAlreadyDisabledException(Long storeId) {
        super("Dark Store already disabled with id: " + storeId);
    }
}

