package com.ordify.authenticator.controller;

import com.ordify.authenticator.dto.UpdateUserRequest;
import com.ordify.authenticator.entity.User;
import com.ordify.authenticator.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/by-role")
    public List<User> getByRole(@RequestParam String role) {
        return userService.getUsersByRole(role);
    }
    
    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
           @Valid @RequestBody UpdateUserRequest req) {

        return userService.updateUser(id, req);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }



    @PatchMapping("/{id}/status")
    public String updateStatus(
            @PathVariable Long id,
            @RequestParam boolean active) {

        userService.activateDeactivateUser(id, active);
        return "User status updated";
    }
}
