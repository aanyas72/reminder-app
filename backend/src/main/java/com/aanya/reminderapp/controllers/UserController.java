package com.aanya.reminderapp.controllers;

import com.aanya.reminderapp.models.User;
import com.aanya.reminderapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

//    @GetMapping(path = "/get/{username}")
//    public User getUser(@PathVariable String username) {
//        return userRepository.findUserByUsername(username);
//    }

    @PostMapping(path = "/add")
    public User createUser(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.saveAndFlush(user);
    }

//    @RequestMapping(path = "/delete/{username}", method = RequestMethod.DELETE)
//    public void delete(@PathVariable String username) {
//        userRepository.deleteUserByUsername(username);
//    }
}
