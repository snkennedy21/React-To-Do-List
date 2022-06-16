import "./App.css";
import List from "./components/listComponents/List";
import Form from "./components/formComponents/Form";
import { useState } from "react";

function App() {
  const toDoItems = [
    {
      id: "e1",
      taskName: "Homework",
      completionDate: new Date(2022, 6, 4),
      priorityLevel: "Medium",
    },
    {
      id: "e2",
      taskName: "Laundry",
      completionDate: new Date(2022, 5, 12),
      priorityLevel: "Low",
    },
    {
      id: "e3",
      taskName: "Dishes",
      completionDate: new Date(2022, 8, 30),
      priorityLevel: "Medium",
    },
    {
      id: "e4",
      taskName: "Pay Taxes",
      completionDate: new Date(2022, 7, 10),
      priorityLevel: "Medium",
    },
  ];
  const [list, setList] = useState(toDoItems);

  const saveTaskDataHandler = function (taskData) {
    setList((prevItems) => {
      return [taskData, ...prevItems];
    });
  };

  const deleteTaskHandler = function (selectedTaskID) {
    setList((prevItems) => {
      const updatedTasks = prevItems.filter(
        (item) => item.id !== selectedTaskID
      );
      return updatedTasks;
    });
  };

  const updateTaskDataHandler = function (updatedTaskData) {
    setList((prevItems) => {
      prevItems.forEach((el, i) => {
        if (el.id === updatedTaskData.id) prevItems[i] = updatedTaskData;
      });
      return [...prevItems];
    });
  };

  return (
    <div className="application__container">
      <section className="application__section">
        <div className="header__container">
          <header className="header">To Do List</header>
        </div>
        <Form onSaveTaskData={saveTaskDataHandler}></Form>
        <List
          updateTaskData={updateTaskDataHandler}
          deleteTask={deleteTaskHandler}
          toDoItems={list}
        ></List>
      </section>
    </div>
  );
}

export default App;
