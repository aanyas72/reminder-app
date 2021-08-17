import axios from "axios";

const API_URL = "http://localhost:8080";

const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";
const ID = "loggedInUserId";
export const ACCOUNT_TYPE = "accountType";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    localStorage.setItem("user", this.createBasicAuthToken(username, password));
  }

  getUserDetails(username) {
    return axios.get(`${API_URL}/users`, {
      params: {
        username: username,
      },
    });
  }

  registerUserDetails(res) {
    localStorage.setItem(ID, res.data.id);
    localStorage.setItem(ACCOUNT_TYPE, res.data.accountType);
  }

  logout() {
    localStorage.clear();
  }

  isUserLoggedIn() {
    const user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user) {
      this.setupAxiosInterceptors(localStorage.getItem("user"));
      return true;
    }
  }

  getLoggedInUserName() {
    return localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  getLoggedInUserId() {
    return localStorage.getItem(ID);
  }

  getLoggedInUserAccountType() {
    return localStorage.getItem(ACCOUNT_TYPE);
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
