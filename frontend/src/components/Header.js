import { FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

import "../styles/Header.css";
import AuthenticationService from "../services/AuthenticationService";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <div className="dropdown" onClick={() => setShowMenu(!showMenu)}>
        <FaRegUserCircle className="user-logo" size={28} />
        <FaAngleDown className="down-arrow" />
        {showMenu && (
          <div className="dropdown-menu">
            <div>
              Signed in as <b>{AuthenticationService.getLoggedInUserName()}</b>
            </div>
            <div className="divider"></div>
            <Link
              to="/logout"
              style={{ backgroundColor: "transparent", fontWeight: "bold" }}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
