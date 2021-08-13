package com.aanya.reminderapp.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name = "classses")
public class JpaClasssEntity {

    @Id
    @Column(name = "classs_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer classsId;

    @Column(name = "classs_name")
    private String classsName;

    @ManyToOne
    private JpaUserEntity jpaUserEntity;

    @OneToMany(mappedBy = "jpaClasssEntity")
    @JsonIgnore
    private List<JpaRecipientEntity> jpaRecipientEntities;

    @OneToMany(mappedBy = "jpaClasssEntity")
    @JsonIgnore
    private List<JpaReminderEntity> jpaReminderEntities;

    public Integer getClasssId() {
        return classsId;
    }

    public void setClasssId(Integer classsId) {
        this.classsId = classsId;
    }

    public String getClasssName() {
        return classsName;
    }

    public void setClasssName(String classsName) {
        this.classsName = classsName;
    }

    public JpaUserEntity getJpaUserEntity() {
        return jpaUserEntity;
    }

    public void setJpaUserEntity(JpaUserEntity jpaUserEntity) {
        this.jpaUserEntity = jpaUserEntity;
    }

    public List<JpaRecipientEntity> getJpaRecipientEntities() {
        return jpaRecipientEntities;
    }

    public void setJpaRecipientEntities(List<JpaRecipientEntity> jpaRecipientEntities) {
        this.jpaRecipientEntities = jpaRecipientEntities;
    }

    public List<JpaReminderEntity> getJpaReminderEntities() {
        return jpaReminderEntities;
    }

    public void setJpaReminderEntities(List<JpaReminderEntity> jpaReminderEntities) {
        this.jpaReminderEntities = jpaReminderEntities;
    }
}
