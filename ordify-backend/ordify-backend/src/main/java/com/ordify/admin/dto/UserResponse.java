package com.ordify.admin.dto;

import lombok.Builder;
import lombok.Getter;

/**
 * UserResponse
 *
 * Admin-facing DTO representing a user in the system.
 * Used for listing users in Admin dashboard.
 */
@Getter
@Builder
public class UserResponse {

    private Long userId;

    private String name;

    private String email;

    private String phone;

    private String role;

    private boolean isActive;
}

