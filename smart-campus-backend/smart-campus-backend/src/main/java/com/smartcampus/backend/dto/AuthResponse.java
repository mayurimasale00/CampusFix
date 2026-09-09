package com.smartcampus.backend.dto;

public class AuthResponse {

    private String token;
    private String message;
    private String role;
    private String name;

    public AuthResponse(
            String token,
            String message,
            String role,
            String name) {

        this.token = token;
        this.message = message;
        this.role = role;
        this.name = name;
    }

    public String getToken() {
        return token;
    }

    public String getMessage() {
        return message;
    }

    public String getRole() {
        return role;
    }

    public String getName() {
        return name;
    }
}