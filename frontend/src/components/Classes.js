import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Item from "./Item";

const Classes = ({ showClasses, toggleClasses }) => {
  return (
    <>
      <div className="label-name">Classes</div>
      {showClasses ? (
        <FaAngleDown className="expand-btn" onClick={toggleClasses} />
      ) : (
        <FaAngleUp className="expand-btn" onClick={toggleClasses} />
      )}
      {showClasses && <Item text="1st pd" />}
    </>
  );
};

export default Classes;
