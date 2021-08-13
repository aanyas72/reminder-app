package com.aanya.reminderapp.repository.entity;

import javax.persistence.*;

@Entity(name = "reminders")
public class JpaReminderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reminder_id")
    private Integer reminderId;

    @Column(name = "reminder_text")
    private String reminderText;

    @ManyToOne
    private JpaUserEntity jpaUserEntity;

    @ManyToOne
    private JpaRecipientEntity jpaRecipientEntity;

    @ManyToOne
    private JpaClasssEntity jpaClasssEntity;

    public Integer getReminderId() {
        return reminderId;
    }

    public void setReminderId(Integer reminderId) {
        this.reminderId = reminderId;
    }

    public String getReminderText() {
        return reminderText;
    }

    public void setReminderText(String reminderText) {
        this.reminderText = reminderText;
    }

    public JpaUserEntity getJpaUserEntity() {
        return jpaUserEntity;
    }

    public void setJpaUserEntity(JpaUserEntity jpaUserEntity) {
        this.jpaUserEntity = jpaUserEntity;
    }

    public JpaRecipientEntity getJpaRecipientEntity() {
        return jpaRecipientEntity;
    }

    public void setJpaRecipientEntity(JpaRecipientEntity jpaRecipientEntity) {
        this.jpaRecipientEntity = jpaRecipientEntity;
    }

    public JpaClasssEntity getJpaClasssEntity() {
        return jpaClasssEntity;
    }

    public void setJpaClasssEntity(JpaClasssEntity jpaClasssEntity) {
        this.jpaClasssEntity = jpaClasssEntity;
    }
}
