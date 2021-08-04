package com.aanya.reminderapp.repository;

import com.aanya.reminderapp.repository.entity.JpaUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<JpaUserEntity, Integer> {
    List<JpaUserEntity> getJpaUserEntitiesByJpaRecipientEntities_AlexaId(String alexaId);
    JpaUserEntity findJpaUserEntityByUsername(String username);
}
