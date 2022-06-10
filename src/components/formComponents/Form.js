import "./Form.css";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const Form = function (props) {
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

  const formSubmitHandler = function (e) {
    e.preventDefault();

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
    <div className="form__container">
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={taskChangeHandler}
          className="form__input--text"
          type="text"
          placeholder="Enter Task"
          value={enteredTask}
        />
        <input
          onChange={dateChangeHandler}
          className="form__input--date"
          type="date"
          value={enteredDate}
        />
        <div className="form__input__priorities__container">
          <div className="form__input__radio__container">
            <label>Low</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="Low"
            />
          </div>
          <div className="form__input__radio__container">
            <label>Medium</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="Medium"
            />
          </div>
          <div className="form__input__radio__container">
            <label>High</label>
            <input
              onChange={priorityChangeHandler}
              name="priority"
              type="radio"
              value="High"
            />
          </div>
        </div>
        <button className="form__button" type="submit">
          <FaPlusSquare className="form__button__icon" />
        </button>
      </form>
    </div>
  );
};

export default Form;
