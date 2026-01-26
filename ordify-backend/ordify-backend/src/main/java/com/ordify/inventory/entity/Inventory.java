package com.ordify.inventory.entity;

import jakarta.persistence.*;

@Entity
@Table(
    name = "inventory",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"store_id", "product_id"})
    }
)
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    private Long inventoryId;

    @Column(name = "store_id", nullable = false)
    private Long storeId;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "is_available", nullable = false)
    private Boolean isAvailable;

    /* ---------- Constructors ---------- */

    // Mandatory no-args constructor for JPA
    public Inventory() {
    }

    // Optional convenience constructor
    public Inventory(Long storeId, Long productId, Integer quantity, Boolean isAvailable) {
        this.storeId = storeId;
        this.productId = productId;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }

    /* ---------- Getters & Setters ---------- */

    public Long getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(Long inventoryId) {
        this.inventoryId = inventoryId;
    }

    public Long getStoreId() {
        return storeId;
    }

    public void setStoreId(Long storeId) {
        this.storeId = storeId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
}

