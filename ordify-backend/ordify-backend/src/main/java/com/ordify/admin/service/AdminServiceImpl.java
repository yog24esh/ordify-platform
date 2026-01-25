package com.ordify.admin.service;

import com.ordify.admin.common.exception.InvalidOperationException;
import com.ordify.admin.common.exception.ResourceNotFoundException;
import com.ordify.admin.dto.response.DashboardStatsResponse;
import com.ordify.admin.dto.response.StoreResponse;
import com.ordify.admin.service.AdminService;

import com.ordify.darkstore.entity.DarkStore;
import com.ordify.darkstore.service.DarkStoreService;
//import com.ordify.user.entity.User;
//import com.ordify.user.service.UserService;
//import com.ordify.order.service.OrderService;
//import com.ordify.delivery.service.DeliveryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Implements all Super Admin business operations.
 */
@Service
public class AdminServiceImpl implements AdminService {

//    private final UserService userService;
    private final DarkStoreService darkStoreService;
//    private final OrderService orderService;
//    private final DeliveryService deliveryService;

//    public AdminServiceImpl(UserService userService,
//                            StoreService storeService,
//                            OrderService orderService,
//                            DeliveryService deliveryService) {
//        this.userService = userService;
//        this.storeService = storeService;
//        this.orderService = orderService;
//        this.deliveryService = deliveryService;
//    }
    public AdminServiceImpl(DarkStoreService darkStoreService) {
		this.darkStoreService = darkStoreService;
	}

    // Fetches platform-wide statistics for admin dashboard
//    @Override
//    public DashboardStatsResponse getDashboardStats() {
//
//        return DashboardStatsResponse.builder()
//                .totalUsers(userService.countAllUsers())
//                .totalStores(storeService.countAllStores())
//                .activeStores(storeService.countActiveStores())
//                .totalOrders(orderService.countAllOrders())
//                .totalRevenue(orderService.calculateTotalRevenue())
//                .activeDeliveryPartners(deliveryService.countActivePartners())
//                .build();
//    }

    // Returns all stores in the system
//    @Override
//    public List<StoreResponse> getAllStores() {
//
//        return storeService.getAllStores()
//                .stream()
//                .map(StoreResponse::fromEntity)
//                .collect(Collectors.toList());
//    }

    // Disables a store globally
//    @Override
//    public void disableStore(Long storeId) {
//
//        DarkStore store = storeService.getStoreById(storeId)
//                .orElseThrow(() -> new ResourceNotFoundException("Store not found"));
//
//        store.setIsActive(false);
//        storeService.save(store);
//    }
//
//    // Enables a previously disabled store
//    @Override
//    public void enableStore(Long storeId) {
//
//        DarkStore store = storeService.getStoreById(storeId)
//                .orElseThrow(() -> new ResourceNotFoundException("Store not found"));
//
//        store.setIsActive(true);
//        storeService.save(store);
//    }
//
//    // Assigns a user as store admin for a store
//    @Override
//    public void assignStoreAdmin(Long storeId, Long userId) {
//
//        DarkStore store = storeService.getStoreById(storeId)
//                .orElseThrow(() -> new ResourceNotFoundException("Store not found"));
//
//        User user = userService.getUserById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
//
//        if (storeService.hasAdmin(storeId)) {
//            throw new InvalidOperationException("Store already has an admin");
//        }
//
//        userService.promoteToStoreAdmin(user);
//        storeService.assignAdmin(store, user);
//    }
//
//    // Disables a user account
//    @Override
//    public void disableUser(Long userId) {
//
//        User user = userService.getUserById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
//
//        if (user.isSuperAdmin()) {
//            throw new InvalidOperationException("Cannot disable SUPER_ADMIN");
//        }
//
//        user.setIsActive(false);
//        userService.save(user);
//    }
//
//    // Enables a disabled user account
//    @Override
//    public void enableUser(Long userId) {
//
//        User user = userService.getUserById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
//
//        user.setIsActive(true);
//        userService.save(user);
//    }
//
//    // Returns all orders across all stores
//    @Override
//    public List<?> getAllOrders() {
//
//        return orderService.getAllOrders();
//    }
}
