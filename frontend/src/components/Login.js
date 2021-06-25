import "../styles/LoginAndSignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('form was submitted');
  }

  return (
    <>
      <div className="sign-in">Sign in</div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="label">Email address</div>
        <input className="input"></input>
        <div className="label">Password</div>
        <input type="password" className="input"></input>
        <button className="btn" type="submit">Sign in</button>
      </form>
      <Link to="/sign-up" className="link">
        New? Sign up for an account
      </Link>
    </>
  );
};

export default Login;
