import { useState, useEffect } from "react";

import ReminderDataService from "../services/ReminderDataService";
import Checkboxes from "./Checkboxes";
import { handleCheckboxChange, createFalseMap } from "./AddNew";

const AddNewParent = ({ closeAddNew, recipientsArr, submitted }) => {
  const [recipients, setRecipients] = useState();
  const [reminderText, setReminderText] = useState("");
  const [sendTo, setSendTo] = useState();
  const [addFailed, setAddFailed] = useState(false);

  useEffect(() => {
    const arrToMap = () => {
      const map = new Map(recipientsArr);
      const keys = Array.from(map.keys());
      setRecipients(map);
      setSendTo(createFalseMap(map, keys));
    };
    arrToMap();
  }, [recipientsArr]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ReminderDataService.addNewReminders(sendTo, reminderText);
      submitted();
      closeAddNew();
    } catch {}
  };

  return (
    <>
      {addFailed && (
        <div className="error box" onClick={() => setAddFailed(false)}>
          Failed to send reminder. Try again.
        </div>
      )}
      <form className="new" onSubmit={handleSubmit}>
        <div className="input-line">
          <label className="label-name">
            Create a new:
            <select className="add-new-input">
              <option value="reminder" className="add-new-input">
                Reminder
              </option>
            </select>
          </label>
        </div>
        <div className="input-line">
          <label className="item">
            Reminder Text:
            <textarea
              className="add-new-input textarea"
              onChange={(e) => setReminderText(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="input-line">
          <label className="item">
            Send to:
            {recipients &&
              sendTo &&
              Array.from(recipients, ([key, value]) => (
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

        <div className="input-line">
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default AddNewParent;
