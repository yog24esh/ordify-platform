package com.ordify.authenticator.dto;

public class AuthResponse {
    private String token;
    private Long userId;
    private String role;
    private String message; // for error messages

    // Constructors
    public AuthResponse(String token, Long userId, String role) {
        this.token = token;
        this.userId = userId;
        this.role = role;
    }

    public AuthResponse(String message) {
        this.message = message;
    }

    // Getters and setters
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
