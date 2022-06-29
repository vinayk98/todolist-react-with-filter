import React from "react";
import { TodosDivItems } from "./TodosDivItems";
import { useStore } from "../store/zustandStore";

export const TodosDiv = () => {
  const tabName = useStore((state) => state.tabName);
  const filterText = useStore((state) => state.filterText);
  const todos = useStore((state) => state.todos);
  let newData = [];
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
