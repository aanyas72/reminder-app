package com.aanya.reminderapp.controller.model;

import java.util.List;

public class User {

    private Integer id;

    private String username;

    private String password;

    private String accountType;

    private List<Recipient> recipients;

    private List<Reminder> reminders;

    private List<Classs> classses;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public List<Recipient> getRecipients() {
        return recipients;
    }

    public void setRecipients(List<Recipient> recipients) {
        this.recipients = recipients;
    }

    public List<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(List<Reminder> reminders) {
        this.reminders = reminders;
    }

    public List<Classs> getClassses() {
        return classses;
    }

    public void setClassses(List<Classs> classses) {
        this.classses = classses;
    }
}

