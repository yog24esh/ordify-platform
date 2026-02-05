package com.ordify.product.mapper;

import org.springframework.stereotype.Component;

import com.ordify.product.dto.ProductCreateRequest;
import com.ordify.product.dto.ProductResponse;
import com.ordify.product.dto.ProductUpdateRequest;
import com.ordify.product.entity.Product.Product;

@Component
public class ProductMapper {

    public Product toEntity(ProductCreateRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setCategory(request.getCategory());
        product.setPrice(request.getPrice());
        product.setIsActive(true);
        return product;
    }

    public void updateEntity(Product product, ProductUpdateRequest request) {
        if (request.getName() != null)
            product.setName(request.getName());

        if (request.getDescription() != null)
            product.setDescription(request.getDescription());

        if (request.getCategory() != null)
            product.setCategory(request.getCategory());

        if (request.getPrice() != null)
            product.setPrice(request.getPrice());

        if (request.getIsActive() != null)
            product.setIsActive(request.getIsActive());
    }

    public ProductResponse toResponse(Product product) {
        ProductResponse response = new ProductResponse();
        response.setProductId(product.getProductId());
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setCategory(product.getCategory());
        response.setPrice(product.getPrice());
        response.setIsActive(product.getIsActive());
        return response;
    }
}
