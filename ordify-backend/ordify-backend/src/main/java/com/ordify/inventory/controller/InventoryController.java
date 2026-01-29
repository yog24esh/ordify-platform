package com.ordify.inventory.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordify.inventory.dto.InventoryCreateRequest;
import com.ordify.inventory.dto.InventoryResponse;
import com.ordify.inventory.dto.InventoryUpdateRequest;
import com.ordify.inventory.service.InventoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    // ---------------- ADD INVENTORY ----------------
    // Add a product to a store

    @PostMapping
    public ResponseEntity<InventoryResponse> addInventory(
            @Valid @RequestBody InventoryCreateRequest request) {

        InventoryResponse response =
                inventoryService.addInventory(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // ---------------- UPDATE INVENTORY ----------------
    // Update quantity / availability

    @PutMapping("/{inventoryId}")
    public ResponseEntity<InventoryResponse> updateInventory(
            @PathVariable Long inventoryId,
            @Valid @RequestBody InventoryUpdateRequest request) {

        InventoryResponse response =
                inventoryService.updateInventory(inventoryId, request);

        return ResponseEntity.ok(response);
    }

    // ---------------- GET INVENTORY BY ID ----------------

    @GetMapping("/{inventoryId}")
    public ResponseEntity<InventoryResponse> getInventoryById(
            @PathVariable Long inventoryId) {

        InventoryResponse response =
                inventoryService.getInventoryById(inventoryId);

        return ResponseEntity.ok(response);
    }

    // ---------------- GET INVENTORY BY STORE ----------------

    @GetMapping("/store/{storeId}")
    public ResponseEntity<List<InventoryResponse>> getInventoryByStore(
            @PathVariable Long storeId) {

        List<InventoryResponse> responseList =
                inventoryService.getInventoryByStore(storeId);

        return ResponseEntity.ok(responseList);
    }

    // ---------------- GET AVAILABLE INVENTORY BY STORE ----------------

    @GetMapping("/store/{storeId}/available")
    public ResponseEntity<List<InventoryResponse>> getAvailableInventoryByStore(
            @PathVariable Long storeId) {

        List<InventoryResponse> responseList =
                inventoryService.getAvailableInventoryByStore(storeId);

        return ResponseEntity.ok(responseList);
    }
}

