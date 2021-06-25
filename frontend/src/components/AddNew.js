import { useState } from "react";

const AddNew = ({ handleSubmit }) => {
  const [addNew, setAddNew] = useState("");

  return (
    <form className="new" onSubmit={handleSubmit}>
      <div className="input-line">
        <label className="label-name">
          Create a new:
          <select className="add-new-input" onChange={(e) => setAddNew(e.target.value)}>
            <option className="add-new-input">Choose One</option>
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
            <input type="text" className="add-new-input"></input>
          </label>
        </div>
      )}

      {addNew === "reminder" && (
        <>
          <div className="input-line">
            <label className="item">
              Reminder:
              <textarea className="add-new-input textarea"></textarea>
            </label>
          </div>

          <div className="input-line">
            <label className="item">
              Send to:
              <select className="add-new-input">
                <option className="add-new-input">Choose</option>
                <option value="1stPd" className="add-new-input">
                  1st pd
                </option>
                <option value="2ndPd" className="add-new-input">
                  2nd pd
                </option>
              </select>
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

export default AddNew;
