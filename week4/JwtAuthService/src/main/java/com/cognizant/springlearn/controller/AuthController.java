
package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.JwtResponse;
import com.cognizant.springlearn.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/authenticate")
    public JwtResponse authenticate(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        String username = "anonymous";
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Creds = authHeader.substring(6);
            byte[] decoded = Base64.getDecoder().decode(base64Creds);
            String creds = new String(decoded, StandardCharsets.UTF_8);
            String[] parts = creds.split(":", 2);
            username = parts[0];
        }
        String token = jwtService.generateToken(username);
        return new JwtResponse(token);
    }
}
