import { useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Dashboard.css";
import Classes from "./Classes";
import Students from "./Students";
import Reminders from "./Reminders";
import AddNew from "./AddNew";
import Header from "./Header";
import AuthenticationService from "../services/AuthenticationService";

const Dashboard = () => {
  const [showClasses, setShowClasses] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("form was submitted");
  };

  return (
    <>
      {AuthenticationService.isUserLoggedIn() ? (
        <>
          <Header />

          <div className="dashboard">
            <div className="dashboard-header">
              <div className="dashboard-name">Dashboard</div>
              <button className="add-new" onClick={() => setShowAdd(!showAdd)}>
                {showAdd ? "-" : "+"}
              </button>
            </div>

            {showAdd && <AddNew handleSubmit={handleSubmit} />}

            <div className="classes-and-kids">
              <Classes
                showClasses={showClasses}
                toggleClasses={() => setShowClasses(!showClasses)}
              />
              <div className="divider"></div>
              <Students
                showStudents={showStudents}
                toggleStudents={() => setShowStudents(!showStudents)}
              />
            </div>
            <Reminders />
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default Dashboard;
