package com.ordify.admin.common.exception;

/**
 * Thrown when request body/parameters are invalid.
 */
public class BadRequestException extends RuntimeException {

    public BadRequestException(String message) {
        super(message);
    }
}
