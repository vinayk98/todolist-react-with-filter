import React from "react";
import { TodosDivItems } from "./TodosDivItems";

export const TodosDiv = ({ todos, setTodos, tabName, filterText }) => {
  let newData;
  if (tabName === "All") {
    newData = todos;
  } else if (tabName === "Active") {
    newData = todos.filter((item) => {
      return item.checked === false;
    });
  } else if (tabName === "Completed") {
    newData = todos.filter((item) => {
      return item.checked === true;
    });
  } else {
    newData = todos.filter((item) => {
      return item.name.includes(filterText);
    });
    //filter functionality later
  }
  return (
    <div>
      {newData.map((item, index) => {
        return (
          <TodosDivItems
            key={index}
            setTodos={setTodos}
            todos={todos}
            item={item}
            tabName={tabName}
          />
        );
      })}
    </div>
  );
};
