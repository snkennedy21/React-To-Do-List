import "./App.css";
import List from "./components/listComponents/List";

function App() {
  const toDoItems = [
    { taskName: "Homework", completionDate: new Date(2022, 6, 4) },
    { taskName: "Laundry", completionDate: new Date(2022, 5, 12) },
    { taskName: "Dishes", completionDate: new Date(2022, 8, 30) },
    { taskName: "Pay Taxes", completionDate: new Date(2022, 7, 10) },
  ];

  return (
    <div className="application__container">
      <section className="application__section">
        <div className="header__container">
          <header className="header">To Do List</header>
        </div>
        <List toDoItems={toDoItems}></List>
      </section>
    </div>
  );
}

export default App;
