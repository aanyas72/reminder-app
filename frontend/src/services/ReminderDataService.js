import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const REMINDER_API_URL = "http://localhost:8080/users";

class ReminderDataService {
  deleteReminder(reminderId) {
    const DELETE_REMINDER_URL = `${REMINDER_API_URL}/reminders`;

    return axios.delete(DELETE_REMINDER_URL, {
      params: {
        reminderId: parseInt(reminderId),
      },
    });
  }

  retrieveAllReminders(alexaId) {
    const RETRIEVE_REMINDERS_URL = `${REMINDER_API_URL}/recipients/reminders`;
    const userId = AuthenticationService.getLoggedInUserId();

    return axios.get(RETRIEVE_REMINDERS_URL, {
      params: { alexaId: alexaId, id: userId },
    });
  }

  addNewReminders(sendTo, reminderText) {
    const userId = AuthenticationService.getLoggedInUserId();
    const ADD_REMINDER_API_URL = `${REMINDER_API_URL}/${userId}/reminders`;
    let dataToSend = [];

    for (let [key, value] of sendTo) {
      if (value === true) {
        dataToSend.push(
          axios.post(ADD_REMINDER_API_URL, {
            reminderText: reminderText,
            recipient: {
              recipientId: parseInt(key),
            },
          })
        );
      }
    }

    return axios.all(dataToSend);
  }
}

export default new ReminderDataService();
