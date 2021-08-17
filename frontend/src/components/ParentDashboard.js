import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Dashboard.css";
import Recipients from "./Recipients";
import Reminders from "./Reminders";
import AddNewParent from "./AddNewParent";
import Header from "./Header";
import AuthenticationService from "../services/AuthenticationService";
import RecipientService from "../services/RecipientService";

const ParentDashboard = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [recipients, setRecipients] = useState();
  const [showRecipients, setShowRecipients] = useState(true);
  const [activeRecipient, setActiveRecipient] = useState();

  useEffect(() => {
    const getRecipients = async () => {
      try {
        const resp = await RecipientService.getRecipientsByUser();
        setRecipients(Array.from(Object.entries(resp.data)));
      } catch {}
    };
    getRecipients();
  }, []);

  const history = useHistory();

  return (
    <>
      {AuthenticationService.isUserLoggedIn() ? (
        <>
          <Header />
          <div className="dashboard">
            <div className="dashboard-header">
              <div className="dashboard-name">Parent Dashboard</div>
              <button className="add-new" onClick={() => setShowAdd(!showAdd)}>
                {showAdd ? "-" : "+"}
              </button>
            </div>
            {showAdd && (
              <AddNewParent
                recipientsArr={recipients}
                closeAddNew={() => setShowAdd(false)}
                submitted={() => {
                  const actRec = activeRecipient;
                  setActiveRecipient("");
                  setActiveRecipient(actRec);
                }}
              />
            )}
            <div className="classes-and-kids">
              <Recipients
                showRecipients={showRecipients}
                toggleRecipients={() => setShowRecipients(!showRecipients)}
                changeActiveRecipient={(newRec) => setActiveRecipient(newRec)}
                recipients={recipients}
              />
            </div>
            <Reminders
              isRec={recipients && recipients.length > 0}
              activeRecipient={activeRecipient}
            />
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default ParentDashboard;
