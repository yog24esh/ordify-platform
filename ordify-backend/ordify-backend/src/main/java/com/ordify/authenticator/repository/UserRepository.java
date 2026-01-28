package com.ordify.authenticator.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ordify.authenticator.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

	Optional<User> findByPhone(String phone);

	List<User> findByRole_RoleName(String role);
    
  
}