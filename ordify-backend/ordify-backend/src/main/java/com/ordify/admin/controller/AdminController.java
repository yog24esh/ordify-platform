package com.ordify.admin.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordify.admin.dto.request.AssignStoreAdminRequest;
import com.ordify.admin.dto.response.ApiMessageResponse;
import com.ordify.admin.dto.response.StoreResponse;
import com.ordify.admin.service.AdminService;
import com.ordify.admin.validator.AdminAccessValidator;

/**
 * AdminController
 *
 * This controller exposes platform-level APIs for SUPER_ADMIN.
 * It provides system monitoring, store/user control, and analytics endpoints.
 *
 * Responsibilities:
 * - Validate that the caller is a SUPER_ADMIN (via AdminAccessValidator)
 * - Delegate business logic to AdminService
 * - Provide JSON responses for Postman / frontend
 *
 * NOTE:
 * - No direct database access here (Controller → Service → Repository)
 * - Session-based authentication assumed (X-SESSION-ID header)
 */
@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final AdminAccessValidator accessValidator;

    public AdminController(AdminService adminService,
                           AdminAccessValidator accessValidator) {
        this.adminService = adminService;
        this.accessValidator = accessValidator;
    }

  @GetMapping("/test")
  public ResponseEntity<String> testEndpoint() {
	  return ResponseEntity.ok("AdminController is working!");
  }
    /**
     * GET /admin/dashboard
     *
     * Returns system-level statistics:
     * - total users
     * - total stores
     * - total orders
     * - total revenue
     * - active stores
     */
//    @GetMapping("/dashboard")
//    public ResponseEntity<DashboardStatsResponse> getDashboardStats(
//            @RequestHeader("X-SESSION-ID") String sessionId) {

//        accessValidator.validateSuperAdmin(sessionId);
//        DashboardStatsResponse stats = adminService.getDashboardStats();
//        return ResponseEntity.ok(stats);
//    }

    /**
     * GET /admin/stores
     *
     * Returns all dark stores in the system (active + inactive).
     */
    @GetMapping("/stores")
    public ResponseEntity<List<StoreResponse>> getAllStores(
            @RequestHeader("X-SESSION-ID") String sessionId) {

        accessValidator.validateSuperAdmin(sessionId);
        return ResponseEntity.ok(adminService.getAllStores());
    }
    
    /**
     * PUT /admin/store/{storeId}/disable
     *
     * Disables a dark store globally.
     * Disabled stores should not accept new orders.
     */
    @PutMapping("/store/{storeId}/disable")
    public ResponseEntity<ApiMessageResponse> disableStore(
            @RequestHeader("X-SESSION-ID") String sessionId,
            @PathVariable Long storeId) {

        accessValidator.validateSuperAdmin(sessionId);
        adminService.disableStore(storeId);
        return ResponseEntity.ok(new ApiMessageResponse("Store disabled successfully"));
    }

    /**
     * PUT /admin/store/{storeId}/enable
     *
     * Re-enables a previously disabled store.
     */
    @PutMapping("/store/{storeId}/enable")
    public ResponseEntity<ApiMessageResponse> enableStore(
            @RequestHeader("X-SESSION-ID") String sessionId,
            @PathVariable Long storeId) {

        accessValidator.validateSuperAdmin(sessionId);
        adminService.enableStore(storeId);
        return ResponseEntity.ok(new ApiMessageResponse("Store enabled successfully"));
    }

    /**
     * POST /admin/store/{storeId}/assign-admin
     *
     * Assigns a USER as STORE_ADMIN for a given store.
     * Steps (handled in service layer):
     * - Validate store & user
     * - Change user role to STORE_ADMIN
     * - Insert mapping into store_admin table
     */
    @PostMapping("/store/{storeId}/assign-admin")
    public ResponseEntity<ApiMessageResponse> assignStoreAdmin(
            @RequestHeader("X-SESSION-ID") String sessionId,
            @PathVariable Long storeId,
            @RequestBody AssignStoreAdminRequest request) {

        accessValidator.validateSuperAdmin(sessionId);
//        adminService.assignStoreAdmin(storeId, request.getUserId());
        return ResponseEntity.ok(new ApiMessageResponse("Store admin assigned successfully"));
    }

    /**
     * PUT /admin/user/{userId}/disable
     *
     * Disables any user (customer, delivery partner, store admin).
     * SUPER_ADMIN cannot be disabled (validated in service layer).
     */
    @PutMapping("/user/{userId}/disable")
    public ResponseEntity<ApiMessageResponse> disableUser(
            @RequestHeader("X-SESSION-ID") String sessionId,
            @PathVariable Long userId) {

        accessValidator.validateSuperAdmin(sessionId);
//        adminService.disableUser(userId);
        return ResponseEntity.ok(new ApiMessageResponse("User disabled successfully"));
    }

    /**
     * PUT /admin/user/{userId}/enable
     *
     * Re-enables a disabled user.
     */
    @PutMapping("/user/{userId}/enable")
    public ResponseEntity<ApiMessageResponse> enableUser(
            @RequestHeader("X-SESSION-ID") String sessionId,
            @PathVariable Long userId) {

        accessValidator.validateSuperAdmin(sessionId);
//        adminService.enableUser(userId);
        return ResponseEntity.ok(new ApiMessageResponse("User enabled successfully"));
    }

    /**
     * GET /admin/orders
     *
     * Returns all orders in the system across all stores.
     * Used for monitoring & debugging.
     */
//    @GetMapping("/orders")
//    public ResponseEntity<?> getAllOrders(
//            @RequestHeader("X-SESSION-ID") String sessionId) {
//
//        accessValidator.validateSuperAdmin(sessionId);
//        return ResponseEntity.ok(adminService.getAllOrders());
//    }

}
