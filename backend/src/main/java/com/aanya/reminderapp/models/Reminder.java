package com.aanya.reminderapp.models;

import javax.persistence.*;

@Entity(name = "reminders")
public class Reminder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reminder_id;

    private String reminder;

    @ManyToOne
//    @JoinTable(
//            name = "user_reminders",
//            joinColumns = @JoinColumn(name = "reminder_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
    private User user;

    public Integer getReminder_id() {
        return reminder_id;
    }

    public void setReminder_id(Integer id) {
        this.reminder_id = id;
    }

    public String getReminder() {
        return reminder;
    }

    public void setReminder(String reminder) {
        this.reminder = reminder;
    }
}
