import axios from "axios";

const SIGN_UP_URL = "http://localhost:8080/users/add";

class SignUpService {
  createLogin(username, password) {
    return axios.post(SIGN_UP_URL, {
      username: username,
      password: password,
    });
  }
}

export default new SignUpService();
