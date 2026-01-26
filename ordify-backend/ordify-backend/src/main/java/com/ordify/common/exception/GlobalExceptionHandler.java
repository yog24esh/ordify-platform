package com.ordify.common.exception;

import com.ordify.darkstore.exception.DarkStoreAlreadyDisabledException;
import com.ordify.darkstore.exception.DarkStoreNotFoundException;
import com.ordify.inventory.exception.InventoryAlreadyExistsException;
import com.ordify.inventory.exception.InventoryNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // ---------------- DARK STORE ----------------

    @ExceptionHandler(DarkStoreNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleStoreNotFound(
            DarkStoreNotFoundException ex) {

        return buildResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DarkStoreAlreadyDisabledException.class)
    public ResponseEntity<Map<String, Object>> handleStoreAlreadyDisabled(
            DarkStoreAlreadyDisabledException ex) {

        return buildResponse(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    // ---------------- INVENTORY ----------------

    @ExceptionHandler(InventoryNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleInventoryNotFound(
            InventoryNotFoundException ex) {

        return buildResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InventoryAlreadyExistsException.class)
    public ResponseEntity<Map<String, Object>> handleInventoryAlreadyExists(
            InventoryAlreadyExistsException ex) {

        return buildResponse(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    // ---------------- VALIDATION ----------------

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(
            MethodArgumentNotValidException ex) {

        Map<String, String> fieldErrors = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->
                fieldErrors.put(error.getField(), error.getDefaultMessage())
        );

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Validation failed");
        response.put("errors", fieldErrors);
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("timestamp", LocalDateTime.now());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    // ---------------- FALLBACK ----------------

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGenericException(Exception ex) {

        return buildResponse(
                "Internal server error. Please contact support.",
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    // ---------------- HELPER ----------------

    private ResponseEntity<Map<String, Object>> buildResponse(
            String message, HttpStatus status) {

        Map<String, Object> response = new HashMap<>();
        response.put("message", message);
        response.put("status", status.value());
        response.put("timestamp", LocalDateTime.now());

        return new ResponseEntity<>(response, status);
    }
}
