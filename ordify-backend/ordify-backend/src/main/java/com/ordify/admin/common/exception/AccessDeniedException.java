package com.ordify.admin.common.exception;

/**
 * Thrown when user tries to access a restricted API/action.
 */
public class AccessDeniedException extends RuntimeException {

    public AccessDeniedException(String message) {
        super(message);
    }
}
