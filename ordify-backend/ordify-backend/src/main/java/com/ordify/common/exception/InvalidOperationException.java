package com.ordify.common.exception;

/**
 * Thrown when an operation is not allowed due to business rules.
 */
public class InvalidOperationException extends RuntimeException {

    public InvalidOperationException(String message) {
        super(message);
    }
}
