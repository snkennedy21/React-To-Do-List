import styles from "./EditTaskForm.module.css";
import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const EditTaskForm = function (props) {
  const closeFormHandler = function (e) {
    e.preventDefault();
    props.closeForm();
  };

  return (
    <div
      className={`${styles["form__container"]} ${
        props.formIsOpen ? "" : styles["hidden"]
      }`}
    >
      <form className={`${styles["form"]}`}>
        <input
          className={`${styles["form__input--text"]}`}
          type="text"
          placeholder="Edit Task"
        />
        <input className={`${styles["form__input--date"]}`} type="date" />
        <div className={`${styles["form__input__priorities__container"]}`}>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>Low</label>
            <input name="priority" type="radio" value="Low" />
          </div>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>Medium</label>
            <input name="priority" type="radio" value="Medium" />
          </div>
          <div className={`${styles["form__input__radio__container"]}`}>
            <label>High</label>
            <input name="priority" type="radio" value="High" />
          </div>
        </div>
        <div className={`${styles["form__button-container"]}`}>
          <button className={`${styles["form__button"]}`}>
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
