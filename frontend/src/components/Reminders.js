import { useState, useEffect } from "react";

import Item from "./Item";
import ReminderDataService from "../services/ReminderDataService.js";

const Reminders = () => {
  const [reminders, setReminders] = useState();

  useEffect(() => {
    ReminderDataService.retrieveAllReminders().then((r) =>
      setReminders(r.data)
    );
  }, []);

  return (
    <div className="reminders">
      <div className="label-name">Reminders</div>
      {reminders != null &&
        reminders.map((reminder) => <Item text={reminder} />)}
    </div>
  );
};

export default Reminders;
