package com.aanya.reminderapp.controllers;

import com.aanya.reminderapp.models.User;
import com.aanya.reminderapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping(path = "/get/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userRepository.findById(id).get();
    }

    @PostMapping(path = "/add")
    public @ResponseBody User createUser(@RequestBody User user) {
        return userRepository.saveAndFlush(user);
    }

    @RequestMapping(path = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }
}
