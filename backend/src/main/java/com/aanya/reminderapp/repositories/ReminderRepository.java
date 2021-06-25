package com.aanya.reminderapp.repositories;

import com.aanya.reminderapp.models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReminderRepository extends JpaRepository<Reminder, Integer> {
}
