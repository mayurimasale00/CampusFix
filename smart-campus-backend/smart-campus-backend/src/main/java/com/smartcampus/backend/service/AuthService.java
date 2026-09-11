package com.smartcampus.backend.service;

import com.smartcampus.backend.dto.AuthResponse;
import com.smartcampus.backend.dto.LoginRequest;
import com.smartcampus.backend.dto.RegisterRequest;
import com.smartcampus.backend.entity.Role;
import com.smartcampus.backend.entity.User;
import com.smartcampus.backend.repository.UserRepository;
import com.smartcampus.backend.security.JwtService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException(
                    "Email already registered"
            );
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        user.setRole(Role.STUDENT);

        userRepository.save(user);

        return new AuthResponse(
                null,
                "Registration successful",
                "STUDENT",
                user.getName()
        );
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(
                request.getEmail()
        ).orElseThrow(() ->
                new RuntimeException("Invalid email or password")
        );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {
            throw new RuntimeException(
                    "Invalid email or password"
            );
        }

        String token = jwtService.generateToken(
                user.getEmail(),
                user.getRole().name()
        );

        return new AuthResponse(
                token,
                "Login successful",
                user.getRole().name(),
                user.getName()
        );
    }
}