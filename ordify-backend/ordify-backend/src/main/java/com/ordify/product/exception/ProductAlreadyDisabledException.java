package com.ordify.product.exception;

public class ProductAlreadyDisabledException extends RuntimeException {

    public ProductAlreadyDisabledException(Long productId) {
        super("Product already disabled with id: " + productId);
    }
}

