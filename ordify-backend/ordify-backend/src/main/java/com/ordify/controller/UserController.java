package com.ordify.controller;

import com.ordify.entity.User;
import com.ordify.service.UserService;
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

    @PatchMapping("/{id}/status")
    public String updateStatus(
            @PathVariable Long id,
            @RequestParam boolean active) {

        userService.activateDeactivateUser(id, active);
        return "User status updated";
    }
}
