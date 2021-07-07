package com.aanya.reminderapp.repositories;

import com.aanya.reminderapp.models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReminderRepository extends JpaRepository<Reminder, Integer> {
    List<Reminder> getRemindersByUser_Username(String username);
    void deleteReminderByUserUsernameAndReminder(String user_username, String reminder);
}
