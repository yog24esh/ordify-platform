package com.ordify.product.dto;

import java.math.BigDecimal;

public class ProductResponse {

    private Long productId;
    private String name;
    private String description;
    private String category;
    private BigDecimal price;
    private Boolean isActive;

    /* ---------------- Constructors ---------------- */

    public ProductResponse() {
    }

    public ProductResponse(
            Long productId,
            String name,
            String description,
            String category,
            BigDecimal price,
            Boolean isActive
    ) {
        this.productId = productId;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.isActive = isActive;
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

