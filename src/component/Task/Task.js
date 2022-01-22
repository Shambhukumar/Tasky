import React, { useState } from "react";
import "./task.scss";
import Search from "../../Assets/Svg/Search.svg";
import Notification from "../../Assets/Svg/Notification.svg";
// import Pic1 from "../../Assets/Images/Pic1.jpg";
import {SelectUser} from "../LoggedInUserSplice";
import {updateColumnList, SelectColumnList} from "./taskSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import {onDragEnd} from "./taskFunction";


const Task = () => {
  const ColumnsList = useSelector(SelectColumnList)
  const Currentuser = useSelector(SelectUser)
  console.log(ColumnsList)
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(ColumnsList);
 
  return (
    <div className="Task">
      {/* {console.log(columns)} */}
      <div className="Task-head">
        <div className="Task-head-taskText">
          <span className="Task-head-taskText-text">✔️ Daily Task</span>
          <div className="Task-head-taskText-icons">
            <span className="Task-head-taskText-icons-search">
              <img src={Search} alt="search icon" />
            </span>
            <span className="Task-head-taskText-icons-notification">
              <img src={Notification} alt="notification icon" />
            </span>
            <span className="Task-head-taskText-icons-pic">
              <img src={Currentuser.image} alt="person img" />
            </span>
          </div>
        </div>
        <p className="Task-head-paragraph">
          Click <span className="Task-head-paragraph-btn"> + New</span> To
          create new list and wait for project manager card. <br /> Don't Create
          a card by yourself to manage a good colaboration.
        </p>
      </div>
      <div className="Task-Drageble">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns, dispatch, updateColumnList)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="Task-Drageble-column" key={columnId}>
                <span className="Task-Drageble-column-heading">
                  <span className="Task-Drageble-column-heading-name">
                    {column.name}
                  </span>
                  <span className="Task-Drageble-column-heading-count">
                    {column.items.length}
                  </span>
                </span>
                <div className="Task-Drageble-column-container">
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className="Task-Drageble-column-container-inn"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className="Task-Drageble-column-container-inn-item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",

                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",

                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <div className="Task-Drageble-column-container-inn-item-head">
                                        <span className="Task-Drageble-column-container-inn-item-head-emoji">
                                          {item.content.emoji}
                                        </span>
                                        <span className="Task-Drageble-column-container-inn-item-head-dots">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                        </span>
                                      </div>
                                      <div className="Task-Drageble-column-container-inn-item-text">
                                        {item.content.text}
                                      </div>
                                      <div className="Task-Drageble-column-container-inn-item-foot">
                                        <span className="Task-Drageble-column-container-inn-item-foot-time">
                                          {item.content.date}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Task;
