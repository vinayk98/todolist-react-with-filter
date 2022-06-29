import React from "react";
import { useStore } from "../store/zustandStore";

import { TodosDivItems } from "./TodosDivItems";

export const TodosDiv = () => {
  const { todos, tabName, filterText } = useStore((state) => ({
    todos: state.todos,
    tabName: state.tabName,
    filterText: state.filterText,
  }));
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
  }
  return (
    <div>
      {newData.map((item, index) => {
        return <TodosDivItems key={index} item={item} />;
      })}
    </div>
  );
};
