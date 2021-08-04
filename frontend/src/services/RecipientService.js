import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const REMINDER_API_URL = "http://localhost:8080/users";

class RecipientService {
  getRecipientsByUser() {
    const id = AuthenticationService.getLoggedInUserId();
    if (id) {
      return axios.get(`${REMINDER_API_URL}/${id}/recipients`, {
      });
    }
  }

  getAlexaIdById(id) {
    return axios.get(`${REMINDER_API_URL}/recipients`, {
      params: { id: id },
    });
  }
}

export default new RecipientService();
