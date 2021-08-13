package com.aanya.reminderapp.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name = "recipients")
public class JpaRecipientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipient_id")
    private Integer recipientId;

    @Column(name = "alexa_id")
    private String alexaId;

    @Column(name = "recipient_alexa_name")
    private String recipientAlexaName;

    @ManyToOne
    private JpaUserEntity jpaUserEntity;

    @OneToMany(mappedBy = "jpaRecipientEntity")
    @JsonIgnore
    private List<JpaReminderEntity> jpaReminderEntities;

    @ManyToOne
    private JpaClasssEntity jpaClasssEntity;

    public Integer getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(Integer id) {
        this.recipientId = id;
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

    public JpaUserEntity getJpaUserEntity() {
        return jpaUserEntity;
    }

    public void setJpaUserEntity(JpaUserEntity jpaUserEntity) {
        this.jpaUserEntity = jpaUserEntity;
    }

    public List<JpaReminderEntity> getJpaReminderEntities() {
        return jpaReminderEntities;
    }

    public void setJpaReminderEntities(List<JpaReminderEntity> jpaReminderEntities) {
        this.jpaReminderEntities = jpaReminderEntities;
    }

    public JpaClasssEntity getJpaClasssEntity() {
        return jpaClasssEntity;
    }

    public void setJpaClasssEntity(JpaClasssEntity jpaClasssEntity) {
        this.jpaClasssEntity = jpaClasssEntity;
    }
}
