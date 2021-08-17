import { useState, useEffect } from "react";

import Item from "./Item";
import RecipientService from "../services/RecipientService";
import ReminderDataService from "../services/ReminderDataService";
import AuthenticationService from "../services/AuthenticationService";

const Reminders = ({ isRec, activeRecipient, remType }) => {
  const [reminders, setReminders] = useState();

  useEffect(() => {
    const getReminders = async () => {
      if (
        AuthenticationService.getLoggedInUserAccountType() === "parent" &&
        activeRecipient
      ) {
        try {
          const alexaId = await RecipientService.getAlexaIdById(
            activeRecipient
          );
          const resp = await ReminderDataService.retrieveAllReminders(
            alexaId.data
          );
          setReminders(Array.from(Object.entries(resp.data)));
        } catch {}
      } else if (
        AuthenticationService.getLoggedInUserAccountType() === "teacher" &&
        activeRecipient
      ) {
        try {
          const resp = await ReminderDataService.getRemindersByClass(
            activeRecipient
          );
          setReminders(Array.from(Object.entries(resp.data)));
        } catch {}
      }
    };
    getReminders();
  }, [activeRecipient, remType]);

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
          Click on a
          {AuthenticationService.getLoggedInUserAccountType() === "parent"
            ? " recipient to see their reminders."
            : " class to see its reminders."}
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
