package com.smartcampus.backend.controller;

import com.smartcampus.backend.entity.User;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin("http://localhost:5173")
public class ProfileController {

    @GetMapping
    public Map<String, Object> getProfile(
            Authentication authentication
    ) {

        User user = (User) authentication.getPrincipal();

        Map<String, Object> profile = new HashMap<>();

        profile.put("id", user.getId());
        profile.put("name", user.getName());
        profile.put("email", user.getEmail());
        profile.put("role", user.getRole().name());
        profile.put("createdAt", user.getCreatedAt());

        return profile;
    }
}