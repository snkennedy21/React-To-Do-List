import "./Form.css";
import { FaPlusSquare } from "react-icons/fa";

const Form = function () {
  const taskChangeHandler = function (e) {
    console.log(e.target.value);
  };

  const dateChangeHandler = function (e) {
    console.log(e.target.value);
  };

  const formSubmitHandler = function () {};

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
