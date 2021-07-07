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

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthenticationService.executeBasicAuthenticationService(username, password)
      .then(() => {
        setShowSuccessMessage(true);
        AuthenticationService.registerSuccessfulLogin(username, password);
        history.push(`/dashboard`);
      })
      .catch(() => {
        setLoginFailed(true);
      });
  };

  return (
    <>
      <div className="sign-in">Sign in</div>
      {loginFailed && (
        <div className="error box">Incorrect username or password. Try again.</div>
      )}
      {showSuccessMessage && (
        <div className="success box">Success! Logging in.</div>
      )}

      <form className="login box" onSubmit={handleSubmit}>
        <div className="label">Email address</div>
        <input
          className="input"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="email"
        ></input>
        <div className="label">Password</div>
        <input
          type="password"
          className="input"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        ></input>
        <button className="btn">
          Sign in
        </button>
      </form>

      <Link to="/sign-up" className="link">
        New? Sign up for an account
      </Link>
    </>
  );
};

export default Login;
