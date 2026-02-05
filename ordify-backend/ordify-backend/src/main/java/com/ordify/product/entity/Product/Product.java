package com.ordify.product.entity.Product;

import java.math.BigDecimal;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(nullable = false)
    private String name;

    private String description;

    private String category;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "is_active")
    private Boolean isActive = true;

    /* ---------------- Constructors ---------------- */

    // Mandatory no-arg constructor (JPA)
    public Product() {
    }

    // Convenience constructor
    public Product(String name, String description, String category, BigDecimal price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.isActive = true;
    }

    /* ---------------- Lifecycle Hooks ---------------- */

    @PrePersist
    protected void onCreate() {
        if (this.isActive == null) {
            this.isActive = true;
        }
    }

    /* ---------------- Getters & Setters ---------------- */

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Boolean getIsActive() {
        return isActive;
    }
    
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}

