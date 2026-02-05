package com.ordify.product.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.Positive;

public class ProductUpdateRequest {

    private String name;
    private String description;
    private String category;

    @Positive
    private BigDecimal price;

    private Boolean isActive;

    /* ---------- Getters & Setters ---------- */

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

    public @Positive BigDecimal getPrice() {
        return price;
    }
    
    public void setPrice(@Positive BigDecimal price) {
        this.price = price;
    }

    public Boolean getIsActive() {
        return isActive;
    }
    
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}
