import styles from "./Form.module.css";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const Form = function (props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [taskIsFilledOut, setTaskIsFilledOut] = useState(true);
  const [dateIsFilledOut, setDateIsFilledOut] = useState(true);
  const [priorityIsfilledOut, setPriorityIsFilledOut] = useState(true);

  const removeFormErrorColor = function () {
    setTaskIsFilledOut(true);
    setDateIsFilledOut(true);
    setPriorityIsFilledOut(true);
  };

  const taskChangeHandler = function (e) {
    setEnteredTask(e.target.value);
    if (e.target.value.trim().length > 0) {
      removeFormErrorColor();
    }
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
    if (e.target.value.trim().length > 0) {
      removeFormErrorColor();
    }
  };

  const priorityChangeHandler = function (e) {
    setEnteredPriority(e.target.value);
    if (e.target.value.trim().length > 0) {
      removeFormErrorColor();
    }
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (enteredTask.trim().length === 0) {
      setTaskIsFilledOut(false);
    }
    if (enteredDate.trim().length === 0) {
      setDateIsFilledOut(false);
    }
    if (enteredPriority.trim().length === 0) {
      setPriorityIsFilledOut(false);
    }
    if (
      enteredTask.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredPriority.trim().length === 0
    ) {
      return;
    }

    const taskData = {
      id: Math.random().toString(),
      taskName: enteredTask,
      completionDate: new Date(enteredDate),
      priorityLevel: enteredPriority,
    };

    props.onSaveTaskData(taskData);
    setEnteredTask("");
    setEnteredDate("");
    setEnteredPriority("");
  };

  return (
    <div className={`${styles["form__container"]}`}>
      <form onSubmit={formSubmitHandler} className={`${styles["form"]}`}>
        <input
          onChange={taskChangeHandler}
          className={`${styles["form__input--text"]} ${
            taskIsFilledOut ? "" : styles.invalid
          }`}
          type="text"
          placeholder="Enter Task"
          value={enteredTask}
        />
        <input
          onChange={dateChangeHandler}
          className={`${styles["form__input--date"]} ${
            dateIsFilledOut ? "" : styles.invalid
          }`}
          type="date"
          value={enteredDate}
        />
        <div
          className={`${styles["form__input__priorities__container"]} ${
            priorityIsfilledOut ? "" : styles.invalid
          }`}
        >
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
        <button className={`${styles["form__button"]}`} type="submit">
          <FaPlusSquare className={`${styles["form__button__icon"]}`} />
        </button>
      </form>
    </div>
  );
};

export default Form;
