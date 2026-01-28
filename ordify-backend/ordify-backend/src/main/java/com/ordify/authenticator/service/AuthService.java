package com.ordify.authenticator.service;

import com.ordify.authenticator.dto.*;
import com.ordify.authenticator.entity.*;
import com.ordify.authenticator.repository.*;
import com.ordify.authenticator.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    // ================= REGISTER =================
    public void register(RegisterRequest req) {

        if (userRepo.findByEmail(req.getEmail()).isPresent())
            throw new RuntimeException("Email already registered");

        if (userRepo.findByPhone(req.getPhone()).isPresent())
            throw new RuntimeException("Phone number already registered");

        Role role = roleRepo.findByRoleName(req.getRole())
                .orElseThrow(() -> new RuntimeException("Role not found"));

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPhone(req.getPhone());
        user.setPassword(encoder.encode(req.getPassword()));
        user.setRole(role);

        user.setSecurityQuestion(req.getSecurityQuestion());
        user.setSecurityAnswer(encoder.encode(req.getSecurityAnswer()));

        userRepo.save(user);
    }

    // ================= LOGIN =================
    public ResponseEntity<AuthResponse> login(LoginRequest req) {

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(req.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse("Invalid credentials"));
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // ================= FORGOT PASSWORD =================
    public SecurityQuestionResponse getSecurityQuestion(String email) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new SecurityQuestionResponse(user.getEmail(), user.getSecurityQuestion());
    }

    // ================= RESET PASSWORD =================
    public void resetPassword(ResetPasswordRequest req) {

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        boolean isAnswerCorrect = encoder.matches(
                req.getSecurityAnswer(),
                user.getSecurityAnswer()
        );

        if (!isAnswerCorrect)
            throw new RuntimeException("Security answer is incorrect");

        user.setPassword(encoder.encode(req.getNewPassword()));
        userRepo.save(user);
    }
}
