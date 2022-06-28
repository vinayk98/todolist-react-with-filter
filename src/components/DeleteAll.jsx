import React, { useContext } from "react";
import { TodoContext } from "../App";

export const DeleteAll = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <div>
      <button
        onClick={() => {
          const newItems = todos.filter((localItem) => {
            if (localItem.checked === true) {
              return false;
            }
            return true;
          });
          setTodos(newItems);
        }}
      >
        Delete all
      </button>
    </div>
  );
};
