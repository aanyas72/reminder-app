package com.aanya.reminderapp.controller.model;

import java.util.List;

public class Recipient {

    private Integer recipientId;

    private String alexaId;

    private String recipientAlexaName;

    private User user;

    private List<Reminder> reminders;

    private Classs classs;

    public Integer getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(Integer recipientId) {
        this.recipientId = recipientId;
    }

    public String getAlexaId() {
        return alexaId;
    }

    public void setAlexaId(String alexaId) {
        this.alexaId = alexaId;
    }

    public String getRecipientAlexaName() {
        return recipientAlexaName;
    }

    public void setRecipientAlexaName(String recipientAlexaName) {
        this.recipientAlexaName = recipientAlexaName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Reminder> getReminders() {
        return reminders;
    }

    public void setReminders(List<Reminder> reminders) {
        this.reminders = reminders;
    }

    public Classs getClasss() {
        return classs;
    }

    public void setClasss(Classs classs) {
        this.classs = classs;
    }
}
