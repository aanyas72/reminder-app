import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import "../styles/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import TeacherDashboard from "./TeacherDashboard";
import Logout from "./Logout";
import ParentDashboard from "./ParentDashboard";

const App = () => {
  const [accType, setAccType] = useState();

  return (
    <Router>
      <Route
        exact
        path="/"
        component={
          accType === "teacher"
            ? TeacherDashboard
            : ParentDashboard
        }
      />
      <Route
        path="/login"
        render={(props) => (
          <>
            <Login setAccType={setAccType} />
          </>
        )}
      />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/logout" component={Logout} />
    </Router>
  );
};

export default App;
