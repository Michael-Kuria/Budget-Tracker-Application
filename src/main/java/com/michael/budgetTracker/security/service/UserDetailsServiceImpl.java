package com.michael.budgetTracker.security.service;

import com.michael.budgetTracker.model.User;
import com.michael.budgetTracker.security.model.AppUserDetails;
import com.michael.budgetTracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService userService;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User with email %s was not found",username)));

        return mapUserToAppUseDetails(user);
    }

    private AppUserDetails mapUserToAppUseDetails(User user){
        AppUserDetails appUserDetails = new AppUserDetails();

        appUserDetails.setId(user.getId());
        appUserDetails.setName(user.getName());
        appUserDetails.setEmail(user.getEmail());
        appUserDetails.setPassword(user.getPassword());
        appUserDetails.setAuthorities(user.getRole().getAuthorities());

        return appUserDetails;
    }
}
