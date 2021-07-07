import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import AuthenticatedRoute from "./AuthenticatedRoute";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
