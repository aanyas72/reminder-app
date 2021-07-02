package com.aanya.reminderapp.controllers;

import com.aanya.reminderapp.models.Reminder;
import com.aanya.reminderapp.models.User;
import com.aanya.reminderapp.repositories.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/reminders")
public class ReminderController {
    @Autowired
    private ReminderRepository reminderRepository;

    @GetMapping(path = "/all")
    public List<Reminder> getAllReminders() {
        return reminderRepository.findAll();
    }

    @GetMapping(path = "/get/{id}")
    public Reminder getReminderById(@PathVariable Integer id) {
        return reminderRepository.findById(id).get();
    }

//    @GetMapping(path = "/user")
//    public List<Reminder> getAllRemindersByUser(@RequestBody User user) {
//        return reminderRepository.getRemindersByUser(user);
//    }

    @PostMapping(path = "/add")
    public Reminder createReminder(@RequestBody Reminder reminder) {
        return reminderRepository.saveAndFlush(reminder);
    }

    @RequestMapping(path = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteReminderById(@PathVariable Integer id) {
        reminderRepository.deleteById(id);
    }
}
