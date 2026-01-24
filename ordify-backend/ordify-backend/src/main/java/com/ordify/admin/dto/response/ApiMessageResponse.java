package com.ordify.admin.dto.response;

/**
 * ApiMessageResponse
 *
 * Simple response DTO used to return only a message to client.
 */
public class ApiMessageResponse {

    private String message;

    public ApiMessageResponse() {
    }

    public ApiMessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
