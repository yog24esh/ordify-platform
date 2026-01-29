package com.ordify.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordify.inventory.entity.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    /**
     * Find inventory entry by store and product
     */
    Optional<Inventory> findByStoreIdAndProductId(Long storeId, Long productId);

    /**
     * Get all inventory items for a store
     */
    List<Inventory> findByStoreId(Long storeId);

    /**
     * Get only available inventory items for a store
     */
    List<Inventory> findByStoreIdAndIsAvailableTrue(Long storeId);

    /**
     * Get inventory items with stock > 0 for a store
     */
    List<Inventory> findByStoreIdAndQuantityGreaterThan(Long storeId, Integer quantity);
}

