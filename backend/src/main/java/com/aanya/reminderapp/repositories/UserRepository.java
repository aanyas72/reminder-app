package com.aanya.reminderapp.repositories;

import com.aanya.reminderapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
