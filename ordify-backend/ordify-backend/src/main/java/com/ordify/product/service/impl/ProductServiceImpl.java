package com.ordify.product.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ordify.product.dto.ProductCreateRequest;
import com.ordify.product.dto.ProductResponse;
import com.ordify.product.dto.ProductUpdateRequest;
import com.ordify.product.entity.Product.Product;
import com.ordify.product.mapper.ProductMapper;
import com.ordify.product.repository.ProductRepository;
import com.ordify.product.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public ProductServiceImpl(
            ProductRepository productRepository,
            ProductMapper productMapper
    ) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    /* -------- Create -------- */

    @Override
    public ProductResponse createProduct(ProductCreateRequest request) {
        Product product = productMapper.toEntity(request);
        Product saved = productRepository.save(product);
        return productMapper.toResponse(saved);
    }

    /* -------- Update -------- */

    @Override
    public ProductResponse updateProduct(Long productId, ProductUpdateRequest request) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() ->
                        new RuntimeException("Product not found with id: " + productId)
                );

        productMapper.updateEntity(product, request);
        Product updated = productRepository.save(product);
        return productMapper.toResponse(updated);
    }

    /* -------- Get By ID -------- */

    @Override
    public ProductResponse getProductById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() ->
                        new RuntimeException("Product not found with id: " + productId)
                );

        return productMapper.toResponse(product);
    }

    /* -------- Get All Active -------- */

    @Override
    public List<ProductResponse> getAllActiveProducts() {
        return productRepository.findByIsActiveTrue()
                .stream()
                .map(productMapper::toResponse)
                .collect(Collectors.toList());
    }

    /* -------- Disable -------- */

    @Override
    public void disableProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() ->
                        new RuntimeException("Product not found with id: " + productId)
                );

        product.setIsActive(false);
        productRepository.save(product);
    }
}
