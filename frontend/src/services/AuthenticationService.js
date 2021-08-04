import axios from "axios";

const API_URL = "http://localhost:8080";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";
const ID = "loggedInUserId";
const ACCOUNT_TYPE = "loggedInUserAccountType";

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
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  getUserDetails(username) {
    return axios.get(`${API_URL}/users`, {
      params: {
        username: username,
      },
    });
  }

  registerUserDetails(res) {
    sessionStorage.setItem(ID, res.data.id);
    sessionStorage.setItem(ACCOUNT_TYPE, res.data.accountType);
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return "";
    return user;
  }

  getLoggedInUserId() {
    let id = sessionStorage.getItem(ID);
    if (id !== null) {
      return id;
    }
  }

  getLoggedInUserAccountType() {
    let accountType = sessionStorage.getItem(ACCOUNT_TYPE);
    if (accountType === null) {
      return "";
    }
    return accountType;
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
