import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Item from "./Item";

const Students = ({ showStudents, toggleStudents, changeActiveClass, students }) => {
  return (
    <>
      <div className="label-name">
        Students
      </div>
      {showStudents ? (
        <FaAngleDown className="expand-btn" onClick={toggleStudents} />
      ) : (
        <FaAngleUp className="expand-btn" onClick={toggleStudents} />
      )}
      {showStudents &&
        students &&
        students.map((student) => (
          <Item
            key={student[0]}
            type="recipient"
            text={student[1]}
            changeActiveClass={() => changeActiveClass(student[0])}
          />
        ))}
    </>
  );
};

export default Students;
