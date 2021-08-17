import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Dashboard.css";
import Classes from "./Classes";
import Reminders from "./Reminders";
import AddNewTeacher from "./AddNewTeacher";
import Header from "./Header";
import AuthenticationService from "../services/AuthenticationService";
import ClassService from "../services/ClassService";
import Students from "./Students";
import RecipientService from "../services/RecipientService";

const TeacherDashboard = () => {
  const [showClasses, setShowClasses] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [classes, setClasses] = useState();
  const [activeClass, setActiveClass] = useState();
  const [students, setStudents] = useState();

  const history = useHistory();

  useEffect(() => {
    const getAllClasses = async () => {
      try {
        const resp = await ClassService.getAllClasses();
        setClasses(Array.from(Object.entries(resp.data)));
      } catch {}
    };
    getAllClasses();
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const resp = await RecipientService.getRecipientsByClass(activeClass);
        setStudents(Array.from(Object.entries(resp.data)));
      } catch {}
    };
    getStudents();
  }, [activeClass]);

  return (
    <>
      {AuthenticationService.isUserLoggedIn() ? (
        <>
          <Header />

          <div className="dashboard">
            <div className="dashboard-header">
              <div className="dashboard-name">Teacher Dashboard</div>
              <button className="add-new" onClick={() => setShowAdd(!showAdd)}>
                {showAdd ? "-" : "+"}
              </button>
            </div>

            {showAdd && (
              <AddNewTeacher
                classesArr={classes}
                closeAddNew={() => setShowAdd(false)}
                submittedReminder={() => {
                  const actClass = activeClass;
                  setActiveClass("");
                  setActiveClass(actClass);
                }}
              />
            )}

            <div className="classes-and-kids">
              <Classes
                showClasses={showClasses}
                toggleClasses={() => setShowClasses(!showClasses)}
                classes={classes}
                changeActiveClass={(classNum) => setActiveClass(classNum)}
                setClasses={setClasses}
              />
              <div className="divider"></div>
              <Students
                showStudents={showStudents}
                toggleStudents={() => setShowStudents(!showStudents)}
                activeClass={activeClass}
                students={students}
              />
            </div>
            <Reminders
              isRec={classes && classes.length > 0}
              activeRecipient={activeClass}
            />
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default TeacherDashboard;
