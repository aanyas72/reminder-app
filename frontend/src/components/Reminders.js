import { useState, useEffect } from "react";

import Item from "./Item";
import RecipientService from "../services/RecipientService";
import ReminderDataService from "../services/ReminderDataService";

const Reminders = ({ isRec, activeRecipient }) => {
  const [reminders, setReminders] = useState();

  useEffect(() => {
    const getReminders = async () => {
      if (activeRecipient) {
        try {
          const alexaId = await RecipientService.getAlexaIdById(
            activeRecipient
          );
          const resp = await ReminderDataService.retrieveAllReminders(
            alexaId.data
          );
          setReminders(Array.from(Object.entries(resp.data)));
        } catch {}
      }
    };
    getReminders();
  }, [activeRecipient]);

  const deleteItem = async (reminderIdToDelete) => {
    try {
      await ReminderDataService.deleteReminder(reminderIdToDelete);
      setReminders(
        reminders.filter((reminder) => reminder[0] !== reminderIdToDelete)
      );
    } catch {}
  };

  return (
    <div className="reminders">
      <div className="label-name">Active Reminders</div>
      {isRec && !activeRecipient ? (
        <div style={{ backgroundColor: "transparent", marginTop: "10px" }}>
          Click on a recipient to see their reminders.
        </div>
      ) : (
        reminders &&
        reminders.map((reminder) => (
          <Item
            key={reminder[0]}
            text={reminder[1]}
            type="reminder"
            deleteItem={deleteItem}
            id={reminder[0]}
          />
        ))
      )}
    </div>
  );
};

export default Reminders;
