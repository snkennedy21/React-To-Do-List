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

  return (
    <div>
      <ListFilter onSaveFilterData={saveFilterDataHandler}></ListFilter>
      <div className="list">
        {filteredList.map((el) => (
          <ListElement
            key={el.id}
            task={el.taskName}
            date={el.completionDate}
            priority={el.priorityLevel}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
