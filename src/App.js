import "./App.css";
import List from "./components/listComponents/List";
import Form from "./components/formComponents/Form";
import { useState } from "react";
import ListFilter from "./components/listFilterComponents/ListFilter";

function App() {
  const toDoItems = [
    { id: "e1", taskName: "Homework", completionDate: new Date(2022, 6, 4) },
    { id: "e2", taskName: "Laundry", completionDate: new Date(2022, 5, 12) },
    { id: "e3", taskName: "Dishes", completionDate: new Date(2022, 8, 30) },
    { id: "e4", taskName: "Pay Taxes", completionDate: new Date(2022, 7, 10) },
  ];
  const [list, setList] = useState(toDoItems);

  const saveTaskDataHandler = function (taskData) {
    setList((prevItems) => {
      return [taskData, ...prevItems];
    });
  };

  console.log(list);

  return (
    <div className="application__container">
      <section className="application__section">
        <div className="header__container">
          <header className="header">To Do List</header>
        </div>
        <Form onSaveTaskData={saveTaskDataHandler}></Form>
        <ListFilter></ListFilter>
        <List toDoItems={list}></List>
      </section>
    </div>
  );
}

export default App;
