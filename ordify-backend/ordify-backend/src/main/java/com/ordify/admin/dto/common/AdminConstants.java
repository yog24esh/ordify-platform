package com.ordify.admin.dto.common;

/**
 * AdminConstants
 *
 * Holds constant values used across the Admin module.
 * Useful to avoid hardcoding strings in controllers/services.
 */
public final class AdminConstants {

    private AdminConstants() {
        // Prevent instantiation
    }

    public static final String SESSION_HEADER = "X-SESSION-ID";

    public static final String MSG_STORE_ENABLED = "Store enabled successfully";
    public static final String MSG_STORE_DISABLED = "Store disabled successfully";

    public static final String MSG_USER_ENABLED = "User enabled successfully";
    public static final String MSG_USER_DISABLED = "User disabled successfully";

    public static final String MSG_STORE_ADMIN_ASSIGNED = "Store admin assigned successfully";

    public static final String ERR_SESSION_MISSING = "Session ID missing";
    public static final String ERR_INVALID_SESSION = "Invalid session";
    public static final String ERR_ACCESS_DENIED = "Access denied: SUPER_ADMIN only";

    public static final String ERR_STORE_NOT_FOUND = "Store not found";
    public static final String ERR_USER_NOT_FOUND = "User not found";

    public static final String ERR_CANNOT_DISABLE_SUPER_ADMIN = "Cannot disable SUPER_ADMIN";
    public static final String ERR_STORE_ALREADY_HAS_ADMIN = "Store already has an admin";
}
