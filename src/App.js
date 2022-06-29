import React from "react";
import { CurrentTab } from "./components/CurrentTab";
import { DeleteAll } from "./components/DeleteAll";
import { InputField } from "./components/InputField";
import { Navdiv } from "./components/Navdiv";
import { SearchTodo } from "./components/SearchTodo";
import { TodosDiv } from "./components/TodosDiv";
import { useStore } from "./store/zustandStore";
import "./index.css";

const App = () => {
  // const [todos, setTodos] = useState([]);
  // const [tabName, setTabName] = useState("All");
  // const [filterText, setFilterText] = useState("");
  const tabName = useStore((state) => state.tabName);

  return (
    <div className="container">
      <h5 className="heading">#todo-react</h5>
      <CurrentTab />
      <Navdiv />
      {tabName !== "Completed" && tabName !== "Filter" && <InputField />}
      {tabName === "Filter" && <SearchTodo />}
      <TodosDiv />
      {tabName === "Completed" && <DeleteAll />}
    </div>
  );
};
export default App;
