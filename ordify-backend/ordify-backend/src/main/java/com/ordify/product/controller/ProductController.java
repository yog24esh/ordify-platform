package com.ordify.product.controller;

import com.ordify.product.dto.ProductCreateRequest;
import com.ordify.product.dto.ProductResponse;
import com.ordify.product.dto.ProductUpdateRequest;
import com.ordify.product.service.ProductService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /* ================= CREATE ================= */

    @PostMapping
    public ResponseEntity<ProductResponse> createProduct(
            @Valid @RequestBody ProductCreateRequest request
    ) {
        ProductResponse response = productService.createProduct(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    /* ================= UPDATE ================= */

    @PutMapping("/{productId}")
    public ResponseEntity<ProductResponse> updateProduct(
            @PathVariable Long productId,
            @Valid @RequestBody ProductUpdateRequest request
    ) {
        ProductResponse response =
                productService.updateProduct(productId, request);
        return ResponseEntity.ok(response);
    }

    /* ================= GET BY ID ================= */

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponse> getProductById(
            @PathVariable Long productId
    ) {
        ProductResponse response =
                productService.getProductById(productId);
        return ResponseEntity.ok(response);
    }

    /* ================= GET ALL ACTIVE ================= */

    @GetMapping
    public ResponseEntity<List<ProductResponse>> getAllActiveProducts() {
        List<ProductResponse> products =
                productService.getAllActiveProducts();
        return ResponseEntity.ok(products);
    }

    /* ================= DISABLE ================= */

    @PutMapping("/{productId}/disable")
    public ResponseEntity<String> disableProduct(
            @PathVariable Long productId
    ) {
        productService.disableProduct(productId);
        return ResponseEntity.ok("Product disabled successfully");
    }
}
