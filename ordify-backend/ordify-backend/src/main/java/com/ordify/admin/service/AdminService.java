package com.ordify.admin.service;

import java.util.List;

import com.ordify.admin.dto.response.StoreResponse;

public interface AdminService {
//	public DashboardStatsResponse getDashboardStats();
//
	public List<StoreResponse> getAllStores();

	public void disableStore(Long storeId);

	public void enableStore(Long storeId);
//
//	public void assignStoreAdmin(Long storeId, Long userId);
//
//	public void disableUser(Long userId);
//
//	public void enableUser(Long userId);
//
//	public List<?> getAllOrders();
}
