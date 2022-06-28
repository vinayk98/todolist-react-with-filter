import React, { useState } from "react";
import { CurrentTab } from "./components/CurrentTab";
import { DeleteAll } from "./components/DeleteAll";
import { InputField } from "./components/InputField";
import { Navdiv } from "./components/Navdiv";
import { SearchTodo } from "./components/SearchTodo";
import { TodosDiv } from "./components/TodosDiv";

import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tabName, setTabName] = useState("All");
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container">
      <h5 className="heading">#todo-react</h5>
      <CurrentTab tabName={tabName} />
      <Navdiv setTabName={setTabName} />
      {tabName !== "Completed" && tabName !== "Filter" ? (
        <InputField todos={todos} setTodos={setTodos} />
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {tabName === "Filter" && <SearchTodo setFilterText={setFilterText} />}
      <TodosDiv
        todos={todos}
        setTodos={setTodos}
        tabName={tabName}
        filterText={filterText}
      />

      {tabName === "Completed" && (
        <DeleteAll todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
};
export default App;
