import { useState } from "react";
import ListElement from "./ListElement";
import "./List.css";
import ListFilter from "./ListFilter";

const List = function (props) {
  const [priorityLevel, setPriorityLevel] = useState("Low");

  const saveFilterDataHandler = function (selectedFilterValue) {
    setPriorityLevel(selectedFilterValue);
  };

  const filteredList = props.toDoItems.filter(
    (el) => el.priorityLevel === priorityLevel
  );

  let listContent = <p>You have no taks for selected priority level</p>;

  if (filteredList.length > 0)
    listContent = filteredList.map((el) => (
      <ListElement
        key={el.id}
        task={el.taskName}
        date={el.completionDate}
        priority={el.priorityLevel}
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
