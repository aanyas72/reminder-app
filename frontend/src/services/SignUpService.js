import axios from "axios";

const SIGN_UP_URL = "http://localhost:8080/users";

class SignUpService {
  createLogin(username, password, accountType) {
    return axios.post(SIGN_UP_URL, {
      username: username,
      password: password,
      accountType: accountType
    });
  }
}

export default new SignUpService();
