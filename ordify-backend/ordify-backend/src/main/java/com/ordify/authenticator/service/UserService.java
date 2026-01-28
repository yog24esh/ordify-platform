package com.ordify.authenticator.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ordify.admin.common.exception.InvalidOperationException;
import com.ordify.admin.common.exception.ResourceNotFoundException;
import com.ordify.authenticator.dto.UpdateUserRequest;
import com.ordify.authenticator.entity.Role;
import com.ordify.authenticator.entity.User;
import com.ordify.authenticator.repository.RoleRepository;
import com.ordify.authenticator.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder; // ✅ Add PasswordEncoder

    // ✅ Constructor Injection
    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ================= GET ALL USERS =================
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ================= GET USER BY ID =================
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    // ================= GET USERS BY ROLE =================
    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole_RoleName(role);
    }

    // ================= ACTIVATE / DEACTIVATE =================
    public void activateDeactivateUser(Long id, boolean status) {
        User user = getUserById(id);
        user.setIsActive(status);
        userRepository.save(user);
    }

    // ================= UPDATE USER =================
    public User updateUser(Long id, UpdateUserRequest req) {

        User user = getUserById(id);

        // Update name
        if (req.getName() != null && !req.getName().isBlank()) {
            user.setName(req.getName());
        }

        // Update phone
        if (req.getPhone() != null && !req.getPhone().isBlank()) {
            user.setPhone(req.getPhone());
        }

        // Update role (optional)
        if (req.getRole() != null && !req.getRole().isBlank()) {
            Role role = roleRepository.findByRoleName(req.getRole())
                    .orElseThrow(() ->
                            new RuntimeException("Role not found: " + req.getRole()));
            user.setRole(role);
        }

        // ================= UPDATE PASSWORD =================
        if (req.getPassword() != null && !req.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(req.getPassword()));
        }

        return userRepository.save(user);
    }

    // ================= HARD DELETE =================
    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    // ================= PROMOTE TO STORE ADMIN =================
    @Transactional
    public void promoteToStoreAdmin(User user) {

        if (!user.getIsActive()) {
            throw new InvalidOperationException("Cannot promote an inactive user");
        }

        String currentRole = user.getRole().getRoleName();

        if ("SUPER_ADMIN".equals(currentRole)) {
            throw new InvalidOperationException("SUPER_ADMIN cannot be reassigned");
        }

        if ("STORE_ADMIN".equals(currentRole)) {
            return; // already a store admin, no-op
        }

        if ("DELIVERY_PARTNER".equals(currentRole)) {
            throw new InvalidOperationException("Delivery partner cannot be store admin");
        }

        Role storeAdminRole = roleRepository.findByRoleName("STORE_ADMIN")
                .orElseThrow(() -> new ResourceNotFoundException("STORE_ADMIN role not found"));

        user.setRole(storeAdminRole);
        userRepository.save(user);
    }



}