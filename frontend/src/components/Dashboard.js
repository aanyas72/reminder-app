import "../styles/Dashboard.css";
import { useState } from "react";

import Classes from "./Classes";
import Students from "./Students";
import Reminders from "./Reminders";
import AddNew from "./AddNew";
import Header from "./Header";

const Dashboard = () => {
  const [showClasses, setShowClasses] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("form was submitted");
  };

  return (
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
  );
};

export default Dashboard;
