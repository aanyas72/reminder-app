import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import ClassService from "../services/ClassService";

import Item from "./Item";

const Classes = ({
  showClasses,
  toggleClasses,
  classes,
  changeActiveClass,
  setClasses,
}) => {
  const deleteItem = async (classIdToDelete) => {
    try {
      await ClassService.deleteClass(classIdToDelete);
      setClasses(classes.filter((classs) => classs[0] !== classIdToDelete));
    } catch {}
  };

  return (
    <>
      <div className="label-name">Classes</div>
      {showClasses ? (
        <FaAngleDown className="expand-btn" onClick={toggleClasses} />
      ) : (
        <FaAngleUp className="expand-btn" onClick={toggleClasses} />
      )}
      {showClasses &&
        classes &&
        classes.map((classs) => (
          <Item
            key={classs[0]}
            text={classs[1]}
            type="class"
            id={classs[0]}
            changeActiveClass={() => changeActiveClass(classs[0])}
            deleteItem={() => deleteItem(classs[0])}
          />
        ))}
    </>
  );
};

export default Classes;
