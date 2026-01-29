package com.ordify.authenticator.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.authenticator.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(String roleName);
}