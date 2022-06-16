import { useState } from "react";
import ListElement from "./ListElement";
import "./List.css";
import ListFilter from "./ListFilter";

const List = function (props) {
  const [priorityLevel, setPriorityLevel] = useState("All");

  const saveFilterDataHandler = function (selectedFilterValue) {
    setPriorityLevel(selectedFilterValue);
  };

  let filteredList;
  if (priorityLevel === "All") filteredList = props.toDoItems;
  if (priorityLevel !== "All") {
    filteredList = props.toDoItems.filter(
      (el) => el.priorityLevel === priorityLevel
    );
  }

  let listContent = <p>You have no taks for this selected priority level</p>;

  if (filteredList.length > 0)
    listContent = filteredList.map((el) => (
      <ListElement
        key={el.id}
        id={el.id}
        task={el.taskName}
        date={el.completionDate}
        priority={el.priorityLevel}
        deleteTask={props.deleteTask}
      />
    ));
  return (
    <div>
      <ListFilter onSaveFilterData={saveFilterDataHandler}></ListFilter>
      <div className="list">{listContent}</div>
    </div>
  );
};

export default List;
