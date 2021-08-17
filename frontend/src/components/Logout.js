import AuthenticationService from "../services/AuthenticationService";

const Logout = () => {
  AuthenticationService.logout();
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "10px",
        fontSize: "20px",
      }}
    >
      You have been logged out.
    </div>
  );
};

export default Logout;
