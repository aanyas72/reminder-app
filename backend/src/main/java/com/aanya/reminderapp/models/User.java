package com.aanya.reminderapp.models;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String email;

    private String password;

    @OneToMany(mappedBy = "user")
    private Set<Reminder> reminders;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer id) {
        this.user_id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

