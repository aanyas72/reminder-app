import "../styles/LoginAndSignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("form was submitted");
  };

  return (
    <>
      <div className="sign-in">Sign up for an account</div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="label">Email Address</div>
        <input className="input"></input>
        <div className="label">Enter password</div>
        <input type="password" className="input"></input>
        <div className="label">Re-enter password</div>
        <input type="password" className="input"></input>
        <button className="btn" type="submit">
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
