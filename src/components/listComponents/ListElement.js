import styles from "./ListElement.module.css";
import React, { useState } from "react";
import { FaTrashAlt, FaCheck, FaEdit } from "react-icons/fa";
import EditTaskForm from "../formComponents/EditTaskForm";

const ListElement = function (props) {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const [task, setTask] = useState(props.task);
  const [month, setMonth] = useState(
    props.date.toLocaleString("en-US", { month: "long" })
  );
  const [day, setDay] = useState(
    props.date.toLocaleString("en-US", { day: "2-digit" })
  );
  const [priority, setPriority] = useState(props.priority);

  const updateTaskHandler = function (updatedTask) {
    setTask(updatedTask.taskName);
    setDay(updatedTask.day);
    setMonth(updatedTask.month);
    setPriority(updatedTask.priorityLevel);
  };

  const openFormHandler = function () {
    setFormIsOpen(true);
  };
  const closeFormHandler = function () {
    setFormIsOpen(false);
  };

  const completeTaskHandler = function () {
    if (taskCompleted) setTaskCompleted(false);
    if (!taskCompleted) setTaskCompleted(true);
  };

  return (
    <div
      className={`${styles["list__element-container"]} ${
        taskCompleted ? styles.completed : ""
      }`}
    >
      <div className={`${styles["list__element"]}`}>
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
            onClick={openFormHandler}
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
      <EditTaskForm
        closeForm={closeFormHandler}
        formIsOpen={formIsOpen}
        updateTask={updateTaskHandler}
      ></EditTaskForm>
    </div>
  );
};

export default ListElement;
