import { FaRegUserCircle, FaAngleDown } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <button className="logo">company logo</button>
      <div className="user-details">
        <FaRegUserCircle className="user-logo" size={28} />
        <FaAngleDown className="down-arrow" />
      </div>
    </div>
  );
};

export default Header;
