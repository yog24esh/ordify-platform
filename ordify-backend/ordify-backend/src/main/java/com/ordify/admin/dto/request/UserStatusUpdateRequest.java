package com.ordify.admin.dto.request;

/**
 * UserStatusUpdateRequest
 *
 * Request DTO used by SUPER_ADMIN to enable/disable a user account.
 */
public class UserStatusUpdateRequest {

    private Boolean isActive;

    public UserStatusUpdateRequest() {
    }

    public UserStatusUpdateRequest(Boolean isActive) {
        this.isActive = isActive;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean active) {
        isActive = active;
    }
}
