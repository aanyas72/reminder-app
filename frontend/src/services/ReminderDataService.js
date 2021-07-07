import axios from "axios";

const USER = "a";
const REMINDER_API_URL = "http://localhost:8080/reminders";

class ReminderDataService {
  retrieveAllReminders(name) {
    return axios.get(`${REMINDER_API_URL}/${USER}`); //get user from context api
  }
}

export default new ReminderDataService();
