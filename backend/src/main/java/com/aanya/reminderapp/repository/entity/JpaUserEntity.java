package com.aanya.reminderapp.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name = "users")
public class JpaUserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String password;

    @Column(name = "account_type")
    private String accountType;

    @OneToMany(mappedBy = "jpaUserEntity")
    @JsonIgnore
    private List<JpaRecipientEntity> jpaRecipientEntities;

    @OneToMany(mappedBy = "jpaUserEntity")
    @JsonIgnore
    private List<JpaReminderEntity> jpaReminderEntities;

//    @OneToMany(mappedBy = "user", orphanRemoval = true)
//    @JsonIgnore
//    private List<Classs> classses;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
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

