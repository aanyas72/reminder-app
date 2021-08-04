import { useState, useEffect } from "react";

import ReminderDataService from "../services/ReminderDataService";
import Checkboxes from "./Checkboxes";

const AddNewParent = ({ closeAddNew, recipientsArr, submitted }) => {
  const [recipients, setRecipients] = useState();
  const [reminderText, setReminderText] = useState("");
  const [sendTo, setSendTo] = useState();
  const [addFailed, setAddFailed] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    const arrToMap = () => {
      const map = new Map(recipientsArr);
      const keys = Array.from(map.keys());
      setRecipients(map);
      setSendTo(createFalseMap(map, keys));
    };
    arrToMap();
  }, [recipientsArr]);

  const handleCheckboxChange = (key) =>
    setSendTo(new Map(sendTo.set(key, !sendTo.get(key))));

  const createFalseMap = (recipients, keys) => {
    const map1 = new Map();
    for (let i = 0; i < recipients.size; i++) {
      map1.set(keys[i], false);
    }
    return map1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ReminderDataService.addNewReminders(sendTo, reminderText);
      setAddSuccess(true);
      submitted();
      closeAddNew();
    } catch {
      setAddFailed(true);
    }
  };

  return (
    <>
      {addSuccess && (
        <div className="success box" onClick={() => setAddSuccess(false)}>
          Reminder successfully sent!
        </div>
      )}
      {addFailed && (
        <div className="error box">Failed to send reminder. Try again.</div>
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
                  handleChange={() => handleCheckboxChange(key)}
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
