package com.aanya.reminderapp.controllers;

import com.aanya.reminderapp.models.Reminder;
import com.aanya.reminderapp.repositories.ReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/reminders")
public class ReminderController {
    @Autowired
    private ReminderRepository reminderRepository;

    @GetMapping(path = "/get/{id}")
    public Reminder getReminderById(@PathVariable Integer id) {
        return reminderRepository.findById(id).get();
    }

    @GetMapping(path = "/{username}")
    public List<String> getRemindersByUsername(@PathVariable String username) {
        return reminderRepository.getRemindersByUser_Username(username)
                .stream()
                .map(r -> r.getReminder())
                .collect(Collectors.toList());
    }

    @PostMapping(path = "/add")
    public Reminder createReminder(@RequestBody Reminder reminder) {
        return reminderRepository.saveAndFlush(reminder);
    }

    @RequestMapping(path = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteReminderById(@PathVariable Integer id) {
        reminderRepository.deleteById(id);
    }

    @RequestMapping(path = "/delete/{username}", method = RequestMethod.DELETE)
    public void deleteReminderByUserAndReminder(@PathVariable String username, @RequestBody String reminder) {
        reminderRepository.deleteReminderByUserUsernameAndReminder(username, reminder);
    }
}
