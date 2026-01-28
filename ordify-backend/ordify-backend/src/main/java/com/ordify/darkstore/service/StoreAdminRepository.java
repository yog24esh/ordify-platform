package com.ordify.darkstore.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.darkstore.entity.StoreAdmin;

public interface StoreAdminRepository extends JpaRepository<StoreAdmin, Long> {
	boolean existsByStore_StoreId(Long storeId);
}
