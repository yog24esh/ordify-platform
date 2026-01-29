package com.ordify.darkstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordify.darkstore.entity.DarkStore;

@Repository
public interface DarkStoreRepository extends JpaRepository<DarkStore, Long> {

    // Fetch only active stores
    List<DarkStore> findByIsActiveTrue();
}

