package com.michael.budgetTracker.controller;

import com.michael.budgetTracker.model.dto.AuthRequest;
import com.michael.budgetTracker.model.dto.AuthResponse;
import com.michael.budgetTracker.security.model.AppUserDetails;
import com.michael.budgetTracker.security.service.TokenService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public AuthResponse authenticate(@RequestBody AuthRequest authRequest){
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password())
            );

            LOG.info("Token requested for user " + authentication.getName());
            AppUserDetails user = (AppUserDetails) userDetailsService.loadUserByUsername(authentication.getName());
            LOG.info("Token granted");

            return new AuthResponse(tokenService.generateToken(user));
        }catch(BadCredentialsException ex){
            throw new BadCredentialsException("Email or password provided are incorrect");
        }

    }
}
