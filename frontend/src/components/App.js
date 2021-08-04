import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import TeacherDashboard from "./TeacherDashboard";
import Logout from "./Logout";
import AuthenticationService from "../services/AuthenticationService";
import ParentDashboard from "./ParentDashboard";

const App = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        component={
          AuthenticationService.getLoggedInUserAccountType() === "teacher"
            ? TeacherDashboard
            : ParentDashboard
        }
      />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/logout" component={Logout} />
    </Router>
  );
};

export default App;
