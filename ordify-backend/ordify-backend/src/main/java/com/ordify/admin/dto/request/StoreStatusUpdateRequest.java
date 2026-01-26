package com.ordify.admin.dto.request;

/**
 * StoreStatusUpdateRequest
 *
 * Request DTO used by SUPER_ADMIN to enable/disable a dark store.
 */
public class StoreStatusUpdateRequest {

    private Boolean isActive;

    public StoreStatusUpdateRequest() {
    }

    public StoreStatusUpdateRequest(Boolean isActive) {
        this.isActive = isActive;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean active) {
        isActive = active;
    }
}
