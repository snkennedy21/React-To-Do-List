import styles from "./ListElement.module.css";
import React, { useState } from "react";
import { FaTrashAlt, FaCheck, FaEdit } from "react-icons/fa";

const ListElement = function (props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const [task, setTask] = useState(props.task);
  const [priority, setPriority] = useState(props.priority);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const editTaskHandler = function () {
    setTask("Changed");
  };

  const completeTaskHandler = function () {
    if (taskCompleted) setTaskCompleted(false);
    if (!taskCompleted) setTaskCompleted(true);
  };

  return (
    <div
      className={`${styles["list__element"]} ${
        taskCompleted ? styles.completed : ""
      }`}
    >
      <div className={`${styles["list__element__item"]}`}>
        <div className={`${styles["list__element__task"]}`}>{task}</div>
        <div
          className={`${styles["list__element__date"]}`}
        >{`${month} ${day}`}</div>
        <div className={`${styles["list__element__priority"]}`}>
          Priority: {priority}
        </div>
      </div>
      <div className={`${styles["list__button__container"]}`}>
        <button
          onClick={completeTaskHandler}
          className={`${styles["list__button"]} ${styles["list__button--check"]}`}
        >
          <FaCheck></FaCheck>
        </button>
        <button
          onClick={editTaskHandler}
          className={`${styles["list__button"]} ${styles["list__button--edit"]}`}
        >
          <FaEdit></FaEdit>
        </button>
        <button
          className={`${styles["list__button"]} ${styles["list__button--delete"]}`}
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </div>
    </div>
  );
};

export default ListElement;
