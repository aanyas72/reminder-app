import axios from "axios";

import AuthenticationService from "./AuthenticationService";

const REMINDER_API_URL = "http://localhost:8080/users";

class ClassService {
  createNewClass(className) {
    const userId = AuthenticationService.getLoggedInUserId();
    const ADD_CLASS_API_URL = REMINDER_API_URL + "/classes";
    return axios.post(ADD_CLASS_API_URL, {
      classsName: className,
      user: {
        id: userId,
      },
    });
  }

  getAllClasses() {
    const userId = AuthenticationService.getLoggedInUserId();
    const GET_CLASSES_API_URL = REMINDER_API_URL + "/classes";
    if (userId) {
      return axios.get(GET_CLASSES_API_URL, {
        params: { id: userId },
      });
    }
  }

  deleteClass(classId) {
    const DELETE_URL = REMINDER_API_URL + "/classes";
    return axios.delete(DELETE_URL, {
      params: {
        classId: classId,
      },
    });
  }
}

export default new ClassService();
