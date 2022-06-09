import { useState } from "react";
import ListElement from "./ListElement";
import "./List.css";

const List = function (props) {
  return (
    <div className="list">
      {props.toDoItems.map((el) => (
        <ListElement key={el.id} task={el.taskName} date={el.completionDate} />
      ))}
    </div>
  );
};

export default List;
