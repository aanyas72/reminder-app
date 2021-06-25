import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Item from "./Item";

const Students = ({ showStudents, toggleStudents }) => {
  return (
    <>
      <div className="label-name">Students</div>
      {showStudents ? (
        <FaAngleDown className="expand-btn" onClick={toggleStudents} />
      ) : (
        <FaAngleUp className="expand-btn" onClick={toggleStudents} />
      )}
      {showStudents && <Item text="A" classNames={showStudents ? "" : "hidden"} />}
    </>
  );
};

export default Students;
