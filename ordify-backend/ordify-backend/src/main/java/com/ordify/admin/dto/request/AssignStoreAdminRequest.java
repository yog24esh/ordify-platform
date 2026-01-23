package com.ordify.admin.dto.request;

/**
 * AssignStoreAdminRequest
 *
 * Request DTO used by SUPER_ADMIN to assign an existing user
 * as a STORE_ADMIN for a given dark store.
 */
public class AssignStoreAdminRequest {

    private Long userId;

    public AssignStoreAdminRequest() {
    }

    public AssignStoreAdminRequest(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
