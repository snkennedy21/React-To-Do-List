import ListElement from "./ListElement";
import "./List.css";

const List = function (props) {
  return (
    <div className="list">
      <ListElement
        task={props.toDoItems[0].taskName}
        date={props.toDoItems[0].completionDate}
      ></ListElement>
      <ListElement
        task={props.toDoItems[1].taskName}
        date={props.toDoItems[1].completionDate}
      ></ListElement>
      <ListElement
        task={props.toDoItems[2].taskName}
        date={props.toDoItems[2].completionDate}
      ></ListElement>
      <ListElement
        task={props.toDoItems[3].taskName}
        date={props.toDoItems[3].completionDate}
      ></ListElement>
    </div>
  );
};

export default List;
