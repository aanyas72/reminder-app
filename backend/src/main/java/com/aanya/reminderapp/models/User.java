package com.aanya.reminderapp.models;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "users")
public class User {
    @Id
    private String username;

    private String password;

    @OneToMany(mappedBy = "user")
    private Set<Reminder> reminders;

    public String getUsername() {
        return username;
    }

    public void setUsername(String email) {
        this.username = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(Set<Reminder> reminders) {
        this.reminders = reminders;
    }
}

