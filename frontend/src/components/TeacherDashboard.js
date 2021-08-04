import { useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Dashboard.css";
import Classes from "./Classes";
import Recipients from "./Recipients";
import Reminders from "./Reminders";
import AddNewTeacher from "./AddNewTeacher";
import Header from "./Header";
import AuthenticationService from "../services/AuthenticationService";

const TeacherDashboard = () => {
  const [showClasses, setShowClasses] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const history = useHistory();

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

            {showAdd && <AddNewTeacher />}

            <div className="classes-and-kids">
              <Classes
                showClasses={showClasses}
                toggleClasses={() => setShowClasses(!showClasses)}
              />
              <div className="divider"></div>
              <Recipients
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

export default TeacherDashboard;
