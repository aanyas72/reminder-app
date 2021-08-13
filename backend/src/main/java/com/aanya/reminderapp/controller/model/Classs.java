package com.aanya.reminderapp.controller.model;

import java.util.List;

public class Classs {

    private int classsId;

    private String classsName;

    private User user;

    private List<Recipient> recipients;

    private List<Reminder> reminders;

    public int getClasssId() {
        return classsId;
    }

    public void setClasssId(int classsId) {
        this.classsId = classsId;
    }

    public String getClasssName() {
        return classsName;
    }

    public void setClasssName(String classsName) {
        this.classsName = classsName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
}
