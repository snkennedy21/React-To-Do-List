import "./ListElement.css";
import React, { useState } from "react";
import { FaTrashAlt, FaCheck, FaEdit } from "react-icons/fa";

const ListElement = function (props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const [task, setTask] = useState(props.task);

  const editTaskHandler = function () {
    setTask("Changed");
  };

  return (
    <div className="list__element">
      <div className="list__element__item">
        <div className="list__element__task">{task}</div>
        <div className="list__element__date">{`${month} ${day}`}</div>
      </div>
      <div className="list__button__container">
        <button className="list__button list__button--check">
          <FaCheck></FaCheck>
        </button>
        <button
          onClick={editTaskHandler}
          className="list__button list__button--edit"
        >
          <FaEdit></FaEdit>
        </button>
        <button className="list__button list__button--delete">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </div>
    </div>
  );
};

export default ListElement;
