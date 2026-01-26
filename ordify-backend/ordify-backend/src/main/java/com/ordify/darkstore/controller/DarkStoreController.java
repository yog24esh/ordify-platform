package com.ordify.darkstore.controller;

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

import com.ordify.darkstore.dto.DarkStoreCreateRequest;
import com.ordify.darkstore.dto.DarkStoreResponse;
import com.ordify.darkstore.dto.DarkStoreUpdateRequest;
import com.ordify.darkstore.service.DarkStoreService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/darkstores")
public class DarkStoreController {

    private final DarkStoreService darkStoreService;

    public DarkStoreController(DarkStoreService darkStoreService) {
        this.darkStoreService = darkStoreService;
    }

    // ---------------- CREATE ----------------

    @PostMapping
    public ResponseEntity<DarkStoreResponse> createDarkStore(
            @Valid @RequestBody DarkStoreCreateRequest request) {

        DarkStoreResponse response =
                darkStoreService.createDarkStore(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // ---------------- UPDATE ----------------

    @PutMapping("/{storeId}")
    public ResponseEntity<DarkStoreResponse> updateDarkStore(
            @PathVariable Long storeId,
            @Valid @RequestBody DarkStoreUpdateRequest request) {

        DarkStoreResponse response =
                darkStoreService.updateDarkStore(storeId, request);

        return ResponseEntity.ok(response);
    }

    // ---------------- GET BY ID ----------------

    @GetMapping("/{storeId}")
    public ResponseEntity<DarkStoreResponse> getDarkStoreById(
            @PathVariable Long storeId) {

        DarkStoreResponse response =
                darkStoreService.getDarkStoreById(storeId);

        return ResponseEntity.ok(response);
    }

    // ---------------- GET ACTIVE STORES ----------------

    @GetMapping
    public ResponseEntity<List<DarkStoreResponse>> getAllActiveStores() {

        List<DarkStoreResponse> responseList =
                darkStoreService.getAllActiveStores();

        return ResponseEntity.ok(responseList);
    }

    // ---------------- DISABLE STORE ----------------

    @PutMapping("/{storeId}/disable")
    public ResponseEntity<String> disableDarkStore(
            @PathVariable Long storeId) {

        darkStoreService.disableDarkStore(storeId);
        return ResponseEntity.ok("Dark Store disabled successfully");
    }
}
