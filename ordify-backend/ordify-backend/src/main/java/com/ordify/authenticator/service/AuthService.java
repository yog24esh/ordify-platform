package com.ordify.authenticator.service;

import com.ordify.authenticator.dto.*;
import com.ordify.authenticator.entity.*;
import com.ordify.authenticator.repository.*;
import com.ordify.authenticator.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired private UserRepository userRepo;
    @Autowired private RoleRepository roleRepo;
    @Autowired private PasswordEncoder encoder;
    @Autowired private JwtUtil jwtUtil;

    public void register(RegisterRequest req) {

        Role role = roleRepo.findByRoleName(req.getRole())
                .orElseThrow(() -> new RuntimeException("Role not found"));

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPhone(req.getPhone());
        user.setPassword(encoder.encode(req.getPassword()));
        user.setRole(role);

        userRepo.save(user);
    }

   public ResponseEntity<AuthResponse> login(LoginRequest req) {

    // 1️⃣ Fetch user by email
    User user = userRepo.findByEmail(req.getEmail())
            .orElse(null);

    // 2️⃣ Check if user exists
    if (user == null || !encoder.matches(req.getPassword(), user.getPassword())) {
        // Return 401 instead of throwing RuntimeException
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body(new AuthResponse("Invalid credentials"));
    }

    // 3️⃣ Generate JWT token
    String token = jwtUtil.generateToken(user.getEmail());

    // 4️⃣ Return token in response
    return ResponseEntity.ok(new AuthResponse(token));
}

}
