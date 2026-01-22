package com.ordify.darkstore.repository;

import com.ordify.darkstore.entity.DarkStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DarkStoreRepository extends JpaRepository<DarkStore, Long> {

    // Fetch only active stores
    List<DarkStore> findByIsActiveTrue();
}

