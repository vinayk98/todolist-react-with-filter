import React from "react";
import { useStore } from "../store/zustandStore";
import { SET_TODOS } from "../store/CONSTANTS";

export const DeleteAll = () => {
  const dispatch = useStore((state) => state.dispatch);
  const { todos } = useStore((state) => ({
    todos: state.todos,
  }));
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
          // setTodos(newItems);
          dispatch({
            type: SET_TODOS,
            payload: newItems,
          });
        }}
      >
        Delete all
      </button>
    </div>
  );
};
