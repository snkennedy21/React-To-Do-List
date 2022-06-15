import styles from "./EditTaskForm.module.css";
import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const EditTaskForm = function (props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");

  const taskChangeHandler = function (e) {
    setEnteredTask(e.target.value);
  };
  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
  };
  const priorityChangeHandler = function (e) {
    setEnteredPriority(e.target.value);
  };

  const closeFormHandler = function (e) {
    e.preventDefault();
    props.closeForm();
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    const completionDate = new Date(enteredDate);
    console.log(enteredDate);
    const updatedTask = {
      taskName: enteredTask,
      month: completionDate.toLocaleString("en-US", { month: "long" }),
      day: completionDate.toLocaleString("en-US", { day: "2-digit" }),
      priorityLevel: enteredPriority,
    };
    console.log(updatedTask);
    props.updateTask(updatedTask);
    setEnteredTask("");
    setEnteredDate("");
    setEnteredPriority("");
    props.closeForm();
  };

  return (
    <div
      className={`${styles["form__container"]} ${
        props.formIsOpen ? "" : styles["hidden"]
      }`}
    >
      <form onSubmit={formSubmitHandler} className={`${styles["form"]}`}>
        <input
          onChange={taskChangeHandler}
          className={`${styles["form__input--text"]}`}
          type="text"
          placeholder="Edit Task"
          value={enteredTask}
        />
        <input
          onChange={dateChangeHandler}
          className={`${styles["form__input--date"]}`}
          type="date"
          value={enteredDate}
        />
        <div className={`${styles["form__input__priorities__container"]}`}>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>Low</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="Low"
            />
          </div>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>Medium</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="Medium"
            />
          </div>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>High</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="High"
            />
          </div>
        </div>
        <div className={`${styles["form__button-container"]}`}>
          <button type="submit" className={`${styles["form__button"]}`}>
            <FaCheckSquare
              className={`${styles["form__button__icon"]} ${styles["update"]}`}
            ></FaCheckSquare>
          </button>
          <button
            onClick={closeFormHandler}
            className={`${styles["form__button"]}`}
          >
            <FaWindowClose
              className={`${styles["form__button__icon"]} ${styles["close"]}`}
            ></FaWindowClose>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
