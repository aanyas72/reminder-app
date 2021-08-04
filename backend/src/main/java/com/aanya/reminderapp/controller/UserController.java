package com.aanya.reminderapp.controller;

import com.aanya.reminderapp.controller.model.Recipient;
import com.aanya.reminderapp.controller.model.Reminder;
import com.aanya.reminderapp.controller.model.User;
import com.aanya.reminderapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(params = "username")
    public Map<Object, Object> getUserDetails(@RequestParam String username) {
        return userService.getUserDetails(username);
    }

    @GetMapping
    public Map<Integer, String> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @RequestMapping(path = "/{id}",method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    @GetMapping(path = "/recipients", params = "alexaId")
    public List<String> getUsersByAlexaId(@RequestParam String alexaId) {
        return userService.getUsersByAlexaId(alexaId);
    }

    @GetMapping(path = "/recipients", params = "id")
    public String getAlexaIdById(@RequestParam Integer id) {
        return userService.getRecipientAlexaIdById(id);
    }

    @PostMapping(path = "/{id}/recipients")
    public void createRecipient(@PathVariable Integer id, @RequestBody Recipient recipient) {
        userService.addRecipient(id, recipient);
    }

    @GetMapping(path = "/{userId}/recipients")
    public Map<Integer, String> getRecipientsByUserId(@PathVariable Integer userId) {
        return userService.getRecipientsByUserId(userId);
    }

    @GetMapping(path = "/recipients/reminders", params = "alexaId")
    public Map<Integer, String> getRemindersByAlexaId(@RequestParam String alexaId) {
        return userService.getRemindersByAlexaId(alexaId);
    }

    @GetMapping(path = "/recipients/reminders", params = {"alexaId", "id"})
    public Map<Integer, String> getRemindersByAlexaIdAndUserId(@RequestParam String alexaId, @RequestParam Integer id) {
        return userService.getRemindersByAlexaIdAndUserId(alexaId, id);
    }

    @PostMapping(path = "/{id}/reminders")
    public void createReminder(@PathVariable Integer id, @RequestBody Reminder reminder) {
        userService.addReminder(id, reminder);
    }

    @RequestMapping(path = "/reminders", params = "reminderId", method = RequestMethod.DELETE)
    public void deleteReminder(@RequestParam Integer reminderId) {
        userService.deleteReminder(reminderId);
    }
}
