package com.smartcampus.backend.controller;

import com.smartcampus.backend.dto.AuthResponse;
import com.smartcampus.backend.dto.LoginRequest;
import com.smartcampus.backend.dto.RegisterRequest;
import com.smartcampus.backend.service.AuthService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {

        try {

            return ResponseEntity.ok(
                    authService.register(request)
            );

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request
    ) {

        try {

            return ResponseEntity.ok(
                    authService.login(request)
            );

        } catch (RuntimeException e) {

            return ResponseEntity
                    .status(401)
                    .body(e.getMessage());
        }
    }
}