import React, { useContext } from "react";
import { TodoContext } from "../App";
export const TodosDivItems = ({ item }) => {
  const { setTodos, todos, tabName } = useContext(TodoContext);
  return (
    <div className="todoDiv">
      <input
        className="inp"
        type="checkbox"
        id="cBox"
        name="cBox"
        checked={item.checked}
        onChange={() => {
          const newItems = todos.map((localItem) => {
            if (localItem.id === item.id) {
              localItem.checked = !localItem.checked;
            }
            return localItem;
          });
          setTodos(newItems);
        }}
      />

      <div
        className={
          item.checked
            ? "textDecorationRed todoItem"
            : "textDecorationBlue todoItem"
        }
      >
        {item.name}
      </div>
      {tabName === "Completed" && (
        <button
          className="todoDelete"
          onClick={() => {
            const newItems = todos.filter((localItem) => {
              if (item.id === localItem.id) {
                return false;
              }
              return true;
            });
            setTodos(newItems);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};
