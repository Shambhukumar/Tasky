import React, { useState } from "react";
import "./task.scss";
import Search from "../../Assets/Svg/Search.svg";
import Notification from "../../Assets/Svg/Notification.svg";
import Pic1 from "../../Assets/Images/Pic1.jpg";
import { v4 as uuid } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const itemsFromBackend = [
  {
    id: uuid(),
    content: {
      emoji: "🤟",
      text: "[Memoji]-Create Prototype Mobile for Get Notification in Principle",
      date: "MAR 26",
    },
  },
  {
    id: uuid(),
    content: {
      emoji: "🥳",
      text: "[OWW] - Draw & animate illustration for OWW 4th anniversary",
      date: "MAR 30",
    },
  },
  {
    id: uuid(),
    content: {
      emoji: "🎮",
      text: "[Metaco] - Create draft desgn for User Journey earning coin on Apps",
      date: "Apr 1",
    },
  },
];

const itemsFromBackend2 = [
    {
      id: uuid(),
      content: {
        emoji: "🤟",
        text: "[Lux] - Design Lux Pet Shop Product Page Responsive Website",
        date: "MAR 29",
      },
    },
    {
      id: uuid(),
      content: {
        emoji: "🔥",
        text: "[OWW] - Learn SVGator for Create OWW Animation Part 2",
        date: "MAR 26",
      },
    },
  ];

  const itemsFromBackend3 = [
    {
      id: uuid(),
      content: {
        emoji: "🔥",
        text: "[OWW] - Learn SVGator for Create OWW Animation Part 1",
        date: "MAR 26",
      },
    },
    {
      id: uuid(),
      content: {
        emoji: "🎮",
        text: "[Metaco] - Benchmark Mobile Legend on Earning Diamond",
        date: "MAR 25",
      },
    },
  ];

const ColumnsList = {
  [uuid()]: {
    name: "Next Up",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "In Progress",
    items: itemsFromBackend2,
  },
  [uuid()]: {
    name: "Complete",
    items: itemsFromBackend3,
  },
};
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
const Task = () => {
  const [columns, setColumns] = useState(ColumnsList);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <div className="Task">
      {console.log(columns)}
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
              <img src={Pic1} alt="person img" />
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
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
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
