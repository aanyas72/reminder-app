import "../styles/LoginAndSignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUpService from "../services/SignUpService";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [accountType, setAccountType] = useState();
  const [createLoginFailed, setCreateLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await SignUpService.createLogin(username, password, accountType);
      setShowSuccessMessage(true);
    } catch {
      setCreateLoginFailed(true);
      setUsername("");
      setPassword("");
      setRetypedPassword("");
    }
  };

  return (
    <>
      <div className="sign-in">Sign up for an account</div>

      {createLoginFailed && (
        <div className="error box">
          Error creating new user. Reload and try again.
        </div>
      )}
      {showSuccessMessage && (
        <div className="success box">
          Your account has been successfully created! Go back to the
          <Link to="/login" className="login-link">
            login
          </Link>
          page to sign in and get started!
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

        <div className="label">Enter password</div>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
        ></input>
        <div className="label">Re-enter password</div>
        <input
          type="password"
          className="input"
          value={retypedPassword}
          onChange={(event) => setRetypedPassword(event.target.value)}
          autoComplete="new-password"
        ></input>

        <div className="radio-label">I am a...</div>
        <div className="radio">
          <input
            className="radio-input"
            type="radio"
            value="parent"
            onChange={(event) => setAccountType(event.target.value)}
          />
          Parent
          <div className="middle"></div>
          <input
            className="radio-input"
            type="radio"
            value="teacher"
            onChange={(event) => setAccountType(event.target.value)}
          />
          Teacher
        </div>

        <button
          className="btn"
          type="submit"
          disabled={
            username.length > 0 &&
            accountType != null &&
            password.length > 0 &&
            retypedPassword.length > 0 &&
            password === retypedPassword
              ? false
              : true
          }
        >
          Create account
        </button>
      </form>

      <Link to="/login" className="link">
        Already have an account? Sign in
      </Link>
    </>
  );
};

export default SignUp;
