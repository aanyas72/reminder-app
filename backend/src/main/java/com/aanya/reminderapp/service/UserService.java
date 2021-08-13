package com.aanya.reminderapp.service;

import com.aanya.reminderapp.controller.model.Classs;
import com.aanya.reminderapp.controller.model.Recipient;
import com.aanya.reminderapp.controller.model.Reminder;
import com.aanya.reminderapp.controller.model.User;
import com.aanya.reminderapp.repository.ClasssRepository;
import com.aanya.reminderapp.repository.RecipientRepository;
import com.aanya.reminderapp.repository.ReminderRepository;
import com.aanya.reminderapp.repository.UserRepository;
import com.aanya.reminderapp.repository.entity.JpaClasssEntity;
import com.aanya.reminderapp.repository.entity.JpaRecipientEntity;
import com.aanya.reminderapp.repository.entity.JpaReminderEntity;
import com.aanya.reminderapp.repository.entity.JpaUserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipientRepository recipientRepository;

    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private ClasssRepository classsRepository;

    public Map<Object, Object> getUserDetails(String username) {

        Map<Object, Object> userDetails = new HashMap<>();
        userDetails.put("id", userRepository.findJpaUserEntityByUsername(username).getId());
        userDetails.put("accountType", userRepository.findJpaUserEntityByUsername(username).getAccountType());
        return userDetails;
    }

    public Map<Integer, String> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .collect(Collectors.toMap(JpaUserEntity::getId, JpaUserEntity::getUsername));
    }

    public void addUser(User user) {

        JpaUserEntity jpaUserEntity = new JpaUserEntity();
        jpaUserEntity.setUsername(user.getUsername());
        jpaUserEntity.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        jpaUserEntity.setAccountType(user.getAccountType());

        userRepository.saveAndFlush(jpaUserEntity);
    }

    public void addParentRecipient(Integer id, Recipient recipient) {

        JpaRecipientEntity jpaRecipientEntity = new JpaRecipientEntity();
        jpaRecipientEntity.setRecipientId(recipient.getRecipientId());
        jpaRecipientEntity.setAlexaId(recipient.getAlexaId());
        jpaRecipientEntity.setRecipientAlexaName(recipient.getRecipientAlexaName());
        jpaRecipientEntity.setJpaUserEntity(userRepository.getById(id));

        recipientRepository.saveAndFlush(jpaRecipientEntity);
    }

    public Map<Integer, String> getRemindersByAlexaId(String alexaId) {
        //get all reminders by alexa id, no matter the user
        List<JpaReminderEntity> jpaReminderEntities = reminderRepository.getJpaReminderEntitiesByJpaRecipientEntity_AlexaId(alexaId);

        return jpaReminderEntities
                .stream()
                .collect(Collectors.toMap(JpaReminderEntity::getReminderId, JpaReminderEntity::getReminderText));
    }

    public Map<Integer, String> getRemindersByAlexaIdAndUserId(String alexaId, Integer id) {
        //get reminders specific to user
        List<JpaReminderEntity> jpaReminderEntities = reminderRepository.getJpaReminderEntitiesByJpaRecipientEntity_AlexaIdAndJpaUserEntity_Id(alexaId, id);

        return jpaReminderEntities
                .stream()
                .collect(Collectors.toMap(JpaReminderEntity::getReminderId, JpaReminderEntity::getReminderText));
    }

    public Map<Integer, String> getRemindersByAlexaIdAndClassId(String alexaId, Integer classId) {
        //get reminders specific to class
        return reminderRepository.getJpaReminderEntitiesByJpaRecipientEntity_AlexaIdAndJpaClasssEntity_ClasssId(alexaId, classId)
                .stream()
                .collect(Collectors.toMap(JpaReminderEntity::getReminderId, JpaReminderEntity::getReminderText));
    }

    public List<String> getClassesByAlexaId(String alexaId) {
        return classsRepository.getJpaClasssEntities_ClassIdByJpaRecipientEntity_AlexaId(alexaId)
                .stream()
                .map(num -> classsRepository.getById(num).getClasssName())
                .collect(Collectors.toList());
    }

    public List<String> getUsersByAlexaId(String alexaId) {
        return userRepository.getJpaUserEntitiesByJpaRecipientEntities_AlexaId(alexaId)
                .stream()
                .map(JpaUserEntity::getUsername)
                .collect(Collectors.toList());
    }

    public String getRecipientAlexaIdById(Integer id) {
        return recipientRepository.getById(id).getAlexaId();
    }

    public Map<Integer, String> getRecipientsByUserId(Integer userId) {
        return recipientRepository.getJpaRecipientEntitiesByJpaUserEntity_Id(userId)
                .stream()
                .collect(Collectors.toMap(JpaRecipientEntity::getRecipientId, JpaRecipientEntity::getRecipientAlexaName));
    }

    public void addParentReminder(Integer id, Reminder reminder) {

        JpaReminderEntity jpaReminderEntity = new JpaReminderEntity();
        jpaReminderEntity.setReminderId(reminder.getReminderId());
        jpaReminderEntity.setReminderText(reminder.getReminderText());
        jpaReminderEntity.setJpaUserEntity(userRepository.getById(id));
        jpaReminderEntity.setJpaRecipientEntity(recipientRepository.getById(reminder.getRecipient().getRecipientId()));

        reminderRepository.saveAndFlush(jpaReminderEntity);
    }

    public void addTeacherReminder(Reminder reminder) {

        JpaReminderEntity jpaReminderEntity = new JpaReminderEntity();
        jpaReminderEntity.setReminderId(reminder.getReminderId());
        jpaReminderEntity.setReminderText(reminder.getReminderText());
        jpaReminderEntity.setJpaRecipientEntity(recipientRepository.getById(reminder.getRecipient().getRecipientId()));
        jpaReminderEntity.setJpaClasssEntity(classsRepository.getById(reminder.getClasss().getClasssId()));

        reminderRepository.saveAndFlush(jpaReminderEntity);
    }

    public void deleteReminder(Integer reminderId) {
        reminderRepository.deleteById(reminderId);
    }

    @Transactional
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    public void createClass(Classs classs) {

        JpaClasssEntity jpaClasssEntity = new JpaClasssEntity();
        jpaClasssEntity.setClasssId(classs.getClasssId());
        jpaClasssEntity.setClasssName(classs.getClasssName());
        jpaClasssEntity.setJpaUserEntity(userRepository.getById(classs.getUser().getId()));

        classsRepository.saveAndFlush(jpaClasssEntity);
    }

    public Map<Integer, String> getClassesByUser(Integer id) {
        return classsRepository.getJpaClasssEntitiesByJpaUserEntity_Id(id)
                .stream()
                .collect(Collectors.toMap(JpaClasssEntity::getClasssId, JpaClasssEntity::getClasssName));

    }

    public void deleteClass(Integer id) {
        classsRepository.deleteById(id);
    }

    public void createTeacherRecipient(Recipient recipient) {
        JpaRecipientEntity jpaRecipientEntity = new JpaRecipientEntity();
        jpaRecipientEntity.setRecipientId(recipient.getRecipientId());
        jpaRecipientEntity.setAlexaId(recipientRepository.getById(recipient.getRecipientId()).getAlexaId());
        jpaRecipientEntity.setRecipientAlexaName(recipient.getRecipientAlexaName());
        jpaRecipientEntity.setJpaClasssEntity(classsRepository.getById(recipient.getClasss().getClasssId()));

        recipientRepository.saveAndFlush(jpaRecipientEntity);
    }

    public Map<Integer, String> getRecipientsByClassId(Integer classId) {
        return recipientRepository.getJpaRecipientEntitiesByJpaClasssEntity_ClasssId(classId)
                .stream()
                .collect(Collectors.toMap(JpaRecipientEntity::getRecipientId, JpaRecipientEntity::getRecipientAlexaName));
    }

}
