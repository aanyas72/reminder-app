package com.aanya.reminderapp.repository;

import com.aanya.reminderapp.repository.entity.JpaClasssEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClasssRepository extends JpaRepository<JpaClasssEntity, Integer> {
    List<JpaClasssEntity> getJpaClasssEntitiesByJpaUserEntity_Id(Integer id);

    @Query(value = "SELECT r.jpa_classs_entity_classs_id FROM RECIPIENTS r WHERE r.jpa_classs_entity_classs_id IS NOT NULL AND r.alexa_id=?1", nativeQuery = true)
    List<Integer> getJpaClasssEntities_ClassIdByJpaRecipientEntity_AlexaId(String id);
}
