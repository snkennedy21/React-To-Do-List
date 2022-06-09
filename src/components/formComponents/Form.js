import "./Form.css";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const Form = function (props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const taskChangeHandler = function (e) {
    setEnteredTask(e.target.value);
  };

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const taskData = {
      id: Math.random().toString(),
      taskName: enteredTask,
      completionDate: new Date(enteredDate),
    };

    props.onSaveTaskData(taskData);
  };

  return (
    <div className="form__container">
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={taskChangeHandler}
          className="form__input--text"
          type="text"
          placeholder="Enter Task"
        />
        <input
          onChange={dateChangeHandler}
          className="form__input--date"
          type="date"
        />
        <button className="form__button" type="submit">
          <FaPlusSquare className="form__button__icon" />
        </button>
      </form>
    </div>
  );
};

export default Form;
