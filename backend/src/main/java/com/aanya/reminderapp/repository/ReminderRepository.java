package com.aanya.reminderapp.repository;

import com.aanya.reminderapp.repository.entity.JpaReminderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReminderRepository extends JpaRepository<JpaReminderEntity, Integer> {
    List<JpaReminderEntity> getJpaReminderEntitiesByJpaRecipientEntity_AlexaId(String alexaId);
    List<JpaReminderEntity> getJpaReminderEntitiesByJpaRecipientEntity_AlexaIdAndJpaUserEntity_Id(String jpaRecipientEntity_alexaId, Integer jpaUserEntity_id);
    List<JpaReminderEntity> getJpaReminderEntitiesByJpaRecipientEntity_AlexaIdAndJpaClasssEntity_ClasssId(String jpaRecipientEntity_alexaId, Integer jpaClasssEntity_classsId);
}
