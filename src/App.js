import React from "react";
import { TaskList } from "./components/TaskList/TaskList";
import { AddTask } from "./components/AddTask/AddTask";
import { Filter } from "./components/Filter/Filter";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
