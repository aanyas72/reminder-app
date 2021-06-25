import Login from "./Login";
import SignUp from "./SignUp";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/home" component={Dashboard}/>
    </Router>
  );
}

export default App;
