package com.ordify.service;

import com.ordify.entity.User;
import com.ordify.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole_RoleName(role);
    }

    public void activateDeactivateUser(Long id, boolean status) {
        User user = getUserById(id);
        user.setIsActive(status);
        userRepository.save(user);
    }
}
