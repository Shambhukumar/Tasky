import React from "react";
import "./task.scss";
import Search from "../../Assets/Svg/Search.svg"
import Notification from "../../Assets/Svg/Notification.svg"
import Pic1 from "../../Assets/Images/Pic1.jpg";
const Task = () => {
  return (
    <div className="Task">
      <div className="Task-head">
          <div className="Task-head-taskText">
              <span className="Task-head-taskText-text">✔️ Daily Task</span>
              <div className="Task-head-taskText-icons">
                  <span className="Task-head-taskText-icons-search">
                        <img  src={Search} alt="search icon"/>
                  </span>
                  <span className="Task-head-taskText-icons-notification">
                        <img  src={Notification} alt="notification icon"/>
                  </span>
                  <span className="Task-head-taskText-icons-pic">
                      <img src={Pic1} alt="person img"/>
                  </span>
              </div>

          </div>
        <p className="Task-head-paragraph">
          Click <span className="Task-head-paragraph-btn"> + New</span> To create new list and wait for project
          manager card. <br/> Don't Create a card by yourself to manage a good
          colaboration.
        </p>
      </div>
    </div>
  );
};

export default Task;
