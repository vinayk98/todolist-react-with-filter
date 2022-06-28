import React, { useState, createContext } from "react";
import { CurrentTab } from "./components/CurrentTab";
import { DeleteAll } from "./components/DeleteAll";
import { InputField } from "./components/InputField";
import { Navdiv } from "./components/Navdiv";
import { SearchTodo } from "./components/SearchTodo";
import { TodosDiv } from "./components/TodosDiv";

import "./index.css";

export const TodoContext = createContext();
const App = () => {
  const [todos, setTodos] = useState([]);
  const [tabName, setTabName] = useState("All");
  const [filterText, setFilterText] = useState("");

  return (
    <TodoContext.Provider
      value={{
        tabName,
        setTabName,
        todos,
        setTodos,
        filterText,
        setFilterText,
      }}
    >
      <div className="container">
        <h5 className="heading">#todo-react</h5>
        <CurrentTab />
        <Navdiv />
        {tabName !== "Completed" && tabName !== "Filter" ? (
          <InputField />
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {tabName === "Filter" && <SearchTodo />}
        <TodosDiv />

        {tabName === "Completed" && <DeleteAll />}
      </div>
    </TodoContext.Provider>
  );
};
export default App;
