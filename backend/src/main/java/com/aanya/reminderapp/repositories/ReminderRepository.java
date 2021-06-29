package com.aanya.reminderapp.repositories;

import com.aanya.reminderapp.models.Reminder;
import com.aanya.reminderapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReminderRepository extends JpaRepository<Reminder, Integer> {
    List<Reminder> getRemindersByUser(User user);
}
