package com.aanya.reminderapp.controller;

import com.aanya.reminderapp.controller.model.Classs;
import com.aanya.reminderapp.controller.model.Recipient;
import com.aanya.reminderapp.controller.model.Reminder;
import com.aanya.reminderapp.controller.model.User;
import com.aanya.reminderapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    //users

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

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    //recipients

    @GetMapping(path = "/recipients", params = "alexaId")
    public List<String> getUsersByAlexaId(@RequestParam String alexaId) {
        return userService.getUsersByAlexaId(alexaId);
    }

    @GetMapping(path = "/recipients", params = "id")
    public String getAlexaIdByUserId(@RequestParam Integer id) {
        return userService.getRecipientAlexaIdById(id);
    }

    @GetMapping(path = "/{userId}/recipients")
    public Map<Integer, String> getRecipientsByUserId(@PathVariable Integer userId) {
        return userService.getRecipientsByUserId(userId);
    }

    //reminders

    @GetMapping(path = "/recipients/reminders", params = "alexaId")
    public Object[] getRemindersByAlexaId(@RequestParam String alexaId) {
        return userService.getRemindersByAlexaId(alexaId);
    }

    @GetMapping(path = "/recipients/reminders", params = {"alexaId", "id"})
    public Map<Integer, String> getRemindersByAlexaIdAndUserId(@RequestParam String alexaId, @RequestParam Integer id) {
        return userService.getRemindersByAlexaIdAndUserId(alexaId, id);
    }

    @GetMapping(path = "/classes/reminders", params = {"alexaId", "classId"})
    public Map<Integer, String> getRemindersByAlexaIdAndClassId(@RequestParam String alexaId, @RequestParam Integer classId) {
        return userService.getRemindersByAlexaIdAndClassId(alexaId, classId);
    }

    @GetMapping(path = "/classes/{classId}reminders")
    public Map<Integer, String> getRemindersByClassId(@PathVariable Integer classId) {
        return userService.getRemindersByClassId(classId);
    }

    @RequestMapping(path = "/reminders", params = "reminderId", method = RequestMethod.DELETE)
    public void deleteReminder(@RequestParam Integer reminderId) {
        userService.deleteReminder(reminderId);
    }

    //parent

    @PostMapping(path = "/{id}/reminders")
    public void createParentReminder(@PathVariable Integer id, @RequestBody Reminder reminder) {
        userService.addParentReminder(id, reminder);
    }

    @PostMapping(path = "/{id}/recipients")
    public void createParentRecipient(@PathVariable Integer id, @RequestBody Recipient recipient) {
        userService.addParentRecipient(id, recipient);
    }

    //classes

    @PostMapping(path = "/classes")
    public void createClass(@RequestBody Classs classs) {
        userService.createClass(classs);
    }

    @GetMapping(path = "/classes", params = "id")
    public Map<Integer, String> getClassesByUser(@RequestParam Integer id) {
        return userService.getClassesByUser(id);
    }

    @RequestMapping(path = "/classes", params = "classId", method = RequestMethod.DELETE)
    public void deleteClass(@RequestParam Integer classId) {
        userService.deleteClass(classId);
    }

    @PostMapping(path = "/classes/recipients")
    public void createClassRecipient(@RequestBody Recipient recipient) {
        userService.createTeacherRecipient(recipient);
    }

    @GetMapping(path = "/classes/{classId}/recipients")
    public Map<Integer, String> getRecipientsByClass(@PathVariable Integer classId) {
        return userService.getRecipientsByClassId(classId);
    }

    @PostMapping(path = "/classes/reminders")
    public void addTeacherReminder(@RequestBody Reminder reminder) {
        userService.addTeacherReminder(reminder);
    }

    @GetMapping(path = "/recipients/classes", params = "alexaId")
    public List<String> getClassesByAlexaId(@RequestParam String alexaId) {
        return userService.getClassesByAlexaId(alexaId);
    }

}
