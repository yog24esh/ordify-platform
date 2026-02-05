package com.ordify.product.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class ProductCreateRequest {

    @NotBlank
    private String name;

    private String description;

    private String category;

    @NotNull
    @Positive
    private BigDecimal price;

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

    public @NotNull @Positive BigDecimal getPrice() {
        return price;
    }
    
    public void setPrice(@NotNull @Positive BigDecimal price) {
        this.price = price;
    }
}
