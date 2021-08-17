import { useEffect, useState } from "react";

import ClassService from "../services/ClassService";
import Checkboxes from "./Checkboxes";
import { createFalseMap, handleCheckboxChange } from "./AddNew";
import ReminderDataService from "../services/ReminderDataService";

const AddNewTeacher = ({ classesArr, closeAddNew, submittedReminder }) => {
  const [addNew, setAddNew] = useState();
  const [sendTo, setSendTo] = useState();
  const [text, setText] = useState();
  const [classes, setClasses] = useState();

  useEffect(() => {
    const arrToMap = () => {
      const map = new Map(classesArr);
      const keys = Array.from(map.keys());
      setClasses(map);
      setSendTo(createFalseMap(map, keys));
    };
    arrToMap();
  }, [classesArr]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (addNew === "class") {
        await ClassService.createNewClass(text)
        window.location.reload();
      }
      else if (addNew === "reminder") {
        await ReminderDataService.addNewClassReminders(sendTo, text);
        submittedReminder();
      }
      closeAddNew();
    } catch {}
  };

  return (
    <form className="new" onSubmit={handleSubmit}>
      <div className="input-line">
        <label className="label-name">
          Create a new:
          <select
            className="add-new-input"
            onChange={(e) => setAddNew(e.target.value)}
          >
            <option className="add-new-input">Choose</option>
            <option value="class" className="add-new-input">
              Class
            </option>
            <option value="reminder" className="add-new-input">
              Reminder
            </option>
          </select>
        </label>
      </div>

      {addNew === "class" && (
        <div className="input-line">
          <label className="item">
            Class name:
            <input
              type="text"
              className="add-new-input"
              onChange={(e) => setText(e.target.value)}
            ></input>
          </label>
        </div>
      )}

      {addNew === "reminder" && (
        <>
          <div className="input-line">
            <label className="item">
              Reminder:
              <textarea
                className="add-new-input textarea"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </label>
          </div>

          <div className="input-line">
            <label className="item">
              Send to:
              {classes &&
                Array.from(classes, ([key, value]) => (
                  <Checkboxes
                    key={key}
                    value={value}
                    checked={sendTo.get(key)}
                    handleChange={() =>
                      handleCheckboxChange(key, sendTo, setSendTo)
                    }
                  />
                ))}
            </label>
          </div>
        </>
      )}

      <div className="input-line">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default AddNewTeacher;
