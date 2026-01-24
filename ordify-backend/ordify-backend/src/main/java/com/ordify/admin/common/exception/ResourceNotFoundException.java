package com.ordify.admin.common.exception;

/**
 * Thrown when a required resource is not found in database.
 */
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
