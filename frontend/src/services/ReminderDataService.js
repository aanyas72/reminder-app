import axios from "axios";
import AuthenticationService from "./AuthenticationService";

class ReminderDataService {
  retrieveAllReminders() {
    const USER = AuthenticationService.getLoggedInUserName();
    const REMINDER_API_URL = "http://localhost:8080/reminders/";
    return axios.get(`${REMINDER_API_URL}${USER}`);
  }
}

export default new ReminderDataService();
