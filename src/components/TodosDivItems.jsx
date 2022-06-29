import React from "react";
import { SET_TODOS } from "../store/CONSTANTS";
import { useStore } from "../store/zustandStore";
export const TodosDivItems = ({ item }) => {
  const { todos, tabName } = useStore((state) => ({
    todos: state.todos,
    tabName: state.tabName,
  }));
  const dispatch = useStore((state) => state.dispatch);
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
          dispatch({
            type: SET_TODOS,
            payload: newItems,
          });
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
            dispatch({
              type: SET_TODOS,
              payload: newItems,
            });
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};
