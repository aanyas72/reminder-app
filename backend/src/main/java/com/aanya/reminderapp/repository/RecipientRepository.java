package com.aanya.reminderapp.repository;

import com.aanya.reminderapp.repository.entity.JpaRecipientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipientRepository extends JpaRepository<JpaRecipientEntity, Integer> {
    List<JpaRecipientEntity> getJpaRecipientEntitiesByJpaUserEntity_Id(Integer id);
    List<JpaRecipientEntity> getJpaRecipientEntitiesByJpaClasssEntity_ClasssId(Integer classsId);
}
