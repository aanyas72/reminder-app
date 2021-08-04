import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../styles/LoginAndSignUp.css";
import AuthenticationService from "../services/AuthenticationService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthenticationService.executeBasicAuthenticationService(
        username,
        password
      );
      setShowSuccessMessage(true);
      AuthenticationService.registerSuccessfulLogin(username, password);
      AuthenticationService.registerUserDetails(
        await AuthenticationService.getUserDetails(username)
      );
      history.push(`/`);
    } catch {
      setLoginFailed(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="sign-in">Sign in</div>
      {loginFailed && (
        <div className="error box" onClick={() => setLoginFailed(false)}>
          Incorrect username or password. Try again.
        </div>
      )}
      {showSuccessMessage && (
        <div
          className="success box"
          onClick={() => setShowSuccessMessage(false)}
        >
          Success! Logging in.
        </div>
      )}

      <form className="login box" onSubmit={handleSubmit}>
        <div className="label">Username</div>
        <input
          className="input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
        ></input>
        <div className="label">Password</div>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        ></input>
        <button className="btn">Sign in</button>
      </form>

      <Link to="/sign-up" className="link">
        New? Sign up for an account
      </Link>
    </>
  );
};

export default Login;
