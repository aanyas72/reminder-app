package com.aanya.reminderapp.controllers;

import com.aanya.reminderapp.models.User;
import com.aanya.reminderapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/all")
    public List<String> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(u -> u.getUsername())
                .collect(Collectors.toList());
    }

    @PostMapping(path = "/add")
    public User createUser(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.saveAndFlush(user);
    }

    @Transactional
    @RequestMapping(path = "/delete/{username}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String username) {
        userRepository.deleteUserByUsername(username);
    }
}
