import { BrowserRouter as Router, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Logout from "./Logout";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/logout" component={Logout} />
    </Router>
  );
}

export default App;
