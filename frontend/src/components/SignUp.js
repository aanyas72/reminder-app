import "../styles/LoginAndSignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [createLoginFailed, setCreateLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
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
        <div className="label">Email Address</div>
        <input
          className="input"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="email"
        ></input>
        <div className="label">Enter password</div>
        <input
          type="password"
          className="input"
          name="password"
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
        <button
          className="btn"
          type="submit"
          disabled={
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
