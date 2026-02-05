package com.ordify.product.service;

import com.ordify.product.dto.ProductCreateRequest;
import com.ordify.product.dto.ProductResponse;
import com.ordify.product.dto.ProductUpdateRequest;

import java.util.List;

public interface ProductService {

    /* -------- Create -------- */
    ProductResponse createProduct(ProductCreateRequest request);

    /* -------- Update -------- */
    ProductResponse updateProduct(Long productId, ProductUpdateRequest request);

    /* -------- Get -------- */
    ProductResponse getProductById(Long productId);

    List<ProductResponse> getAllActiveProducts();

    /* -------- Disable -------- */
    void disableProduct(Long productId);
}
